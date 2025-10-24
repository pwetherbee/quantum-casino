"""Smoke tests for quantum games."""

import pytest
from quantum_games.circuits import (
    make_filter_circuit,
    make_entangled_pair,
    make_slots_circuit,
    get_circuit_hash
)


def test_make_filter_circuit():
    """Test filter circuit creation."""
    circuit, metadata = make_filter_circuit(qcount=5)
    
    assert circuit is not None
    assert circuit.num_qubits == 1
    assert circuit.num_clbits == 1
    assert "theta" in metadata
    assert metadata["qcount"] == 5
    assert metadata["circuit_type"] == "filter"


def test_make_entangled_pair():
    """Test entangled pair circuit creation."""
    import math
    theta = math.pi / 4
    circuit, metadata = make_entangled_pair(theta)
    
    assert circuit is not None
    assert circuit.num_qubits == 2
    assert circuit.num_clbits == 2
    assert metadata["theta"] == theta
    assert metadata["circuit_type"] == "entangled_pair"


def test_make_slots_circuit():
    """Test slots circuit creation."""
    import math
    n_qubits = 3
    angles = [math.pi / 6, math.pi / 4, math.pi / 3]
    
    circuit, metadata = make_slots_circuit(n_qubits, angles)
    
    assert circuit is not None
    assert circuit.num_qubits == n_qubits
    assert circuit.num_clbits == n_qubits
    assert metadata["angles"] == angles
    assert metadata["num_qubits"] == n_qubits


def test_make_slots_circuit_validation():
    """Test slots circuit validation."""
    import math
    
    # Should raise error if angles don't match n_qubits
    with pytest.raises(ValueError):
        make_slots_circuit(3, [math.pi / 4, math.pi / 3])  # Only 2 angles for 3 qubits


def test_circuit_hash():
    """Test circuit hash generation."""
    circuit1, _ = make_filter_circuit(5)
    circuit2, _ = make_filter_circuit(5)
    circuit3, _ = make_filter_circuit(7)
    
    hash1 = get_circuit_hash(circuit1)
    hash2 = get_circuit_hash(circuit2)
    hash3 = get_circuit_hash(circuit3)
    
    # Same parameters should produce same hash
    assert hash1 == hash2
    # Different parameters should produce different hash
    assert hash1 != hash3
    # Hash should be hex string
    assert len(hash1) == 64  # SHA256 produces 64 hex chars


def test_filter_circuit_theta_scaling():
    """Test that filter circuit theta scales with qcount."""
    circuit1, metadata1 = make_filter_circuit(1)
    circuit5, metadata5 = make_filter_circuit(5)
    circuit10, metadata10 = make_filter_circuit(10)
    
    # Higher qcount should give higher theta
    assert metadata1["theta"] < metadata5["theta"]
    assert metadata5["theta"] < metadata10["theta"]
    
    # But should be capped at pi/2
    import math
    assert metadata10["theta"] <= math.pi / 2
