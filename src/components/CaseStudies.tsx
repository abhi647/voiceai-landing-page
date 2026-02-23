import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const humanCases = [
  {
    title: "Largest Healthcare Provider in Region",
    hospital: "800+ Daily Patient Hospital Network",
    accent: "teal",
    before: [
      "Up to 40% of calls abandoned",
      "Patients waiting 5–15 minutes to reach the right department",
      "High complaints & poor patient experience"
    ],
    after: [
      "48% reduction in patient wait time",
      "35% increase in scheduling efficiency",
      "Thousands of work hours freed",
      "AI now handles a large portion of scheduling autonomously"
    ],
    impactLabel: "Wait Time Slashed",
    impactValue: "48% Reduction in Wait Time",
    source: "Verified Enterprise Deployment Data"
  },
  {
    title: "Top Tier National Care System",
    hospital: "Multi-Specialty Clinic Group",
    accent: "cyan",
    before: [
      "Tens of thousands of monthly missed/abandoned calls",
      "Manual routing delays",
      "Inconsistent patient follow-up"
    ],
    after: [
      "3 million+ calls handled per year by AI automation",
      "97% scheduling accuracy",
      "Major reduction in no-show rates",
      "Hospital-grade reliability with 24/7 coverage"
    ],
    impactLabel: "Scale & Accuracy",
    impactValue: "3M+ Calls Handled Annually",
    source: "Verified Multi-State Deployment"
  },
  {
    title: "AI Triage + Callback Automation",
    hospital: "Midwestern Regional Healthcare",
    accent: "blue",
    before: [
      "2,000+ daily triage calls overwhelming nurses",
      "Slow routing leading to increased patient risk"
    ],
    after: [
      "46% reduction in inbound triage call load",
      "Faster routing + improved accuracy",
      "Autonomous symptom collection & escalation logic"
    ],
    impactLabel: "Triage Optimization",
    impactValue: "46% Reduction in Call Load",
    source: "Verified Pilot Program Report"
  }
];

const vetCases = [
  {
    title: "Nationwide Emergency Network",
    hospital: "24/7 National Emergency Hospitals",
    accent: "purple",
    before: [
      "30–50% calls missed during emergency surges",
      "Staff burnout + operational chaos"
    ],
    after: [
      "30% increase in recovered emergency visits",
      "Phone wait times dropped from 8 minutes to near zero",
      "Significant increase in booked procedures"
    ],
    impactLabel: "Emergency Recovery",
    impactValue: "30% Increase in Recovered Visits",
    source: "Verified Emergency Vet Deployment"
  },
  {
    title: "High-Volume Clinic Operations",
    hospital: "2,000+ Location Clinic Franchise",
    accent: "indigo",
    before: [
      "High missed call volumes",
      "Heavy load on front desk teams"
    ],
    after: [
      "$10M+ operational impact",
      "Hundreds of thousands of calls deflected to AI",
      "Higher patient throughput + increased revenue"
    ],
    impactLabel: "Operational Impact",
    impactValue: "$10M+ Saved & Recovered",
    source: "Verified Corporate Deployment Analysis"
  },
  {
    title: "National Veterinary Network",
    hospital: "Regional Veterinary Network",
    accent: "pink",
    before: [
      "40% admin time wasted on manual phone tasks",
      "Lost revenue from follow-up delays"
    ],
    after: [
      "25–40% reduction in phone handling time",
      "Increase in repeat visits & scheduled treatments"
    ],
    impactLabel: "Efficiency Gained",
    impactValue: "40% Less Phone Handling Time",
    source: "Verified Network Deployment Data"
  }
];

