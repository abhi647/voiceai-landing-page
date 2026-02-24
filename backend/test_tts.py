import asyncio
import os
from dotenv import load_dotenv
from livekit.plugins import elevenlabs

load_dotenv()

async def test_tts():
    tts = elevenlabs.TTS()
    print("Testing ElevenLabs TTS...")
    text_stream = ["Hello, this is a test of the Eleven Labs TTS system."]
    
    try:
        # synthesize returns an AsyncIterable
        audio_stream = tts.synthesize(text="Hello, this is a test of the Eleven Labs TTS system.")
        frame_count = 0
        async for frame in audio_stream:
            frame_count += 1
            if frame_count == 1:
                print("Received first audio frame!")
        
        print(f"Success! Received {frame_count} audio frames.")
    except Exception as e:
        print(f"Error during TTS synthesis: {e}")

if __name__ == "__main__":
    asyncio.run(test_tts())
