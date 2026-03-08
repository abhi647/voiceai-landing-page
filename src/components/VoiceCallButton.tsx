import React, { useState, useEffect, useCallback } from 'react';
import { PhoneOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LiveKitRoom, useConnectionState, RoomAudioRenderer, StartAudio } from '@livekit/components-react';
import { ConnectionState } from 'livekit-client';

export const VoiceCallButton = () => {
  const [token, setToken] = useState("");
  const [serverUrl, setServerUrl] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const handleStartCall = useCallback(async () => {
    // Synchronously unlock ambient audio on the first user gesture
    if (audioRef.current) {
      audioRef.current.volume = 0.45;
      audioRef.current.play().then(() => {
        audioRef.current?.pause();
      }).catch(console.error);
    }

    try {
      setIsFetching(true);
      // Use relative URL to leverage Vercel rewrites (avoids Mixed Content issues)
      // Fallback to VITE_BACKEND_URL for local development if needed
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "";
      const isProd = import.meta.env.PROD;
      const endpoint = isProd ? "/api/get-token" : `${backendUrl}/api/get-token`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roomName: "healthcare-voice-agent-" + Math.floor(Math.random() * 10000),
          participantName: "User"
        })
      });

      console.log(`Fetch response status: ${response.status} (${response.statusText})`);

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.detail || `Server returned ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setToken(data.token);
      setServerUrl(data.url);
    } catch (err: any) {
      console.error("Voice connection error details:", err);
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "";
      const isProd = import.meta.env.PROD;
      const endpoint = isProd ? "/api/get-token" : `${backendUrl}/api/get-token`;
      
      alert(`Voice Connection Failed!\n\nURL: ${endpoint}\nError: ${err.message}\n\nTroubleshooting:\n1. Ensure the backend VM is running.\n2. Verify the IP in vercel.json is correct.\n3. Check backend logs on the VM.`);
    } finally {
      setIsFetching(false);
    }
  }, []);

  const handleEndCall = useCallback(() => {
    setToken("");
    setServerUrl("");
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, []);

  return (
    <div className="relative">
      {/* Ambient noise tag permanently in DOM to bypass async autoplay blocks */}
      <audio ref={audioRef} src="/crowded-room-7.mp3" loop style={{ display: 'none' }} />
      
      {token && serverUrl ? (
        <LiveKitRoom
          serverUrl={serverUrl}
          token={token}
          connect={true}
          audio={true}
          onDisconnected={handleEndCall}
        >
          <ConnectedCallButton onEndCall={handleEndCall} audioRef={audioRef} />
          <RoomAudioRenderer />
          {/* Failsafe: Pop-up button if browser strictly blocks WebRTC audio */}
          <StartAudio 
            label="Click to allow AI voice" 
            className="absolute top-14 right-0 bg-primary/95 text-white px-4 py-2 rounded shadow-lg z-50 text-sm animate-bounce whitespace-nowrap outline-none ring-2 ring-white"
          />
        </LiveKitRoom>
      ) : (
        <button
          onClick={handleStartCall}
          className={cn(
            "relative flex items-center justify-center transition-all duration-300 ease-in-out select-none",
            "px-6 py-2.5 rounded-full text-sm min-w-[155px]", 
            !isFetching && "bg-transparent border-2 border-primary text-primary font-semibold hover:bg-primary/5 hover:scale-[1.02]",
            isFetching && "bg-transparent border-2 border-primary text-primary font-semibold animate-pulse cursor-wait"
          )}
          disabled={isFetching}
        >
          <span>{isFetching ? 'Connecting...' : 'Start Speaking'}</span>
        </button>
      )}
    </div>
  );
};

// Inner component to access LiveKit hooks
const ConnectedCallButton = ({ onEndCall, audioRef }: { onEndCall: () => void, audioRef: React.RefObject<HTMLAudioElement> }) => {
  const connectionState = useConnectionState();
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("LiveKit Connection State:", connectionState);
    let interval: NodeJS.Timeout;
    if (connectionState === ConnectionState.Connected) {
      console.log("Successfully connected to LiveKit room!");
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      
      // Play ambient background noise when fully connected
      if (audioRef.current) {
        audioRef.current.volume = 0.45;
        audioRef.current.play().then(() => {
          console.log("Background noise playing");
        }).catch(err => {
          console.error("Background noise failed to play:", err);
        });
      }
    } else if (connectionState === ConnectionState.Disconnected) {
      console.log("Disconnected from LiveKit");
      setTime(0);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
    return () => clearInterval(interval);
  }, [connectionState, audioRef]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isConnecting = connectionState === ConnectionState.Connecting;

  return (
    <button
      className={cn(
        "relative flex items-center justify-center transition-all duration-300 ease-in-out select-none",
        "px-6 py-2.5 rounded-full text-sm min-w-[155px]",
        isConnecting && "bg-transparent border-2 border-primary text-primary font-semibold animate-pulse cursor-wait",
        !isConnecting && "bg-white border-2 border-primary cursor-default shadow-sm"
      )}
      disabled={isConnecting}
    >
      {isConnecting ? (
        <span>Connecting...</span>
      ) : (
        <div className="flex items-center gap-3 w-full justify-between">
          <span className="text-primary text-base font-semibold tabular-nums tracking-wide">
            {formatTime(time)}
          </span>
          <button
            onClick={onEndCall}
            className="flex items-center justify-center w-6 h-6 rounded-full hover:bg-red-50 transition-colors group"
            aria-label="End call"
          >
            <PhoneOff 
              className="w-4 h-4 text-red-500 group-hover:text-red-600 transition-colors" 
              strokeWidth={2.5}
            />
          </button>
        </div>
      )}
    </button>
  );
};
