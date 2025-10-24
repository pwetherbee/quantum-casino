"""Core quantum service initialization and runtime helpers."""

import os
from typing import Optional
from dotenv import load_dotenv
from qiskit_ibm_runtime import QiskitRuntimeService, SamplerV2 as Sampler
from qiskit_ibm_runtime.fake_provider import FakeProvider

# Load environment variables
load_dotenv()

# Global service instance
_service: Optional[QiskitRuntimeService] = None
_backend_cache = {}


def get_service() -> QiskitRuntimeService:
    """
    Initialize and return the QiskitRuntimeService instance.
    Uses IBM Cloud authentication with API key and instance CRN from environment.
    
    Returns:
        QiskitRuntimeService: The initialized service instance
    """
    global _service
    
    if _service is None:
        api_key = os.getenv("IBM_CLOUD_API_KEY")
        instance_crn = os.getenv("QISKIT_INSTANCE_CRN")
        
        if not api_key or not instance_crn:
            raise ValueError(
                "Missing required environment variables: "
                "IBM_CLOUD_API_KEY and QISKIT_INSTANCE_CRN"
            )
        
        _service = QiskitRuntimeService(
            channel="ibm_cloud",
            token=api_key,
            instance=instance_crn
        )
    
    return _service


def get_backend(name: Optional[str] = None):
    """
    Get a backend by name, or use the default from environment.
    
    Args:
        name: Backend name (e.g., 'ibm_oslo', 'ibm_perth'). 
              If None, uses QISKIT_BACKEND from env.
    
    Returns:
        Backend instance
    """
    backend_name = name or os.getenv("QISKIT_BACKEND", "ibmq_qasm_simulator")
    
    if backend_name in _backend_cache:
        return _backend_cache[backend_name]
    
    service = get_service()
    backend = service.backend(backend_name)
    _backend_cache[backend_name] = backend
    
    return backend


def run_sampler(circuits, shots: Optional[int] = None, backend_name: Optional[str] = None, **kwargs):
    """
    Run circuits using the Sampler primitive and return results with metadata.
    
    Args:
        circuits: Single circuit or list of circuits to run
        shots: Number of shots (uses DEFAULT_SHOTS from env if not specified)
        backend_name: Backend to use (uses QISKIT_BACKEND from env if not specified)
        **kwargs: Additional sampler options
    
    Returns:
        dict: Results with job_id, backend name, shots, and raw counts
    """
    if shots is None:
        shots = int(os.getenv("DEFAULT_SHOTS", "1024"))
    
    backend = get_backend(backend_name)
    
    # Initialize Sampler with the backend
    sampler = Sampler(backend=backend)
    
    # Ensure circuits is a list
    if not isinstance(circuits, list):
        circuits = [circuits]
    
    # Run the sampler job
    job = sampler.run(circuits, shots=shots, **kwargs)
    result = job.result()
    
    # Extract counts from result
    # SamplerV2 returns results differently than V1
    counts_list = []
    for i, pub_result in enumerate(result):
        # Get the bitstring counts
        counts = pub_result.data.meas.get_counts()
        counts_list.append(counts)
    
    return {
        "job_id": job.job_id(),
        "backend": backend.name,
        "shots": shots,
        "counts": counts_list[0] if len(counts_list) == 1 else counts_list,
        "result": result
    }


def get_default_shots() -> int:
    """Get the default number of shots from environment."""
    return int(os.getenv("DEFAULT_SHOTS", "1024"))
