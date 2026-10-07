import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onRequestPilot: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onRequestPilot }) => {
  return (
    <section className="py-20 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-teal-500 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-500 blur-3xl"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-teal-950 text-teal-300 border border-teal-800 font-mono">
            <Sparkles className="w-3.5 h-3.5" /> Early Pilot Participation
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-heading">
            Ready to shape the future of UK property maintenance?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Register your interest in the planned pilot programme and help validate trade workflows tailored specifically to small contractors and independent repair businesses.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onRequestPilot}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 active:scale-98 transition-all shadow-xl hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 group"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <p className="text-xs text-slate-400 font-mono">
            Planned initial rollout for UK micro-contractors, handymen and small repair businesses.
          </p>
        </div>
      </div>
    </section>
  );
};
