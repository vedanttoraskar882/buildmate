import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  CheckSquare,
  Camera,
  Sparkles,
  AlertCircle,
} from 'lucide-react';

interface HomeHeroProps {
  onRequestPilot: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ onRequestPilot }) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'prep' | 'quote' | 'report'>('summary');

  const scrollToPlatform = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#platform');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#platform');
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-16 sm:pt-12 sm:pb-24 overflow-hidden">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40 radial-glow-teal" />
      <div className="absolute top-20 right-10 w-72 h-72 pointer-events-none opacity-30 radial-glow-amber" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Small Eyebrow with pulsing micro-indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/90 text-slate-800 border border-slate-200/90 shadow-2xs backdrop-blur-xs animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span>Being developed for UK trades and property maintenance</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-950 tracking-tight leading-[1.12] font-heading">
              Turn repair enquiries into{' '}
              <span className="bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">
                clear job plans
              </span>
              , quotes and professional reports.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              BuildMate AI brings photos, voice notes and customer descriptions together to help small contractors prepare for work, build clearer estimates and document completed repairs.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onRequestPilot}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 active:scale-98 shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 group"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4 text-teal-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={scrollToPlatform}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs hover:shadow-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
              >
                Explore the Platform
              </button>
            </div>

            {/* Three Benefit Statements */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 border border-teal-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block font-heading">
                    Clearer job information
                  </span>
                  <span className="text-[11px] text-slate-500">Unify messages, notes & photos</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 border border-teal-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block font-heading">
                    Better preparation & quoting
                  </span>
                  <span className="text-[11px] text-slate-500">Structured labour & materials</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 border border-teal-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block font-heading">
                    Professional proof of work
                  </span>
                  <span className="text-[11px] text-slate-500">Organised completion records</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Illustrative Preview with interactive tab switching */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative card frame */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden transition-all duration-300 hover:shadow-2xl">
                {/* Header with status badge */}
                <div className="px-5 py-3.5 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                    <span className="text-xs font-bold tracking-wide uppercase text-slate-200 font-mono">
                      Work Order #UK-2841
                    </span>
                  </div>
                  <span className="text-[10px] font-medium text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-600/50">
                    Illustrative preview — contractor review required
                  </span>
                </div>

                {/* Sub-nav tabs for interactive preview exploration */}
                <div className="flex items-center border-b border-slate-200 bg-slate-50/80 px-3 py-1.5 gap-1 overflow-x-auto text-[11px]">
                  <button
                    type="button"
                    onClick={() => setActiveTab('summary')}
                    className={`px-3 py-1 rounded-lg font-semibold transition-colors shrink-0 ${
                      activeTab === 'summary'
                        ? 'bg-white text-slate-950 shadow-2xs border border-slate-200/80'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Summary
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('prep')}
                    className={`px-3 py-1 rounded-lg font-semibold transition-colors shrink-0 ${
                      activeTab === 'prep'
                        ? 'bg-white text-slate-950 shadow-2xs border border-slate-200/80'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Checklist
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('quote')}
                    className={`px-3 py-1 rounded-lg font-semibold transition-colors shrink-0 ${
                      activeTab === 'quote'
                        ? 'bg-white text-slate-950 shadow-2xs border border-slate-200/80'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Quote Estimate
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('report')}
                    className={`px-3 py-1 rounded-lg font-semibold transition-colors shrink-0 ${
                      activeTab === 'report'
                        ? 'bg-white text-slate-950 shadow-2xs border border-slate-200/80'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Completion PDF
                  </button>
                </div>

                <div className="p-5 space-y-4 text-xs min-h-[300px]">
                  {activeTab === 'summary' && (
                    <div className="space-y-3 animate-fade-in">
                      {/* Job Title & Source */}
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider font-mono">
                              Job Subject
                            </div>
                            <h4 className="text-sm font-bold text-slate-950 mt-0.5 font-heading">
                              Kitchen wall damp inspection and repair
                            </h4>
                          </div>
                          <span className="px-2 py-0.5 text-[10px] font-semibold rounded-md bg-teal-50 text-teal-800 border border-teal-200">
                            Intake Active
                          </span>
                        </div>

                        <div className="mt-2.5 pt-2 border-t border-slate-200 flex flex-wrap items-center gap-2 text-[11px] text-slate-600">
                          <span className="font-semibold text-slate-700">Inputs:</span>
                          <span className="inline-flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-slate-200">
                            <Camera className="w-3 h-3 text-teal-600" /> 3 Photos
                          </span>
                          <span className="inline-flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-slate-200">
                            <FileText className="w-3 h-3 text-teal-600" /> Customer text
                          </span>
                          <span className="inline-flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-slate-200">
                            <Sparkles className="w-3 h-3 text-amber-600" /> Voice note (42s)
                          </span>
                        </div>
                      </div>

                      {/* Assessment & Next Step */}
                      <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80">
                        <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                          <span>Suggested Assessment (Contractor Review)</span>
                        </div>
                        <p className="mt-1 text-slate-700 text-[11px] leading-relaxed">
                          "Inspect the source of moisture before confirming the repair scope. Potential pipework seepage behind sink or external flashing penetration."
                        </p>
                        <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-amber-900">
                          <span className="text-slate-600">Next step:</span> Review possible causes and confirm missing details on site.
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'prep' && (
                    <div className="space-y-3 animate-fade-in">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs mb-2">
                          <CheckSquare className="w-3.5 h-3.5 text-teal-600" />
                          <span>Site Preparation Checklist</span>
                        </div>
                        <ul className="space-y-2 text-[11px] text-slate-700">
                          <li className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded bg-teal-100 text-teal-800 flex items-center justify-center text-[10px] font-bold">✓</span>
                            <span>Digital moisture meter & pipe inspection torch</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded bg-teal-100 text-teal-800 flex items-center justify-center text-[10px] font-bold">✓</span>
                            <span>Compression plumbing fittings (15mm / 22mm) & PTFE tape</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded bg-teal-100 text-teal-800 flex items-center justify-center text-[10px] font-bold">✓</span>
                            <span>Surface fungicidal wash & mould-resistant primer</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded bg-amber-100 text-amber-800 flex items-center justify-center text-[10px] font-bold">!</span>
                            <span>Floor protection sheeting & dust extraction bag</span>
                          </li>
                        </ul>
                      </div>
                      <p className="text-[11px] text-slate-500 italic">
                        Checklist tailored to moisture inspection prior to van departure.
                      </p>
                    </div>
                  )}

                  {activeTab === 'quote' && (
                    <div className="space-y-3 animate-fade-in">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900">Indicative Cost Breakdown</span>
                          <span className="text-[10px] font-semibold text-slate-500 bg-slate-200/70 px-2 py-0.5 rounded">
                            Example only
                          </span>
                        </div>
                        <div className="space-y-1.5 text-[11px] text-slate-600">
                          <div className="flex justify-between">
                            <span>Estimated Labour (3.5 - 4.5 hrs)</span>
                            <span className="font-semibold text-slate-800">£140 – £180</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Estimated Materials & Sealants</span>
                            <span className="font-semibold text-slate-800">£40 – £80</span>
                          </div>
                          <div className="pt-1.5 border-t border-slate-200 flex justify-between font-bold text-slate-950 text-xs">
                            <span>Indicative Cost Range</span>
                            <span className="text-teal-700">£180 – £260</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-100 text-[10px] text-slate-600">
                        Contractors adjust final pricing to account for discovered site conditions.
                      </div>
                    </div>
                  )}

                  {activeTab === 'report' && (
                    <div className="space-y-3 animate-fade-in">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900">Client Completion Document</span>
                          <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            Ready
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[10px]">
                          <div className="p-2 rounded bg-white border border-slate-200 text-center">
                            <span className="block text-slate-400 mb-0.5">Before</span>
                            <span className="font-semibold text-slate-700">Moisture logged</span>
                          </div>
                          <div className="p-2 rounded bg-white border border-slate-200 text-center">
                            <span className="block text-slate-400 mb-0.5">After</span>
                            <span className="font-semibold text-slate-700">Repaired & dried</span>
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-tight">
                          Plain-language sign-off report with embedded photographic evidence for landlord confirmation.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer preview note */}
                <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Output: Client completion PDF</span>
                  <span className="font-semibold text-teal-700">Ready to review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
