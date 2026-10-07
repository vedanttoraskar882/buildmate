import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is BuildMate AI?',
      a: 'BuildMate AI is a proposed platform for small contractors and property maintenance businesses. It is being developed to turn photos, voice notes and repair descriptions into structured job information, quotation support and professional completion records.',
    },
    {
      q: 'Who is the initial product designed for?',
      a: 'The initial focus is handymen, sole traders, property maintenance contractors and small repair businesses. Broader trade and property-management capabilities are planned as the product develops.',
    },
    {
      q: 'What information will users be able to add?',
      a: 'The planned job intake supports photographs, voice notes, customer details, job location and repair descriptions.',
    },
    {
      q: 'Does the AI decide the final repair or price?',
      a: 'No. It supports job assessment and estimating. Contractors review the suggested work, verify site conditions and decide the final scope and quotation.',
    },
    {
      q: 'What will a completion report include?',
      a: 'The initial report is planned to include a plain-language job summary, a description of work carried out, before-and-after photographs and basic completion confirmation.',
    },
    {
      q: 'Will teams be able to work together?',
      a: 'The planned Team offering includes multi-user access, team dashboards, shared property history and standardised workflows for businesses with 2–10 staff.',
    },
    {
      q: 'Is predictive maintenance part of the initial product?',
      a: 'Property memory, recurring defect analysis and preventative maintenance recommendations are planned for later development phases.',
    },
    {
      q: 'What are the proposed launch prices?',
      a: 'Starter is £12 per user per month, Professional is £39 per user per month and Team is £99 per account per month. Prices exclude VAT, which will apply where applicable.',
    },
    {
      q: 'Can landlords and property managers use the platform?',
      a: 'The business plan includes landlord and property-management capabilities for maintenance histories, contractor evidence and reporting as the platform expands.',
    },
    {
      q: 'What happens when I submit the pilot form on this demonstration page?',
      a: 'Your details are saved in this browser on this device. This demonstration does not send a pilot request to the BuildMate AI team.',
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 font-mono">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
            Clear answers about the platform and roadmap.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Everything you need to know about BuildMate AI’s planned capabilities, commercial rollout and this interactive demonstration.
          </p>
        </div>

        {/* Accessible Accordion */}
        <div className="max-w-4xl divide-y divide-slate-200/80 border-y border-slate-200/80">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-content-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <div key={idx} className="transition-colors hover:bg-slate-50/50">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full py-5 px-3 sm:px-4 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-xl group"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors pr-4 font-heading">
                      {faq.q}
                    </span>
                    <span
                      className={`p-1.5 rounded-lg bg-slate-100 text-slate-600 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-teal-50 text-teal-700' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={`px-3 sm:px-4 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed ${
                    !isOpen ? 'hidden' : 'block animate-fade-in'
                  }`}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
