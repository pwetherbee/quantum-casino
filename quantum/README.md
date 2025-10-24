# Quantum Games Backend

Minimal Python service that runs real IBM Quantum circuits (via `qiskit-ibm-runtime`) for casino-style games. Uses Poetry for environment and dependency management.

## Prerequisites

- Python 3.11+
- Poetry (`pipx install poetry` or `pip install poetry`)
- An IBM Cloud account with access to IBM Quantum
- Your IBM Cloud API Key
- Your Qiskit Runtime instance CRN

## Installation

```bash
# Install dependencies
poetry install

# Copy environment template and configure
cp .env.example .env
# Edit .env with your IBM Cloud credentials
```

## Configuration

Create a `.env` file with your IBM Cloud credentials:

```env
IBM_CLOUD_API_KEY=your_api_key_here
QISKIT_INSTANCE_CRN=crn:v1:bluemix:public:quantum-computing:us-east:...
QISKIT_BACKEND=ibmq_qasm_simulator
DEFAULT_SHOTS=1024
```

## Usage

### CLI

```bash
# Play Filter game
poetry run python -m quantum_games.cli filter --qcount 5 --shots 1024

# Play Entangled Wager game
poetry run python -m quantum_games.cli entangled --qa 3 --qb 5 --shots 1024
```

### API Server

```bash
# Start the server
poetry run uvicorn quantum_games.server:app --reload --port 8080

# Test with curl
curl -X POST http://127.0.0.1:8080/play/filter \
  -H 'content-type: application/json' \
  -d '{"qcount": 6, "shots": 1024}'
```

## Testing

```bash
poetry run pytest tests/ -v
```

## Project Structure

```
quantum/
├── src/
│   └── quantum_games/
│       ├── __init__.py
│       ├── service.py      # IBM Quantum Runtime service
│       ├── circuits.py     # Quantum circuit builders
│       ├── games.py        # Game logic and adapters
│       ├── cli.py          # Command-line interface
│       └── server.py       # FastAPI server
├── tests/
│   └── test_smoke.py       # Basic tests
├── pyproject.toml
├── .env.example
└── README.md
```

## Games

### Filter Game

Player bets quantum chips, which affect the rotation angle of a qubit. Higher bets increase win probability.

### Entangled Wager

Two players bet quantum chips. The game creates an entangled Bell pair and measures correlations to determine the winner.

## License

MIT
