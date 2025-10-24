"""FastAPI server for quantum games."""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional
from .games import play_filter, play_entangled_wager

app = FastAPI(
    title="Quantum Games API",
    description="API for playing quantum casino games using IBM Quantum",
    version="0.1.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure this properly for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Request/Response Models
class FilterRequest(BaseModel):
    qcount: int = Field(..., description="Number of quantum chips to bet", ge=1, le=20)
    shots: Optional[int] = Field(None, description="Number of measurement shots", ge=100, le=10000)


class EntangledWagerRequest(BaseModel):
    qa: int = Field(..., description="Player A quantum chips", ge=1, le=20)
    qb: int = Field(..., description="Player B quantum chips", ge=1, le=20)
    shots: Optional[int] = Field(None, description="Number of measurement shots", ge=100, le=10000)


@app.get("/")
async def root():
    """Root endpoint with API information."""
    return {
        "name": "Quantum Games API",
        "version": "0.1.0",
        "endpoints": {
            "filter": "/play/filter",
            "entangled_wager": "/play/entangled-wager"
        }
    }


@app.get("/health")
async def health():
    """Health check endpoint."""
    return {"status": "healthy"}


@app.post("/play/filter")
async def play_filter_endpoint(request: FilterRequest):
    """
    Play the Filter quantum game.
    
    The player bets quantum chips and the circuit rotates based on that bet.
    Higher bets increase the probability of winning.
    """
    try:
        result = play_filter(request.qcount, request.shots)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/play/entangled-wager")
async def play_entangled_wager_endpoint(request: EntangledWagerRequest):
    """
    Play the Entangled Wager quantum game.
    
    Two players bet quantum chips. The game creates an entangled pair
    and measures to determine the winner based on quantum correlations.
    """
    try:
        result = play_entangled_wager(request.qa, request.qb, request.shots)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
