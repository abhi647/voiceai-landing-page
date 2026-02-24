import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from livekit import api
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, lock this down to the frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TokenRequest(BaseModel):
    roomName: str
    participantName: str

@app.post("/api/get-token")
async def get_token(request: TokenRequest):
    livekit_api_key = os.getenv("LIVEKIT_API_KEY")
    livekit_api_secret = os.getenv("LIVEKIT_API_SECRET")

    if not livekit_api_key or not livekit_api_secret:
        raise HTTPException(status_code=500, detail="LiveKit credentials are not configured")

    token = api.AccessToken(livekit_api_key, livekit_api_secret) \
        .with_identity(request.participantName) \
        .with_name(request.participantName) \
        .with_grants(api.VideoGrants(
            room_join=True,
            room=request.roomName,
            can_publish=True,
            can_subscribe=True,
            can_publish_data=True
        ))

    return {
        "token": token.to_jwt(),
        "url": os.getenv("LIVEKIT_URL")
    }
