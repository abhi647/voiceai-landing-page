import os
import asyncio
from dotenv import load_dotenv

from livekit.agents import AutoSubscribe, JobContext, JobProcess, JobRequest, WorkerOptions, cli, llm
from livekit.agents.voice import Agent, AgentSession
from livekit.plugins import silero, groq, elevenlabs

load_dotenv()

async def entrypoint(ctx: JobContext):
    # Read the instructions document
    instructions_path = os.path.join(os.path.dirname(__file__), "instructions.txt")
    try:
        with open(instructions_path, "r") as f:
            instructions = f.read()
    except FileNotFoundError:
        instructions = "You are a helpful voice assistant."

    agent = Agent(
        instructions=instructions,
        vad=ctx.proc.userdata["vad"],
        stt=groq.STT(),
        llm=groq.LLM(model="llama-3.1-8b-instant"),
        tts=elevenlabs.TTS(voice_id="X03mvPuTfprif8QBAVeJ", model="eleven_turbo_v2_5"),
    )



    await ctx.connect(auto_subscribe=AutoSubscribe.AUDIO_ONLY)

    # Participant represents the user connecting from the React frontend
    participant = await ctx.wait_for_participant()

    # Start the agent session for the connected room and participant
    session = AgentSession()
    
    # Listen to session events
    @session.on("error")
    def on_session_error(e):
        print(f"SESSION ERROR: {e}", flush=True)
        
    @session.on("agent_state_changed")
    def on_agent_state_changed(agent_state):
        if agent_state == "speaking":
            print(f"AGENT STARTED SPEAKING", flush=True)

    @session.on("speech_created")
    def on_speech_created(event):
        print(f"SPEECH CREATED", flush=True)
    
    await session.start(agent=agent, room=ctx.room)

    await asyncio.sleep(1)
    # Trigger the agent to greet the user directly via TTS using session.say
    print("Initiating agent greeting...", flush=True)
    await session.say("Hi there! How can I help you today?", allow_interruptions=False)
    print("Greeting sent to LiveKit.", flush=True)
    
def prewarm(proc: JobProcess):
    proc.userdata["vad"] = silero.VAD.load()

if __name__ == "__main__":
    cli.run_app(WorkerOptions(
        entrypoint_fnc=entrypoint, 
        prewarm_fnc=prewarm,
        load_threshold=100.0,
    ))
