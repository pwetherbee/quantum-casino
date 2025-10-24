"""Functions that build quantum circuits from parameters."""

import math
from typing import List, Dict, Any
from qiskit import QuantumCircuit
import hashlib


def make_filter_circuit(qcount: int) -> tuple[QuantumCircuit, Dict[str, Any]]:
    """
    Build a simple filter circuit using RY rotation based on qcount.
    
    The filter game uses a parameterized rotation angle that depends on the
    number of quantum chips (qcount). Higher qcount = higher rotation angle,
    which affects the probability of measuring |1⟩.
    
    Args:
        qcount: Number of quantum chips (affects rotation angle)
    
    Returns:
        tuple: (circuit, metadata dict with theta and qcount)
    """
    # Calculate theta based on qcount
    # Using a simple linear mapping: theta = theta_0 + alpha * qcount
    # Clamped between theta_min and theta_max
    theta_0 = math.pi / 4  # Base angle (45 degrees)
    alpha = 0.1  # Scaling factor
    theta_min = 0.0
    theta_max = math.pi / 2  # 90 degrees max
    
    theta = max(theta_min, min(theta_max, theta_0 + alpha * qcount))
    
    # Build the circuit
    qc = QuantumCircuit(1, 1)
    qc.ry(theta, 0)
    qc.measure(0, 0)
    
    metadata = {
        "theta": theta,
        "theta_degrees": math.degrees(theta),
        "qcount": qcount,
        "circuit_type": "filter"
    }
    
    return qc, metadata


def make_entangled_pair(theta: float) -> tuple[QuantumCircuit, Dict[str, Any]]:
    """
    Build a circuit that creates an entangled Bell pair with parameterized rotation.
    
    Creates a Bell state |Φ⟩ = (|00⟩ + e^(iθ)|11⟩)/√2
    
    Args:
        theta: Rotation angle for phase gate
    
    Returns:
        tuple: (circuit, metadata dict)
    """
    qc = QuantumCircuit(2, 2)
    
    # Create Bell pair
    qc.h(0)  # Hadamard on qubit 0
    qc.cx(0, 1)  # CNOT from qubit 0 to 1
    
    # Apply phase rotation
    qc.p(theta, 1)
    
    # Measure both qubits
    qc.measure([0, 1], [0, 1])
    
    metadata = {
        "theta": theta,
        "theta_degrees": math.degrees(theta),
        "circuit_type": "entangled_pair",
        "num_qubits": 2
    }
    
    return qc, metadata


def make_slots_circuit(n_qubits: int, angles: List[float]) -> tuple[QuantumCircuit, Dict[str, Any]]:
    """
    Build a multi-qubit circuit for slot machine style games.
    
    Each qubit gets a parameterized rotation, creating different probability
    distributions for various measurement outcomes.
    
    Args:
        n_qubits: Number of qubits (reels)
        angles: List of rotation angles (one per qubit)
    
    Returns:
        tuple: (circuit, metadata dict)
    """
    if len(angles) != n_qubits:
        raise ValueError(f"Number of angles ({len(angles)}) must match n_qubits ({n_qubits})")
    
    qc = QuantumCircuit(n_qubits, n_qubits)
    
    # Apply RY rotation to each qubit
    for i, angle in enumerate(angles):
        qc.ry(angle, i)
    
    # Measure all qubits
    qc.measure(range(n_qubits), range(n_qubits))
    
    metadata = {
        "angles": angles,
        "angles_degrees": [math.degrees(a) for a in angles],
        "circuit_type": "slots",
        "num_qubits": n_qubits
    }
    
    return qc, metadata


def get_circuit_hash(circuit: QuantumCircuit) -> str:
    """
    Generate a stable hash of a quantum circuit for audit purposes.
    
    Args:
        circuit: The quantum circuit to hash
    
    Returns:
        str: Hexadecimal hash string
    """
    # Use string representation for stable hashing
    # In Qiskit 2.x, use the circuit's string representation
    circuit_str = str(circuit)
    return hashlib.sha256(circuit_str.encode()).hexdigest()


def make_grover_oracle(n_qubits: int, marked_state: str) -> tuple[QuantumCircuit, Dict[str, Any]]:
    """
    Build a simple Grover oracle that marks a specific state.
    
    Args:
        n_qubits: Number of qubits
        marked_state: Binary string representing the marked state (e.g., "101")
    
    Returns:
        tuple: (circuit, metadata dict)
    """
    if len(marked_state) != n_qubits:
        raise ValueError(f"Marked state length ({len(marked_state)}) must match n_qubits ({n_qubits})")
    
    qc = QuantumCircuit(n_qubits, n_qubits)
    
    # Apply X gates to qubits that should be 0 in the marked state
    for i, bit in enumerate(marked_state):
        if bit == '0':
            qc.x(i)
    
    # Apply multi-controlled Z gate
    if n_qubits > 1:
        qc.h(n_qubits - 1)
        qc.mcx(list(range(n_qubits - 1)), n_qubits - 1)
        qc.h(n_qubits - 1)
    else:
        qc.z(0)
    
    # Undo the X gates
    for i, bit in enumerate(marked_state):
        if bit == '0':
            qc.x(i)
    
    # Measure all qubits
    qc.measure(range(n_qubits), range(n_qubits))
    
    metadata = {
        "marked_state": marked_state,
        "circuit_type": "grover_oracle",
        "num_qubits": n_qubits
    }
    
    return qc, metadata
