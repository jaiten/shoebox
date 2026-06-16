/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Shield, ChevronUp, Info } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  const [activeDisclaimer, setActiveDisclaimer] = useState<string | null>(null);

  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const topOffset = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const legalDisclosures = {
    privacy: {
      title: 'Privacy Statement & Compliance',
      content: 'Shoebox Investments Inc. ("Shoebox") takes rigorous technical precautions to protect any proprietary partner, investor, or sponsor data. Any personal details, corporate opportunity messages, or contact forms submitted through this interface are encrypted server-side and stored securely. We do not distribute or share partner files/emails with unauthenticated external entities.'
    },
    terms: {
      title: 'Terms of Professional Engagement',
      content: 'By navigating this application or submitting portfolio opportunity inquiries, you acknowledge that Shoebox represents a private equity, debt-holding, and venture capital syndication. Nothing contained within this website constitutes a direct public offering of securities. All active institutional partnerships are bound to strict, accredited non-disclosure agreements (NDAs) drafted pre-engagement.'
    },
    disclaimer: {
      title: 'Regulatory & Risk Disclosures',
      content: 'Private placements, mortgage instruments, mezzanine facilities, and venture investments involve substantial long-term risk. General past project execution metrics are not direct indicators of future capital distributions. This website is informational only and does not constitute an offer to sell securities.'
    },
    login: {
      title: 'Secure LP Portal Access',
      content: 'The Shoebox Limited Partner Portal is a multi-factor authenticated interface reserved strictly for active institutional investment accounts. If you are an existing stakeholder hoping to access deal books, monthly draw downs, or tax K-1 filings, please coordinate access configurations directly with your designated GP contact.'
    }
  };

  const linkClass = "text-left text-xs font-semibold text-[#8fbc9e] hover:text-white transition-colors duration-200";

  return (
    <footer className="bg-[#1a3929] text-white relative overflow-hidden">

      {/* Subtle ambient gold glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(196,162,90,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      {/* Top gold accent border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1a3929] via-[#c4a25a] to-[#1a3929]" />

      {/* Top links segment */}
      <div className="w-full py-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative">

        <div className="max-w-md">
          <button
            onClick={handleScrollToTop}
            className="font-sans text-xl md:text-2xl font-bold tracking-wider text-[#c4a25a] uppercase block mb-6 text-left cursor-pointer hover:text-[#d4b472] transition-colors duration-200"
          >
            SHOEBOX INVESTMENTS
          </button>
          <p className="font-serif text-sm md:text-md text-[#8fbc9e] leading-relaxed font-light">
            A disciplined approach to capital accumulation and growth. We specialize in identifying and actively managing high-yield real estate, structured credit facilities, and private technology roll-ups across North America.
          </p>

          {/* Gold accent divider */}
          <div className="mt-8 w-12 h-[1.5px] bg-gradient-to-r from-[#c4a25a] to-transparent" />
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-8 font-sans">

          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white">Company</span>
            <button onClick={() => handleNavClick('#about')} className={linkClass}>About Foundation</button>
            <button onClick={() => handleNavClick('#focus')} className={linkClass}>Investment Focus</button>
            <button onClick={() => handleNavClick('#philosophy')} className={linkClass}>Philosophy &amp; Ethos</button>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white">Connect</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={linkClass}>LinkedIn</a>
            <button onClick={() => setActiveDisclaimer('login')} className={linkClass}>Investor Login</button>
            <button onClick={onContactClick} className={linkClass}>Contact GP</button>
          </div>

          <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
            <span className="text-xs font-bold uppercase tracking-widest text-white">Legal Disclosures</span>
            <button onClick={() => setActiveDisclaimer('privacy')} className={`${linkClass} hover:underline underline-offset-4`}>Privacy Policy</button>
            <button onClick={() => setActiveDisclaimer('terms')} className={`${linkClass} hover:underline underline-offset-4`}>Terms of Service</button>
            <button onClick={() => setActiveDisclaimer('disclaimer')} className={`${linkClass} hover:underline underline-offset-4`}>Structured Disclosures</button>
          </div>

        </div>
      </div>

      {/* Bottom compliance bar */}
      <div className="border-t border-white/10 py-8 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left relative">
        <p className="font-sans text-[11px] text-[#6b9e7a] tracking-wider font-semibold">
          &copy; {new Date().getFullYear()} Shoebox Investments Inc. All Rights Reserved. Informational materials only. Not an offer to sell securities.
        </p>

        <div className="flex gap-6 items-center">
          <button
            onClick={() => setActiveDisclaimer('disclaimer')}
            className="text-[#6b9e7a] hover:text-[#c4a25a] transition-colors duration-200"
            title="Registered Protection Status"
          >
            <Shield className="w-5 h-5 opacity-60 hover:opacity-100" />
          </button>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleScrollToTop(); }}
            className="p-2 border border-[#c4a25a]/30 rounded-full hover:border-[#c4a25a] text-[#6b9e7a] hover:text-[#c4a25a] transition-all duration-200"
            title="Scroll back to header"
          >
            <ChevronUp className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Disclosure modal */}
      {activeDisclaimer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setActiveDisclaimer(null)}
            className="absolute inset-0 bg-[#0e2116]/80 backdrop-blur-sm"
          />
          <div className="relative bg-white text-[#1a3929] max-w-md w-full p-8 shadow-2xl border border-[#1a3929]/10 z-10">
            {/* Gold top accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1a3929] via-[#c4a25a] to-transparent" />

            <div className="flex gap-3 items-center mb-4 border-b border-[#1a3929]/10 pb-3">
              <Info className="w-5 h-5 text-[#c4a25a]" />
              <h3 className="font-sans font-bold text-sm tracking-widest uppercase text-[#1a3929]">
                {legalDisclosures[activeDisclaimer as keyof typeof legalDisclosures].title}
              </h3>
            </div>
            <p className="font-serif text-neutral-600 text-sm leading-relaxed mb-6 font-light">
              {legalDisclosures[activeDisclaimer as keyof typeof legalDisclosures].content}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setActiveDisclaimer(null)}
                className="relative overflow-hidden px-5 py-2.5 bg-[#1a3929] text-white font-sans text-[10px] font-bold uppercase tracking-wider transition-colors group cursor-pointer"
              >
                <span className="relative z-10 group-hover:text-[#1a3929] transition-colors duration-300">Acknowledge</span>
                <span className="absolute inset-0 bg-[#c4a25a] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
