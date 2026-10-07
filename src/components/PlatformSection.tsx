import React from 'react';
import {
  Inbox,
  FileCheck,
  Calculator,
  ListChecks,
  Camera,
  FileText,
  Network,
  GitBranch,
  SplitSquareVertical,
  History,
  ShieldCheck,
  TrendingUp,
  Milestone,
} from 'lucide-react';

export const PlatformSection: React.FC = () => {
  const initialModules = [
    {
      title: 'Job Intake',
      desc: 'Bring photographs, voice notes, customer details, job locations and repair descriptions into one job record.',
      icon: Inbox,
      tag: '01',
    },
    {
      title: 'AI Job Summary',
      desc: 'Convert the available information into a structured work order describing the issue, affected area, possible causes and likely repair tasks for contractor review.',
      icon: FileCheck,
      tag: '02',
    },
    {
      title: 'Quote Assistant',
      desc: 'Review suggested labour time, likely materials and an indicative cost range before preparing a contractor-reviewed quotation.',
      icon: Calculator,
      tag: '03',
    },
    {
      title: 'Tool & Material Checklist',
      desc: 'Prepare the recommended tools, materials and relevant safety items before attending the job.',
      icon: ListChecks,
      tag: '04',
    },
    {
      title: 'Evidence Capture',
      desc: 'Keep before-and-after photographs and supporting records linked to the correct job.',
      icon: Camera,
      tag: '05',
    },
    {
      title: 'Client Report Generation',
      desc: 'Create a professional PDF summarising the job, work completed, supporting photographs and completion confirmation.',
      icon: FileText,
      tag: '06',
    },
  ];

  const advancedCapabilities = [
    {
      title: 'Trade-Job Graph Intelligence',
      desc: 'A connected model linking defects, property components, repair methods, tasks, labour, materials, tools, risks and evidence requirements.',
      icon: Network,
    },
    {
      title: 'Trade-Specific Workflow Guidance',
      desc: 'Recommended work sequences, preparation steps and documentation checkpoints informed by practical trade workflows.',
      icon: GitBranch,
    },
    {
      title: 'Intelligent Quote Decomposition',
      desc: 'Break jobs into operational stages and highlight missing information or uncertainty before pricing.',
      icon: SplitSquareVertical,
    },
    {
      title: 'Property Memory Intelligence',
      desc: 'Build maintenance histories for properties, rooms and assets to help identify recurring issues.',
      icon: History,
    },
    {
      title: 'Evidence Reasoning & Validation',
      desc: 'Check whether expected documentation has been captured and support structured site diaries, progress logs and completion records.',
      icon: ShieldCheck,
    },
    {
      title: 'Cross-Job Learning',
      desc: 'Use anonymised operational outcomes to improve future guidance, estimates and maintenance insights.',
      icon: TrendingUp,
    },
  ];

  const roadmap = [
    {
      phase: 'Year 1',
      title: 'Initial Product & Validation',
      items: [
        'Photo and voice-note job intake',
        'Structured AI summaries & work orders',
        'Indicative labour & material quoting assistance',
        'Preparation & safety checklists',
        'Before-and-after evidence capture',
        'Professional client PDF reports',
      ],
      current: true,
    },
    {
      phase: 'Year 2',
      title: 'Workflow & Trade Expansion',
      items: [
        'Broader trade-specific workflow templates',
        'Enhanced quote decomposition and uncertainty flags',
        'Multi-job property history tracking',
        'Planned accounting and business software integrations',
      ],
      current: false,
    },
    {
      phase: 'Year 3',
      title: 'Maintenance Intelligence',
      items: [
        'Property memory and recurring defect analysis',
        'Preventative maintenance recommendations',
        'Advanced automated evidence validation',
        'Cross-job learning from aggregated anonymised outcomes',
      ],
      current: false,
    },
  ];

  return (
    <section id="platform" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200">
            Initial Product Scope
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
            From the first enquiry to the final report.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            The initial product focuses on six practical modules that support everyday repair and maintenance work.
          </p>
        </div>

        {/* 6 Initial Product Feature Cards in modern Bento layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialModules.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-teal-50/80 text-teal-700 flex items-center justify-center border border-teal-100 group-hover:scale-105 group-hover:bg-teal-600 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-300 font-mono group-hover:text-teal-600 transition-colors">
                      {mod.tag}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 font-heading">
                    {mod.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>

                <div className="pt-3 text-[11px] font-medium text-slate-400 flex items-center gap-1.5 border-t border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  Planned initial module
                </div>
              </div>
            );
          })}
        </div>

        {/* Plain Language Differentiation Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-slate-950 text-teal-400 flex items-center justify-center shrink-0 shadow-xs">
            <Network className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-heading">
              Clear Differentiation
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              BuildMate AI is designed to connect the technical details of repair work with quoting, preparation and documentation. Its planned intelligence layer goes beyond storing jobs by linking what is wrong, what work may be required and what evidence should be recorded.
            </p>
          </div>
        </div>

        {/* Planned Advanced Capabilities Sub-section */}
        <div className="space-y-8 pt-4">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
              Future Roadmap
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight font-heading">
              Planned advanced capabilities
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Advanced capabilities will be introduced in phases as the platform develops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white/80 border border-slate-200/90 hover:bg-white hover:shadow-md transition-all duration-300 space-y-3 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200/70 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">{cap.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compact 3-Year Development Roadmap */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-2">
            <Milestone className="w-5 h-5 text-teal-600" />
            <h3 className="text-lg font-bold text-slate-950 font-heading">Phased Development Roadmap</h3>
          </div>
          <p className="text-xs text-slate-500 -mt-3">
            Roadmap phases represent development sequence across the business plan, rather than fixed calendar dates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roadmap.map((phase, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                  phase.current
                    ? 'bg-white border-teal-500 shadow-md ring-1 ring-teal-500'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold font-mono ${
                      phase.current
                        ? 'bg-teal-100 text-teal-900'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {phase.phase}
                  </span>
                  {phase.current && (
                    <span className="text-[10px] font-semibold text-teal-700 uppercase tracking-wider font-mono">
                      Primary Focus
                    </span>
                  )}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-3 font-heading">{phase.title}</h4>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  {phase.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
