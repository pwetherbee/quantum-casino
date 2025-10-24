Here’s a **quick README** you can drop into a repo and hand to a coding assistant. It assumes **Python 3.11+** and **Poetry**, and uses the **Qiskit IBM Runtime Python SDK** to run real quantum jobs. It also outlines a tiny FastAPI microservice (optional) your TS/Next.js app can call.

---

# Quantum Games Backend (Poetry + Qiskit IBM Runtime)

> Minimal Python service that runs **real IBM Quantum** circuits (via `qiskit-ibm-runtime`) for casino-style games. Uses Poetry for env + deps. Ships with a simple FastAPI endpoint and CLI.

## 0) Prereqs

- Python **3.11+**
- **Poetry** (`pipx install poetry` or `pip install poetry`)
- An **IBM Cloud** account with access to IBM Quantum
- Your **IBM Cloud API Key**
- Your **Qiskit Runtime instance CRN** (from IBM Quantum dashboard)

## 1) Clone & bootstrap

```bash
git clone <your-repo-url> quantum-games
cd quantum-games

# Initialize Poetry env
poetry env use python3.11
poetry install
```

If this is a brand-new repo, the assistant should:

```bash
poetry new --src quantum_games
cd quantum_games
```

## 2) Dependencies

We use:

- `qiskit-ibm-runtime` – submit runtime jobs (Sampler/Estimator)
- `qiskit` – circuit building
- `python-dotenv` – load `.env`
- (optional) `fastapi` + `uvicorn` – HTTP service for your JS frontend
- (optional) `pydantic` – request/response models
- (optional) `pytest` – tests

Install (the assistant can run this if `pyproject.toml` isn’t present):

```bash
poetry add qiskit qiskit-ibm-runtime python-dotenv
poetry add fastapi uvicorn pydantic --group server
poetry add pytest --group dev
```

## 3) Configuration

Create **`.env`** at the repo root:

```dotenv
# .env
IBM_CLOUD_API_KEY=replace_me
QISKIT_INSTANCE_CRN=crn:v1:bluemix:public:quantum:us-east:...:instance:...
QISKIT_BACKEND=ibm_oslo   # or another available backend; use a real QPU for production, simulator for dev
# Optional knobs
DEFAULT_SHOTS=1024
```

> Never commit `.env`. Provide `.env.example` for teammates.

## 4) Project structure (what the assistant should create)

```
.
├─ pyproject.toml
├─ .env.example
├─ README.md
├─ src/
│  └─ quantum_games/
│     ├─ __init__.py
│     ├─ service.py          # Core: runtime service init + helpers
│     ├─ circuits.py         # Functions that build circuits (param: qcount, etc.)
│     ├─ games.py            # Game adapters (Filter, Heralded Split, etc.)
│     ├─ cli.py              # Simple CLI entrypoints
│     └─ server.py           # FastAPI app (optional)
└─ tests/
   └─ test_smoke.py
```

## 5) What each module should do

### `service.py`

- Load env (`python-dotenv`).
- Initialize `QiskitRuntimeService(auth="cloud", token=IBM_CLOUD_API_KEY, instance=QISKIT_INSTANCE_CRN)`.
- Resolve backend (`service.backend(os.getenv("QISKIT_BACKEND", "ibmq_qasm_simulator"))`).
- Expose helpers:

  - `get_service() -> QiskitRuntimeService`
  - `get_backend(name: str | None=None)`
  - `run_sampler(circuits, shots: int, **kwargs) -> SamplerResult`
  - Utility to capture **job_id**, **backend name**, **shots**, **raw counts/samples**.

### `circuits.py`

- Functions that **build circuits from parameters** (no network calls):

  - `make_filter_circuit(qcount: int) -> QuantumCircuit`
  - `make_entangled_pair(theta: float) -> QuantumCircuit`
  - `make_slots_circuit(n_qubits: int, angles: list[float]) -> QuantumCircuit`

- Keep these **pure** (deterministic). The assistant should add docstrings + return a circuit and a `metadata` dict (e.g., angles used).

### `games.py`

- Adapters that **map gameplay → circuit + sampler request → outcome**.
- Example functions:

  - `play_filter(qcount: int, shots: int | None=None) -> dict`
    Returns `{ outcome, counts, job_id, backend, params }`.
  - `play_entangled_wager(qcount_a: int, qcount_b: int, shots: int | None=None) -> dict`

