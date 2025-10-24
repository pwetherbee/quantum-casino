"""Game adapters that map gameplay to circuits and compute outcomes."""

from typing import Dict, Any, Optional
from datetime import datetime
from .circuits import make_filter_circuit, make_entangled_pair, get_circuit_hash
from .service import run_sampler, get_default_shots


def play_filter(qcount: int, shots: Optional[int] = None) -> Dict[str, Any]:
    """
    Play the Filter game.
    
    The player bets quantum chips (qcount) and the circuit rotates based on that.
    Higher qcount = higher probability of winning (measuring |1⟩).
    
    Args:
        qcount: Number of quantum chips to bet
        shots: Number of measurement shots (uses default if not specified)
    
    Returns:
        dict: Game result with outcome, counts, job_id, audit info
    """
    if shots is None:
        shots = get_default_shots()
    
    # Build the circuit
    circuit, circuit_metadata = make_filter_circuit(qcount)
    circuit_hash = get_circuit_hash(circuit)
    
    # Run on quantum backend
    result = run_sampler(circuit, shots=shots)
    counts = result["counts"]
    
    # Determine outcome
    # Win if measured |1⟩, lose if measured |0⟩
    ones_count = counts.get("1", 0)
    zeros_count = counts.get("0", 0)
    
    win_probability = ones_count / shots
    outcome = "win" if ones_count > zeros_count else "lose"
    
    # Build response
    return {
        "game_type": "filter",
        "outcome": outcome,
        "win_probability": win_probability,
        "counts": counts,
        "shots": shots,
        "params": {
            "qcount": qcount,
            "theta": circuit_metadata["theta"],
            "theta_degrees": circuit_metadata["theta_degrees"]
        },
        "audit": {
            "job_id": result["job_id"],
            "backend": result["backend"],
            "circuit_hash": circuit_hash,
            "timestamp": datetime.utcnow().isoformat()
        }
    }


def play_entangled_wager(qcount_a: int, qcount_b: int, shots: Optional[int] = None) -> Dict[str, Any]:
    """
    Play the Entangled Wager game.
    
    Two players bet quantum chips. The game creates an entangled pair and measures.
    Correlation in outcomes determines the winner.
    
    Args:
        qcount_a: Player A's quantum chip bet
        qcount_b: Player B's quantum chip bet
        shots: Number of measurement shots
    
    Returns:
        dict: Game result with outcomes for both players
    """
    if shots is None:
        shots = get_default_shots()
    
    # Calculate theta based on both players' bets
    import math
    theta = (qcount_a - qcount_b) * 0.1 * math.pi
    
    # Build the circuit
    circuit, circuit_metadata = make_entangled_pair(theta)
    circuit_hash = get_circuit_hash(circuit)
    
    # Run on quantum backend
    result = run_sampler(circuit, shots=shots)
    counts = result["counts"]
    
    # Analyze correlations
    correlated = counts.get("00", 0) + counts.get("11", 0)
    anticorrelated = counts.get("01", 0) + counts.get("10", 0)
    
    correlation_strength = correlated / shots
    
    # Determine winner based on correlation
    if correlated > anticorrelated:
        outcome = "player_a_wins"
        winner = "player_a"
    elif anticorrelated > correlated:
        outcome = "player_b_wins"
        winner = "player_b"
    else:
        outcome = "tie"
        winner = "tie"
    
    return {
        "game_type": "entangled_wager",
        "outcome": outcome,
        "winner": winner,
        "correlation_strength": correlation_strength,
        "counts": counts,
        "shots": shots,
        "params": {
            "qcount_a": qcount_a,
            "qcount_b": qcount_b,
            "theta": circuit_metadata["theta"],
            "theta_degrees": circuit_metadata["theta_degrees"]
        },
        "audit": {
            "job_id": result["job_id"],
            "backend": result["backend"],
            "circuit_hash": circuit_hash,
            "timestamp": datetime.utcnow().isoformat()
        }
    }


def compute_payout(game_result: Dict[str, Any], bet_amount: float) -> float:
    """
    Compute payout based on game result and bet amount.
    
    Args:
        game_result: Result dict from a game function
        bet_amount: Amount bet by player
    
    Returns:
        float: Payout amount (0 if loss, multiplier * bet if win)
    """
    game_type = game_result["game_type"]
    
    if game_type == "filter":
        if game_result["outcome"] == "win":
            # Payout based on win probability
            # Lower probability = higher payout
            win_prob = game_result["win_probability"]
            if win_prob > 0:
                multiplier = min(10.0, 1.0 / win_prob)  # Cap at 10x
                return bet_amount * multiplier
        return 0.0
    
    elif game_type == "entangled_wager":
        if game_result["outcome"] == "tie":
            return bet_amount  # Return bet
        elif "wins" in game_result["outcome"]:
            # Winner gets 2x their bet
            return bet_amount * 2.0
        return 0.0
    
    return 0.0
