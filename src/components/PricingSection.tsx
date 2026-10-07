import React, { useState } from 'react';
import {
  Check,
  ChevronDown,
  ChevronUp,
  Users,
  Wrench,
  Building2,
  Briefcase,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface PricingSectionProps {
  onRequestPilot: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onRequestPilot }) => {
  const [showProgressionTable, setShowProgressionTable] = useState(false);

  const audienceCards = [
    {
      title: 'Sole Traders & Handymen',
      desc: 'Independent repair professionals who handle everything from quoting to invoicing solo.',
      icon: Wrench,
    },
    {
      title: 'Small Maintenance Teams',
      desc: 'Crews of 2–10 staff coordinating recurring repairs, materials and job sign-offs across sites.',
      icon: Users,
    },
    {
      title: 'Landlords & Letting Agents',
      desc: 'Property stakeholders requiring verifiable documentation, before/after evidence and audit trails.',
      icon: Building2,
    },
    {
      title: 'Property Managers',
      desc: 'Estate managers seeking organised maintenance records and future preventative insights.',
      icon: Briefcase,
    },
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '£12',
      billing: 'per user / month',
      label: 'Proposed launch pricing',
      audience: 'For sole traders and independent maintenance professionals.',
      highlight: false,
      features: [
        'Photo and voice-note job intake',
        'AI-generated job summaries',
        'Basic quotation support',
        'Simple client-facing PDF reports',
      ],
    },
    {
      name: 'Professional',
      price: '£39',
      billing: 'per user / month',
      label: 'Proposed launch pricing',
      badge: 'For active contractors',
      audience: 'For active contractors managing regular repair and maintenance work.',
      highlight: true,
      features: [
        'Full quote decomposition',
        'Tool and material checklists',
        'Evidence capture workflows',
        'Automated site diaries',
      ],
    },
    {
      name: 'Team',
      price: '£99',
      billing: 'per account / month',
      label: 'Proposed launch pricing',
      audience: 'For small contractor businesses with 2–10 staff.',
      highlight: false,
      features: [
        'Multi-user access',
        'Team dashboards',
        'Shared property history',
        'Standardised workflows across staff',
      ],
    },
  ];

  const progressionData = [
    {
      plan: 'Starter',
      basis: 'per user / month',
      y1: '£12',
      y2: '£13',
      y3: '£15',
    },
    {
      plan: 'Professional',
      basis: 'per user / month',
      y1: '£39',
      y2: '£42',
      y3: '£49',
    },
    {
      plan: 'Team',
      basis: 'per account / month',
      y1: '£99',
      y2: '£109',
      y3: '£129',
    },
  ];

  const plannedAddOns = [
    'Extra structured reports',
    'Advanced compliance packs',
    'Accounting integrations',
    'White-labelled reporting for property organisations',
  ];

  return (
    <section id="market-pricing" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-200/80 text-slate-800 font-mono">
            Market & Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
            Practical plans for solo trades and small teams.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            BuildMate AI’s initial focus is UK handymen, sole traders and small maintenance businesses, with broader contractor and property-management capabilities planned over time.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audienceCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 space-y-2.5 group"
              >
                <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100 group-hover:scale-105 group-hover:bg-teal-600 group-hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 font-heading">{card.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Pricing Subheader & Cards */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 font-mono">
                Planned launch pricing
              </span>
              <p className="text-xs text-slate-500">
                Proposed Year 1 subscription models designed for UK maintenance professionals
              </p>
            </div>
            <span className="text-xs text-slate-500 italic">No upfront credit card required</span>
          </div>

          {/* 3 Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {pricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-white border-2 border-slate-950 shadow-xl ring-1 ring-slate-950 hover:-translate-y-1'
                    : 'bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                {/* For active contractors tag */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide bg-slate-950 text-teal-300 shadow-md font-mono">
                    {tier.badge}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Title & Audience */}
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider font-mono">
                      {tier.label}
                    </span>
                    <h3 className="text-2xl font-black text-slate-950 mt-1 font-heading">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 min-h-[36px]">{tier.audience}</p>
                  </div>

                  {/* Price */}
                  <div className="pt-2 pb-4 border-y border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
                        {tier.price}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">{tier.billing}</span>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block font-mono">
                      Included Capabilities
                    </span>
                    <ul className="space-y-2.5">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <div className="w-4 h-4 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 border border-teal-200">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-8">
                  <button
                    type="button"
                    onClick={onRequestPilot}
                    className={`w-full py-3 rounded-xl text-xs font-bold transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 flex items-center justify-center gap-1.5 ${
                      tier.highlight
                        ? 'bg-slate-950 hover:bg-slate-800 text-white shadow-md active:scale-98'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900 active:scale-98'
                    }`}
                  >
                    <span>Request a Pilot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* VAT & Phased Rollout Disclaimer */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1">
            <p className="font-semibold text-slate-800">
              Prices exclude VAT. VAT will apply where applicable. Feature availability follows the phased product rollout.
            </p>
            <p className="text-[11px] text-slate-500">
              Proposed launch prices. Features will be introduced through phased development; pilot availability and scope will be confirmed separately.
            </p>
          </div>
        </div>

        {/* Expandable Planned Pricing Progression Table */}
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-all">
          <button
            type="button"
            onClick={() => setShowProgressionTable(!showProgressionTable)}
            className="w-full px-6 py-4.5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            aria-expanded={showProgressionTable}
          >
            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-bold text-slate-900 font-heading">
                Planned pricing as the platform develops
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span>{showProgressionTable ? 'Hide projections' : 'View 3-year progression'}</span>
              {showProgressionTable ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </div>
          </button>

          {showProgressionTable && (
            <div className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-4 animate-fade-in">
              <p className="text-xs text-slate-600">
                Starter and Professional are priced per user per month. Team is priced per account per month. These figures reflect the business plan’s proposed development-year pricing projections, not a guaranteed timetable or automatic customer price increase.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700 border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-slate-900 font-bold font-heading">
                      <th className="py-2.5 px-3">Plan</th>
                      <th className="py-2.5 px-3">Billing Basis</th>
                      <th className="py-2.5 px-3 text-center">Year 1</th>
                      <th className="py-2.5 px-3 text-center">Year 2</th>
                      <th className="py-2.5 px-3 text-center">Year 3</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {progressionData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50">
                        <td className="py-2.5 px-3 font-bold text-slate-900 font-heading">
                          {row.plan}
                        </td>
                        <td className="py-2.5 px-3 text-slate-500">{row.basis}</td>
                        <td className="py-2.5 px-3 text-center font-semibold text-slate-900">
                          {row.y1}
                        </td>
                        <td className="py-2.5 px-3 text-center font-semibold text-slate-900">
                          {row.y2}
                        </td>
                        <td className="py-2.5 px-3 text-center font-semibold text-slate-900">
                          {row.y3}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Planned Add-ons list */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-900 block mb-2 font-heading">
                  Additional Planned Revenue Streams (Add-ons)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  {plannedAddOns.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 mt-2 italic">
                  Note: Commercial unit pricing for add-on packs and white-labelling will be announced alongside their respective phased releases.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
