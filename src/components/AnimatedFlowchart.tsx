import { useEffect, useState } from "react";
import { PhoneCall, Bot, CalendarCheck, HelpCircle, Activity, DollarSign, UserX, Clock } from "lucide-react";

export const AnimatedFlowchart = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 2500); // 2.5 seconds per step
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative bg-navy overflow-hidden p-6 md:p-10 flex flex-col items-center border border-gray-800 rounded-2xl" style={{ minHeight: "550px" }}>
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
      ></div>

      <div className="text-center mb-12 relative z-10 w-full">
          <h3 className="text-white font-display text-2xl md:text-3xl font-light tracking-wide">Seven Billion's Data Engine Difference</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mt-4 rounded-full opacity-50"></div>
      </div>

      {/* Container for Before/After */}
      <div className="relative w-full max-w-5xl flex flex-col md:flex-row gap-12 md:gap-0 mt-4 z-10 font-body">
        
        {/* Central Divider (Desktop only) */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-800 -translate-x-1/2 pointer-events-none"></div>
        
        {/* --- BEFORE: MANUAL FRONT DESK --- */}
        <div className="flex-1 flex flex-col items-center px-4">
            <h4 className="text-gray-400 font-display text-base md:text-lg mb-8 tracking-wider uppercase font-semibold">Before (Human Staff)</h4>
            
            {/* Step 1: Call Surge */}
            <div className={`flex flex-col items-center transition-opacity duration-500 ${activeStep >= 0 ? "opacity-100" : "opacity-30"}`}>
                <div className="w-16 h-16 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center relative shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                    <PhoneCall className={`w-7 h-7 ${activeStep >= 0 ? "text-red-400" : "text-gray-500"}`} />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full shadow-md">+40</span>
                </div>
                <p className="text-gray-200 font-medium mt-4 text-sm text-center">Morning Call Surge</p>
            </div>

            {/* Line 1 */}
            <div className="w-0.5 h-12 bg-gray-800 relative my-3">
                <div className={`absolute inset-0 bg-red-500 transition-transform duration-1000 origin-top ${activeStep >= 1 ? "scale-y-100" : "scale-y-0"}`}></div>
            </div>

            {/* Step 2: Bottleneck */}
            <div className={`flex flex-col items-center transition-opacity duration-500 ${activeStep >= 1 ? "opacity-100" : "opacity-30"}`}>
                <div className="w-16 h-16 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center relative">
                    <Clock className={`w-7 h-7 ${activeStep >= 1 ? "text-red-400" : "text-gray-500"}`} />
                </div>
                <p className="text-gray-200 font-medium mt-4 text-sm text-center">On Hold (10+ mins)</p>
                <p className="text-red-400 text-[11px] uppercase tracking-wider mt-1 bg-red-900/30 px-2.5 py-0.5 rounded border border-red-800/50">Staff Overwhelmed</p>
            </div>

            {/* Line 2 (Expands to match the After column height) */}
             <div className="w-0.5 flex-grow min-h-[60px] md:min-h-0 bg-gray-800 relative my-3">
                <div className={`absolute inset-0 bg-red-500 transition-transform duration-1000 delay-500 origin-top ${activeStep >= 2 ? "scale-y-100" : "scale-y-0"}`}></div>
            </div>

             {/* Step 3: Result (Failure) */}
             <div className={`flex flex-col items-center transition-opacity duration-500 delay-700 ${activeStep >= 2 ? "opacity-100" : "opacity-30"}`}>
                <div className="w-16 h-16 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center relative mt-2 md:mt-0">
                    <UserX className={`w-7 h-7 ${activeStep >= 2 ? "text-red-400" : "text-gray-500"}`} />
                </div>
                <p className="text-gray-200 font-medium mt-4 text-sm text-center">35% Abandonment Rate</p>
                <p className="text-red-400 text-[11px] uppercase tracking-wider mt-1 bg-red-900/40 px-2.5 py-0.5 rounded font-bold border border-red-800/50">Revenue Lost</p>
            </div>
        </div>

        {/* --- AFTER: AI VOICE AGENT --- */}
        <div className="flex-1 flex flex-col items-center px-4 relative">
             <h4 className="text-teal-400 font-display text-base md:text-lg mb-8 tracking-wider uppercase font-semibold flex items-center gap-2">
                <Bot size={20} className="text-teal-400" /> After (Callie)
            </h4>

            {/* Step 1: Call Surge */}
            <div className={`flex flex-col items-center transition-opacity duration-500 ${activeStep >= 0 ? "opacity-100" : "opacity-30"}`}>
                <div className="w-16 h-16 rounded-full border border-teal-500/30 bg-teal-500/10 flex items-center justify-center relative shadow-[0_0_15px_rgba(20,184,166,0.1)]">
                    <PhoneCall className={`w-7 h-7 ${activeStep >= 0 ? "text-teal-400" : "text-gray-500"}`} />
                    <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full shadow-md">+40</span>
                </div>
                <p className="text-gray-200 font-medium mt-4 text-sm text-center">Morning Call Surge</p>
            </div>

            {/* Line 1 */}
            <div className="w-0.5 h-12 bg-gray-800 relative my-3">
                <div className={`absolute inset-0 bg-teal-400 transition-transform duration-1000 ${activeStep >= 1 ? "scale-y-100" : "scale-y-0"} origin-top`}></div>
            </div>

             {/* Step 2: Instant Answer */}
             <div className={`flex flex-col items-center transition-opacity duration-500 ${activeStep >= 1 ? "opacity-100" : "opacity-30"}`}>
                <div className="relative">
                     <div className={`absolute inset-0 bg-teal-400 rounded-full blur-xl transition-opacity duration-500 ${activeStep >= 1 ? "opacity-30 animate-pulse" : "opacity-0"}`}></div>
                     <div className="w-16 h-16 rounded-full border border-teal-400 bg-teal-500/20 flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(45,212,191,0.2)]">
                        <Bot className={`w-7 h-7 ${activeStep >= 1 ? "text-teal-400" : "text-gray-500"}`} />
                     </div>
                </div>
                <p className="text-gray-200 font-medium mt-4 text-sm text-center">Callie Answers All</p>
                <p className="text-teal-300 text-[11px] uppercase tracking-wider mt-1 bg-teal-900/40 px-2.5 py-0.5 rounded border border-teal-800/50">0s Wait Time</p>
            </div>

            {/* Dynamic Branching Lines */}
            <div className="w-full max-w-[240px] h-[50px] relative mt-3 mb-2 flex justify-center z-0">
                 {/* Left branch */}
                 <div className="absolute top-0 left-1/2 w-[1.5px] h-[70px] bg-gray-800 origin-top -translate-x-1/2 -rotate-[65deg]">
                     <div className={`absolute inset-0 bg-cyan-400 transition-transform duration-1000 delay-300 origin-top ${activeStep >= 2 ? "scale-y-100" : "scale-y-0"}`}></div>
                 </div>
                 {/* Middle branch */}
                 <div className="absolute top-0 left-1/2 w-[1.5px] h-[50px] bg-gray-800 origin-top -translate-x-1/2">
                     <div className={`absolute inset-0 bg-cyan-400 transition-transform duration-1000 delay-400 origin-top ${activeStep >= 2 ? "scale-y-100" : "scale-y-0"}`}></div>
                 </div>
                 {/* Right branch */}
                 <div className="absolute top-0 left-1/2 w-[1.5px] h-[70px] bg-gray-800 origin-top -translate-x-1/2 rotate-[65deg]">
                     <div className={`absolute inset-0 bg-cyan-400 transition-transform duration-1000 delay-500 origin-top ${activeStep >= 2 ? "scale-y-100" : "scale-y-0"}`}></div>
                 </div>
            </div>

            {/* Step 3: Outcomes Grid */}
            <div className="flex gap-2 relative z-10 w-full justify-between max-w-[280px]">
                 <div className={`flex flex-col items-center px-2 py-3 w-[72px] rounded-xl border border-cyan-800/50 transition-all duration-500 shadow-lg ${activeStep >= 2 ? "bg-cyan-900/40 border-cyan-700/80" : "opacity-30 bg-transparent"}`}>
                    <Activity className={`w-5 h-5 ${activeStep >= 2 ? "text-cyan-400" : "text-gray-500"}`} />
                    <span className="text-[11px] text-gray-300 mt-2 font-medium tracking-wide">Triage</span>
                 </div>
                 <div className={`flex flex-col items-center px-2 py-3 w-[72px] rounded-xl border border-cyan-800/50 transition-all duration-500 shadow-lg ${activeStep >= 2 ? "bg-cyan-900/40 border-cyan-700/80" : "opacity-30 bg-transparent"}`}>
                    <HelpCircle className={`w-5 h-5 ${activeStep >= 2 ? "text-cyan-400" : "text-gray-500"}`} />
                    <span className="text-[11px] text-gray-300 mt-2 font-medium tracking-wide">FAQs</span>
                 </div>
                 <div className={`flex flex-col items-center px-2 py-3 w-[72px] rounded-xl border border-cyan-800/50 transition-all duration-500 shadow-lg ${activeStep >= 2 ? "bg-cyan-900/40 border-cyan-700/80" : "opacity-30 bg-transparent"}`}>
                    <CalendarCheck className={`w-5 h-5 ${activeStep >= 2 ? "text-cyan-400" : "text-gray-500"}`} />
                    <span className="text-[11px] text-gray-300 mt-2 font-medium tracking-wide">Booking</span>
                 </div>
            </div>

             {/* Converging Lines */}
             <div className="w-full max-w-[240px] h-[50px] relative mt-2 mb-3 flex justify-center z-0">
                 {/* Left branch */}
                 <div className="absolute bottom-0 left-1/2 w-[1.5px] h-[70px] bg-gray-800 origin-bottom -translate-x-1/2 -rotate-[65deg]">
                     <div className={`absolute inset-0 bg-green-400 transition-transform duration-1000 delay-[500ms] origin-top ${activeStep >= 3 ? "scale-y-100" : "scale-y-0"}`}></div>
                 </div>
                 {/* Middle branch */}
                 <div className="absolute bottom-0 left-1/2 w-[1.5px] h-[50px] bg-gray-800 origin-bottom -translate-x-1/2">
                     <div className={`absolute inset-0 bg-green-400 transition-transform duration-1000 delay-[600ms] origin-top ${activeStep >= 3 ? "scale-y-100" : "scale-y-0"}`}></div>
                 </div>
                 {/* Right branch */}
                 <div className="absolute bottom-0 left-1/2 w-[1.5px] h-[70px] bg-gray-800 origin-bottom -translate-x-1/2 rotate-[65deg]">
                     <div className={`absolute inset-0 bg-green-400 transition-transform duration-1000 delay-[700ms] origin-top ${activeStep >= 3 ? "scale-y-100" : "scale-y-0"}`}></div>
                 </div>
            </div>

            {/* Step 4: Result (Success) */}
            <div className={`flex flex-col items-center transition-opacity duration-500 delay-[1000ms] relative mt-1 ${activeStep >= 4 ? "opacity-100" : "opacity-30"}`}>
                <div className="relative">
                    <div className={`absolute inset-0 bg-green-500 rounded-full blur-xl transition-opacity duration-500 ${activeStep >= 4 ? "opacity-30 animate-pulse" : "opacity-0"}`}></div>
                    <div className="w-16 h-16 rounded-full border border-green-400 bg-green-500/20 flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                        <DollarSign className={`w-7 h-7 ${activeStep >= 4 ? "text-green-400" : "text-gray-500"}`} />
                    </div>
                </div>
                <p className="text-gray-200 font-medium mt-4 text-sm text-center">100% Capture Rate</p>
                <p className="text-green-400 text-[11px] uppercase tracking-wider mt-1 bg-green-900/40 px-2.5 py-0.5 rounded font-bold border border-green-800/50">Revenue Recovered</p>
            </div>

        </div>
      </div>
    </div>
  );
};