- Include **deterministic payout logic** (map bitstrings to win/lose, compute probabilities if needed).
- Always return an **audit payload**: `{job_id, backend, shots, circuit_hash, params, raw_counts}`.

### `cli.py`

- Simple CLI to smoke test:

  - `python -m quantum_games.cli filter --qcount 7 --shots 2048`
  - Prints JSON with `{ outcome, job_id, counts }`.

### `server.py` (optional, but recommended)

- **FastAPI** app with endpoints:

  - `POST /play/filter` → body `{qcount:int, shots?:int}` → returns `{ outcome, job_id, audit }`.
  - `POST /play/entangled-wager` → `{qa:int, qb:int, shots?:int}` → returns result + audit.

- CORS enabled for your Next.js origin (if needed).
- **Never** expose secrets; secrets are only on the server.

## 6) Run locally

### CLI

```bash
poetry run python -m quantum_games.cli filter --qcount 5 --shots 1024
```

### API server

```bash
poetry run uvicorn quantum_games.server:app --reload --port 8080
```

Test:

```bash
curl -X POST http://127.0.0.1:8080/play/filter \
  -H 'content-type: application/json' \
  -d '{"qcount": 6, "shots": 1024}'
```

## 7) Coding tasks (hand this to the assistant)

- [ ] Create files per structure above.
- [ ] Implement `service.py`:

  - [ ] Load `.env`
  - [ ] Initialize `QiskitRuntimeService(auth="cloud", token=..., instance=...)`
  - [ ] Helper to choose backend from `QISKIT_BACKEND`
  - [ ] `run_sampler(circuits, shots)` that returns result + attaches `job_id`

- [ ] Implement `circuits.py`:

  - [ ] `make_filter_circuit(qcount)` using a simple `RY(θ(qcount))` → measure
  - [ ] Deterministic `θ(qcount)` mapping (e.g., `θ = clamp(θ0 + α*qcount, θmin, θmax)`) and return `{"theta": θ}`

- [ ] Implement `games.py`:

  - [ ] `play_filter(qcount, shots)` – build circuit → `run_sampler` → compute **win/lose** (`bit="1"` wins, for example)
  - [ ] Return **audit** dict: `job_id`, `backend`, `shots`, `params`, `counts`, `circuit_hash`

- [ ] Implement `cli.py` subcommands for quick testing.
- [ ] Implement `server.py` (FastAPI) endpoints for `filter`, `entangled-wager` (stub okay).
- [ ] Add `tests/test_smoke.py` that uses simulator backend and asserts keys in the response.
- [ ] Provide `.env.example`.

## 8) Env & secrets

- The SDK can also store credentials persistently:

  ```python
  from qiskit_ibm_runtime import IBMRuntimeService
  IBMRuntimeService.save_account(auth="cloud", token="<IBM_CLOUD_API_KEY>", instance="<CRN>")
  ```

- For containerized deploys, stick to **env vars**, not file-based accounts.

## 9) Backends & modes

- **Dev**: `ibmq_qasm_simulator` (fast, no queue).
- **Prod/real**: a real backend (e.g., `ibm_oslo`, `ibm_perth`, etc.). Expect **queue time** and **noise**. Consider **sessions** later for performance.

## 10) Audit strategy (required outputs per play)

Every game result should persist:

```
game_type
qcount_used
shots
params (angles, ancilla count, etc.)
backend_name
job_id
raw_counts (or compact hash)
circuit_hash (stable hash of qasm/circuit)
timestamp
```

## 11) Common pitfalls

- Mixed Qiskit versions → use a clean Poetry venv.
- Don’t block your web request on long QPU queues; if needed, queue internally and notify client when ready (or prefetch batches).
- Never return secrets to clients. Only return **job ids** and **audit fields**.

## 12) Makefile (optional convenience)

```makefile
.PHONY: install run api test
install:
\tpoetry install
run:
\tpoetry run python -m quantum_games.cli filter --qcount 5 --shots 1024
api:
\tpoetry run uvicorn quantum_games.server:app --reload --port 8080
test:
\tpoetry run pytest -q
```

---

### Done ✅

Give this README to your coding assistant. They can scaffold the files, wire up the Poetry project, and implement the circuits/games exactly as outlined. If you want, I can next produce the **exact API request/response schemas** (Pydantic models) and a **minimal circuit definition** for the `filter` game (still keeping it lightweight).
