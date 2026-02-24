import asyncio
import os
from livekit import api
from dotenv import load_dotenv

load_dotenv()

async def list_dispatch_rules():
    livekit_api_key = os.getenv("LIVEKIT_API_KEY")
    livekit_api_secret = os.getenv("LIVEKIT_API_SECRET")
    livekit_url = os.getenv("LIVEKIT_URL")
    
    client = api.LiveKitAPI(livekit_url, livekit_api_key, livekit_api_secret)
    try:
        rules = await client.room.list_dispatch_rules()
        print("Dispatch Rules:")
        for r in rules:
            print(r)
    except Exception as e:
        print("Error:", e)
    finally:
        await client.aclose()

asyncio.run(list_dispatch_rules())
