import asyncio
from livekit.plugins import groq
from dotenv import load_dotenv

load_dotenv()

async def main():
    llm = groq.LLM(model="llama-3.1-8b-instant")
    print("Groq LLM initialized")
    
asyncio.run(main())
