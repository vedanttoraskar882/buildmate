import React, { useState } from 'react';
import {
  Camera,
  FileCheck,
  Calculator,
  Wrench,
  CheckCircle,
  FileSpreadsheet,
  Clock,
  Sparkles,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: 1,
      title: 'Capture the enquiry',
      desc: 'Add photos, voice notes, customer details and a description of the repair.',
      icon: Camera,
      preview: {
        badge: 'Step 1: Multi-Channel Job Intake',
        header: 'Customer Enquiry #UK-409',
        content: [
          { label: 'Client / Landlord', value: 'Oakwood Lettings Ltd (Flat 3B)' },
          { label: 'Channel Inputs', value: 'WhatsApp message, 2 phone photos, 35s voice memo' },
          { label: 'Reported Issue', value: '"Persistent damp patch spreading behind under-sink cabinet in kitchen."' },
          { label: 'Status', value: 'Raw media received; auto-indexed to job profile' },
        ],
      },
    },
    {
      num: 2,
      title: 'Review the job summary',
      desc: 'Understand the likely work and confirm missing information before proceeding.',
      icon: FileCheck,
      preview: {
        badge: 'Step 2: AI Summary & Clarity Flags',
        header: 'Structured Work Order Preview',
        content: [
          { label: 'Affected Area', value: 'Kitchen base unit, interior party wall' },
          { label: 'Identified Issue', value: 'Localised moisture ingress; suspected pipe connection weep' },
          { label: 'Contractor Clarification', value: 'Inspect pipe isolation valve before disturbing wallboard' },
          { label: 'Diagnostic Note', value: 'Potential causes require physical on-site verification' },
        ],
      },
    },
    {
      num: 3,
      title: 'Prepare the quotation',
      desc: 'Review labour, materials and indicative costs, then finalise the customer quote.',
      icon: Calculator,
      preview: {
        badge: 'Step 3: Indicative Cost Breakdown',
        header: 'Contractor Quote Review (Example Only)',
        content: [
          { label: 'Estimated Labour', value: '3.5 – 4.5 hours (Investigation + Remediation)' },
          { label: 'Likely Materials', value: 'Compression fitting, anti-mould sealant, plaster patch' },
          { label: 'Indicative Cost Range', value: '£180 – £240 + VAT (Contractor adjustable)' },
          { label: 'Customer Quote Status', value: 'Draft prepared for contractor sign-off' },
        ],
      },
    },
    {
      num: 4,
      title: 'Get ready for site',
      desc: 'Check tools, materials and preparation requirements.',
      icon: Wrench,
      preview: {
        badge: 'Step 4: Site Checklist & Safety',
        header: 'Pre-Visit Preparation Checklist',
        content: [
          { label: 'Diagnostic Equipment', value: 'Digital moisture meter, pipe inspection mirror, torch' },
          { label: 'Core Tools', value: 'Plumbing adjustable spanners, PTFE tape, utility saw' },
          { label: 'Site Protection', value: 'Waterproof floor runner, debris bucket, nitrile gloves' },
          { label: 'Risk Precaution', value: 'Locate main water shut-off stopcock upon arrival' },
        ],
      },
    },
    {
      num: 5,
      title: 'Complete and document',
      desc: 'Record the work and organise before-and-after evidence.',
      icon: CheckCircle,
      preview: {
        badge: 'Step 5: Evidence Capture & Site Diary',
        header: 'Active Job Record & Photographic Log',
        content: [
          { label: 'Pre-Work Capture', value: '2 photos recorded showing damp level and damaged seal' },
          { label: 'Repair Action', value: 'Defective compression joint replaced; pressure tested ok' },
          { label: 'Post-Work Capture', value: '2 photos showing dry joint and treated wall surface' },
          { label: 'Time On Site', value: '3 hours 15 minutes logged against job' },
        ],
      },
    },
    {
      num: 6,
      title: 'Share the completion report',
      desc: 'Provide a professional summary with supporting photographs and completion details.',
      icon: FileSpreadsheet,
      preview: {
        badge: 'Step 6: Client PDF Report',
        header: 'Professional Completion Summary',
        content: [
          { label: 'Document Title', value: 'Completion Certificate & Proof of Work #UK-409' },
          { label: 'Summary For Client', value: 'Clear plain-language explanation of leak source and fix' },
          { label: 'Photographic Proof', value: 'Side-by-side before & after photos embedded' },
          { label: 'Delivery Method', value: 'Ready to email or WhatsApp directly to landlord/client' },
        ],
      },
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200">
            End-To-End Process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
            A clearer workflow for every repair.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Follow the six structured stages from the customer's initial enquiry to client sign-off.
          </p>
        </div>

        {/* Interactive Step Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector Buttons (Left Column) */}
          <div className="lg:col-span-6 space-y-3">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              const isSelected = activeStep === idx;
              return (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 ${
                    isSelected
                      ? 'bg-slate-950 text-white border-slate-900 shadow-md ring-1 ring-slate-900'
                      : 'bg-[#F8FAFC] text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-teal-500 text-slate-950'
                        : 'bg-white border border-slate-200 text-slate-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`text-sm sm:text-base font-bold truncate font-heading ${
                          isSelected ? 'text-white' : 'text-slate-950'
                        }`}
                      >
                        {s.title}
                      </h3>
                      {isSelected && (
                        <span className="text-[10px] font-semibold text-teal-300 bg-teal-950/80 px-2 py-0.5 rounded-full border border-teal-800 font-mono">
                          Viewing Preview
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                        isSelected ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {s.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Illustrative Screen State (Right Column) */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden transition-all duration-300">
              {/* Screen Top Bar */}
              <div className="px-5 py-3.5 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  <span className="text-xs font-bold tracking-wide uppercase text-slate-200 font-mono">
                    {steps[activeStep].preview.badge}
                  </span>
                </div>
                <span className="text-[10px] font-medium text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded-full border border-amber-700/60">
                  Illustrative preview
                </span>
              </div>

              {/* Content Panel */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 font-heading">
                    {steps[activeStep].preview.header}
                  </h4>
                  <span className="text-xs text-slate-400 font-mono">
                    Phase {activeStep + 1} of 6
                  </span>
                </div>

                <div className="space-y-3">
                  {steps[activeStep].preview.content.map((row, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1"
                    >
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                        {row.label}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                        {row.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Step navigation buttons inside preview */}
                <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-200">
                  <button
                    type="button"
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="font-semibold text-slate-600 hover:text-slate-950 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    ← Previous stage
                  </button>
                  <button
                    type="button"
                    disabled={activeStep === steps.length - 1}
                    onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                    className="font-bold text-teal-700 hover:text-teal-900 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 transition-colors"
                  >
                    <span>Next stage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Concise note about AI suggestions */}
            <div className="mt-4 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Contractor Review Required:</strong> AI suggestions support contractor judgement. Estimates and recommended actions require review.
              </span>
            </div>
          </div>
        </div>

        {/* Worked Example Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-100 text-teal-900 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-teal-700" /> Worked Example
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-950 font-heading">
            Practical Scenario: Under-Sink Wall Moisture Inspection
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed max-w-4xl">
            A landlord reports damp on a kitchen wall. The contractor adds photos and a description. BuildMate AI helps structure the enquiry, highlights questions to clarify, supports an estimate and preparation checklist, and organises the evidence for a completion report.
          </p>
        </div>

        {/* Future Step Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-1.5 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-950 text-amber-300 border border-amber-800 font-mono">
              <Clock className="w-3 h-3 text-amber-400" /> Planned Long-Term Intelligence
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
              Over time: Build a property maintenance history.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Later functionality will use previous repairs, logged assets and past outcomes to help contractors, landlords and property managers identify recurring issues across tenancies and properties.
            </p>
          </div>
          <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 shrink-0 font-mono relative z-10">
            Planned for Year 2 & 3 Rollout
          </div>
        </div>
      </div>
    </section>
  );
};