const getColorClasses = (accent: string) => {
  switch (accent) {
    case 'teal': return { bg: 'bg-teal-50', border: 'border-teal-100', text: 'text-teal-800', textBold: 'text-teal-700', blur: 'bg-teal-50' };
    case 'cyan': return { bg: 'bg-cyan-50', border: 'border-cyan-100', text: 'text-cyan-800', textBold: 'text-cyan-700', blur: 'bg-cyan-50' };
    case 'blue': return { bg: 'bg-blue-50', border: 'border-blue-100', text: 'text-blue-800', textBold: 'text-blue-700', blur: 'bg-blue-50' };
    case 'purple': return { bg: 'bg-purple-50', border: 'border-purple-100', text: 'text-purple-800', textBold: 'text-purple-700', blur: 'bg-purple-50' };
    case 'indigo': return { bg: 'bg-indigo-50', border: 'border-indigo-100', text: 'text-indigo-800', textBold: 'text-indigo-700', blur: 'bg-indigo-50' };
    case 'pink': return { bg: 'bg-pink-50', border: 'border-pink-100', text: 'text-pink-800', textBold: 'text-pink-700', blur: 'bg-pink-50' };
    default: return { bg: 'bg-gray-50', border: 'border-gray-100', text: 'text-gray-800', textBold: 'text-gray-700', blur: 'bg-gray-50' };
  }
};

const CaseStudyCard = ({ data, index }: { data: any, index: number }) => {
  const colors = getColorClasses(data.accent);
  
  return (
    <div className="mb-12">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
        <div className={`absolute top-0 right-0 w-64 h-64 ${colors.blur} rounded-full blur-[80px] -mr-32 -mt-32`}></div>
        <div className="relative z-10">
          <p className={`font-body ${colors.text} font-medium uppercase tracking-widest text-sm mb-2`}>Case Study #{index}</p>
          <h3 className="font-display text-3xl font-light text-navy mb-2">{data.hospital}</h3>
          <p className="font-body text-gray-500 text-lg mb-8 font-light">{data.title}</p>

          <div className="grid md:grid-cols-2 gap-8 text-gray-700 font-body leading-relaxed mb-10">
            <div>
              <strong className="text-navy text-lg block mb-3 border-b pb-2">Before:</strong>
              <ul className="space-y-2">
                {data.before.map((item: string, i: number) => (
                  <li key={i} className="flex gap-2 items-start"><span className="text-red-400 font-bold mt-1">–</span> <span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <strong className="text-navy text-lg block mb-3 border-b pb-2">After AI Automation:</strong>
              <ul className="space-y-2">
                {data.after.map((item: string, i: number) => (
                  <li key={i} className="flex gap-2 items-start"><span className="text-green-500 font-bold mt-1">✓</span> <span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`${colors.bg} p-6 rounded-2xl ${colors.border} border flex flex-col md:flex-row items-center justify-between gap-6`}>
            <div>
              <p className={`text-sm font-bold ${colors.text} uppercase tracking-widest mb-1`}>{data.impactLabel}</p>
              <p className={`text-2xl font-display font-bold ${colors.textBold}`}>{data.impactValue}</p>
              <p className="text-xs text-gray-500 mt-2 italic border-t border-gray-200/50 pt-2">{data.source}</p>
            </div>
            <Link to="/apply" className={`shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-white font-body text-base font-semibold hover:bg-opacity-90 transition-all shadow-md`}>
              Get Similar Results <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-gray-50 text-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Social Proof */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="font-display text-2xl lg:text-3xl font-light text-navy mb-4">
            Trusted by Leading <em className="italic text-primary">Healthcare Networks Worldwide</em>
          </p>
          <p className="font-body text-gray-500 mb-4 text-lg">(Real Case Studies • Real Numbers • Real Hospital Deployments)</p>
        </div>

        {humanCases.map((caseStudy, index) => (
          <CaseStudyCard key={caseStudy.hospital} data={caseStudy} index={index + 1} />
        ))}

        {/* CTA Interstitial */}
        <div className="text-center bg-teal-50 rounded-3xl p-12 border border-teal-100 shadow-md mb-24 max-w-4xl mx-auto">
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-navy mb-6">
              VETERINARY HOSPITAL CASE STUDIES
            </h3>
            <p className="font-body text-teal-900 mb-8 max-w-xl mx-auto font-light">
              (Real & Verifiable Deployments at Scale)
            </p>
        </div>

        {vetCases.map((caseStudy, index) => (
          <CaseStudyCard key={caseStudy.hospital} data={caseStudy} index={index + 4} />
        ))}

      </div>
    </section>
  );
};

export default CaseStudies;

