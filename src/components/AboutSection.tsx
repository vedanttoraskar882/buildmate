import React from 'react';
import {
  Layers,
  Calculator,
  CheckSquare,
  Camera,
  GraduationCap,
  Briefcase,
  ShieldCheck,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const problemCards = [
    {
      problem: 'Scattered information',
      solution: 'One structured job record',
      desc: 'Enquiries arriving over WhatsApp, SMS, voice notes and notebooks are consolidated into a single unified job profile.',
      icon: Layers,
    },
    {
      problem: 'Informal estimates',
      solution: 'Clearer labour and material breakdowns',
      desc: 'Move beyond off-the-cuff guesswork with structured operational steps that account for labour time, materials and uncertainty.',
      icon: Calculator,
    },
    {
      problem: 'Missing preparation details',
      solution: 'Practical tools and materials checklists',
      desc: 'Generate trade-specific packing and preparation lists before setting off, reducing avoidable trips to builders merchants.',
      icon: CheckSquare,
    },
    {
      problem: 'Unorganised photographs',
      solution: 'Job-linked evidence and completion reports',
      desc: 'Anchor before-and-after photographic records directly to jobs for transparent customer communication and proof of work.',
      icon: Camera,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200">
            About BuildMate AI
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
            Built around the way small contractors actually work.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Repair jobs often begin with incomplete messages, scattered photos and a brief description. Contractors must then work out the scope, prepare materials, estimate costs and document the result. BuildMate AI is being developed to connect those steps in one practical workflow.
          </p>
        </div>

        {/* 4 Problem / Benefit Cards in Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problemCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-300 space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-teal-700 shadow-2xs group-hover:bg-teal-50 group-hover:scale-105 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-200/70 text-slate-700 font-mono">
                    Workflow Challenge 0{idx + 1}
                  </span>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="text-slate-500 line-through decoration-slate-400 font-medium">
                      {item.problem}
                    </span>
                    <span className="text-teal-600 font-bold">→</span>
                    <span className="font-bold text-slate-950 font-heading">{item.solution}</span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Founder Profile Card (NO PHOTO BOX or avatar box as requested) */}
        <div className="rounded-3xl bg-slate-950 text-white p-6 sm:p-10 border border-slate-800 shadow-xl space-y-8 relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Clean Executive Header without any photo box */}
          <div className="space-y-3 pb-6 border-b border-slate-800 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-950/80 text-teal-300 border border-teal-800/80">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              Founder Profile & Executive Direction
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-heading">
                Varinder Singh
              </h3>
              <p className="text-sm sm:text-base font-semibold text-teal-400">
                Sole Founder & Proposed Managing Director
              </p>
            </div>
          </div>

          {/* Biography */}
          <div className="space-y-3 relative z-10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Founder Background & Perspective
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
              Varinder combines computing and management education with hands-on experience in carpentry, construction and property maintenance. His experience includes UK property repair work and carpentry and concrete activities on the HS2 infrastructure project. His first-hand trade experience informs BuildMate AI’s workflows and product priorities.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 italic">
              He will guide product priorities, oversee development, validate practical trade workflows, engage early contractor users and guide commercial strategy.
            </p>
          </div>

          {/* Verified Qualifications and Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 relative z-10">
            {/* Qualifications */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-300 font-mono">
                <GraduationCap className="w-4 h-4 text-teal-400" />
                <span>Verified Qualifications</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></span>
                  <div>
                    <span className="font-semibold text-white block">MSc Management</span>
                    <span className="text-slate-400">Glyndŵr Wrexham University, United Kingdom (2024)</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></span>
                  <div>
                    <span className="font-semibold text-white block">Bachelor of Computer Applications</span>
                    <span className="text-slate-400">Punjabi University, India (2016)</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 font-mono">
                <Briefcase className="w-4 h-4 text-amber-400" />
                <span>Verified Trade Experience</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                  <div>
                    <span className="font-semibold text-white block">Carpenter & Concrete Labourer</span>
                    <span className="text-slate-400">HS2 Infrastructure Project, UK (April 2024–March 2025)</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                  <div>
                    <span className="font-semibold text-white block">Handyman</span>
                    <span className="text-slate-400">Shukla Property Services, UK (February 2023–April 2024)</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                  <div>
                    <span className="font-semibold text-white block">Self-Employed Carpenter</span>
                    <span className="text-slate-400">Punjab, India (2017–2019)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2 text-xs text-slate-400 border-t border-slate-800/80">
            <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
            <span>Sole founder structure ensuring focused execution aligned directly with real trade challenges.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
