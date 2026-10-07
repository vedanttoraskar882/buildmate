import React from 'react';
import { ArrowUp, ArrowRight } from 'lucide-react';

interface FooterProps {
  onRequestPilot: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onOpenStorageInfo: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestPilot, onOpenStorageInfo }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Platform', href: '#platform' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Market & Pricing', href: '#market-pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand & Description (clean wordmark, NO icon box) */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex flex-col group -ml-1 p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg inline-block"
            >
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 font-heading">
                BuildMate <span className="text-teal-600 font-extrabold">AI</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-600 -mt-0.5">
                UK Trade Intelligence
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              Planned maintenance intelligence for UK tradespeople and small contractor teams.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onRequestPilot}
                className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block font-mono">
              Website Navigation
            </span>
            <ul className="grid grid-cols-2 gap-2 text-xs font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-slate-600 hover:text-teal-700 transition-colors py-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Demonstration Notice & Privacy Info */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block font-mono">
              Demonstration Notice
            </span>
            <p className="text-xs text-slate-500 leading-relaxed">
              This interactive landing page is an informational frontend demonstration. Stored submissions remain local to your browser.
            </p>
            <div>
              <button
                type="button"
                onClick={onOpenStorageInfo}
                className="text-xs font-semibold text-teal-700 hover:text-teal-900 underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded"
              >
                Local Storage & Demonstration Notice
              </button>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} BuildMate AI.</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenStorageInfo}
              className="hover:text-slate-800 transition-colors"
            >
              Data Privacy & Local Storage
            </button>
            <span className="text-slate-300">•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
