import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, TrendingUp, Clock, Bot, CalendarCheck, ShieldCheck, Zap } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Stop Revenue Leakage",
    description: "You stop losing <strong class='text-teal-700 font-medium'>$100,000–$160,000/month</strong> due to missed calls and abandoned patient inquiries."
  },
  {
    icon: Bot,
    title: "Instant Response",
    description: "AI answers every single call instantly at zero-second wait time with a <strong class='text-teal-700 font-medium'>human-like, patient-safe tone</strong>."
  },
  {
    icon: CalendarCheck,
    title: "Autonomous Scheduling",
    description: "The system automatically books, verifies, escalates, and precisely updates your <strong class='text-teal-700 font-medium'>CRM/HMS</strong>."
  },
  {
    icon: ShieldCheck,
    title: "Error-Free Operations",
    description: "You instantly eliminate human error, staff burnout, front desk overload & inconsistent patient follow-ups."
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "<strong class='text-teal-700 font-medium'>15-day launch</strong>, 35-day full production — completely done-for-you by our expert engineering team."
  },
  {
    icon: Clock,
    title: "Zero Staff Workload",
    description: "Works resiliently <strong class='text-teal-700 font-medium'>24/7</strong> — through nights, weekends, and holidays while we integrate, test, tune & optimize everything."
  }
];

const phases = [
  {
    phase: "Phase 1",
    title: "Leak Lock-In",
    timeline: "Week 1–2",
    items: [
      "Map all inbound phone numbers + departments",
      "Identify leakage by hour, department & procedure",
      "Clone hospital brand voice",
      "Build booking + verification logic"
    ]
  },
  {
    phase: "Phase 2",
    title: "Capture & Convert",
    timeline: "Week 3–4",
    items: [
      "AI answers calls at 0-second wait time",
      "Books appointments + procedures autonomously",
      "Verifies patient urgency, intent, and budget",
      "Syncs clean structured data to HMS"
    ]
  },
  {
    phase: "Phase 3",
    title: "Revenue Flywheel",
    timeline: "Week 5–6",
    items: [
      "AI optimization for high-ticket conversions",
      "Live reporting dashboards + error logs",
      "Expand capability to new hospital departments"
    ]
  }
];

const WhyUs = () => {
    return (
        <section id="why-us" className="py-24 bg-white text-foreground overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                
                {/* Benefits Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <p className="font-body text-primary font-medium uppercase tracking-widest text-sm mb-4">The Solution</p>
                    <h2 className="font-display text-4xl lg:text-5xl font-light text-navy mb-8 tracking-tight">
                        Why Hospitals Choose <br className="hidden md:block"/> 
                        <em className="italic text-primary">Revenue Recovery Grid™</em>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
                    {benefits.map((benefit, i) => (
                        <div key={i} className="bg-teal-50/50 rounded-2xl p-8 border border-teal-100 hover:shadow-md transition-shadow animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-teal-100 mb-6 text-primary">
                                <benefit.icon size={24} />
                            </div>
                            <h3 className="font-display text-xl text-navy mb-4 font-medium">{benefit.title}</h3>
                            <p className="font-body text-gray-600 leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: benefit.description }}></p>
                        </div>
                    ))}
                </div>

                {/* Deployment Process */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <p className="font-body text-primary font-medium uppercase tracking-widest text-sm mb-4">Implementation</p>
                    <h2 className="font-display text-4xl lg:text-5xl font-light text-navy mb-8 tracking-tight">
                        How We Deploy This For Your Hospital
                    </h2>
                    <p className="font-body text-gray-600 text-lg md:text-xl font-light max-w-2xl mx-auto">
                        Fully completely done-for-you deployment. Zero disruption to your existing clinical teams.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-[50px] left-10 right-10 h-0.5 bg-gradient-to-r from-teal-100 via-teal-300 to-teal-100 z-0"></div>
                    
                    {phases.map((phase, i) => (
                        <div key={i} className="relative z-10 bg-white rounded-2xl shadow-xl shadow-teal-900/5 group hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up border border-gray-100" style={{ animationDelay: `${i * 0.2}s` }}>
                            <div className="p-8 border-b border-gray-100 bg-gradient-to-b from-teal-50/50 to-white rounded-t-2xl">
                                <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-xs font-bold font-body uppercase tracking-wider rounded-full mb-4">
                                    {phase.timeline}
                                </span>
                                <p className="font-body text-primary font-medium text-sm mb-1">{phase.phase}</p>
                                <h3 className="font-display text-2xl text-navy font-semibold">{phase.title}</h3>
                            </div>
                            <div className="p-8">
                                <ul className="space-y-4">
                                    {phase.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-teal-500 shrink-0 mt-0.5" size={18} />
                                            <span className="font-body text-gray-600 font-light leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <h4 className="font-display text-2xl text-navy mb-8 font-light">Want Similar Results?</h4>
                    <Link
                        to="/apply"
                        className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-primary text-white font-body font-semibold text-xl hover:scale-105 transition-all duration-300 shadow-xl shadow-teal-500/20"
                    >
                        Book Your Revenue Recovery Report
                        <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
