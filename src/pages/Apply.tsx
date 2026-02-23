import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Apply = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js-na2.hsforms.net/forms/embed/244190378.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-navy mb-3 md:mb-4 leading-tight px-2">
              Schedule Your Free 1:1 <br className="md:hidden" /><em className="italic text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500 font-light">Revenue Recovery Consultation</em>
            </h1>
            <p className="font-body text-muted-foreground max-w-xl mx-auto font-light px-4 text-sm md:text-base">
              We look forward to speaking with you. Please review the agenda below and fill out the quick application so we can make the most of our time together.
            </p>
          </div>

          {/* What we'll cover */}
          <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5 md:p-6 mb-8 md:mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-display font-light text-navy mb-3 md:mb-4 text-sm uppercase tracking-wider">Here is the agenda for our consultation:</h3>
            <ul className="space-y-3">
              {[
                "Audit your inbound call leakage",
                "Map department-wise missed revenue",
                "Identify automation opportunities",
                "Build a custom 90-day recovery plan",
                "Show how top hospitals deploy AI front desks"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span className="font-body text-sm text-gray-700 font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="bg-white border border-gray-100 rounded-2xl p-4 md:p-8 shadow-sm w-full overflow-hidden">
            <div className="hs-form-frame w-full max-w-full overflow-hidden" data-region="na2" data-form-id="7917c9a5-d273-4c76-b5fa-749e88000f56" data-portal-id="244190378"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Apply;
