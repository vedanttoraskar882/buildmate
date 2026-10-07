import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onRequestPilot: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestPilot }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-[#F8F9FA]/80 backdrop-blur-xs border-b border-slate-200/50 py-4'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark (Clean typography only - NO boxy logo icon in top left) */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg p-1 -ml-1 transition-transform hover:opacity-90"
            aria-label="BuildMate AI - Home"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 font-heading">
              BuildMate <span className="text-teal-600 font-extrabold">AI</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-600 -mt-1">
              UK Trade Intelligence
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/70 backdrop-blur-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-semibold text-slate-600 hover:text-slate-950 px-3.5 py-1.5 rounded-full transition-all hover:bg-white hover:shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Request a Pilot */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onRequestPilot}
              className="hidden sm:inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 active:scale-98 shadow-xs hover:shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 group"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-3.5 h-3.5 text-teal-400 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200/80 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-950 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <button
                type="button"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  onRequestPilot(e);
                }}
                className="w-full py-3 rounded-xl text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
