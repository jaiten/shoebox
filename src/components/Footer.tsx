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

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const topOffset = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
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

  return (
    <footer className="bg-[#eeeeee] text-[#1b1b1b] border-t border-black/10">
      
      {/* Top primary links segment */}
      <div className="w-full py-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-md">
          <button 
            onClick={handleScrollToTop}
            className="font-sans text-xl md:text-2xl font-bold tracking-wider text-black uppercase block mb-6 text-left cursor-pointer"
          >
            SHOEBOX INVESTMENTS
          </button>
          <p className="font-serif text-sm md:text-md text-neutral-650 leading-relaxed font-light">
            A disciplined approach to capital accumulation and growth. We specialize in identifying and actively managing high-yield real estate, structured credit facilities, and private technology roll-ups across North America.
          </p>
        </div>

        {/* Links Segment Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-8 font-sans">
          
          {/* Column 1 - Company */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-black">Company</span>
            <button onClick={() => handleNavClick('#about')} className="text-left text-xs font-semibold text-neutral-500 hover:text-black transition-colors">About Foundation</button>
            <button onClick={() => handleNavClick('#focus')} className="text-left text-xs font-semibold text-neutral-500 hover:text-black transition-colors">Investment Focus</button>
            <button onClick={() => handleNavClick('#philosophy')} className="text-left text-xs font-semibold text-neutral-500 hover:text-black transition-colors">Philosophy &amp; Ethos</button>
          </div>

          {/* Column 2 - Connect */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-black">Connect</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-neutral-500 hover:text-black transition-colors">LinkedIn</a>
            <button onClick={() => setActiveDisclaimer('login')} className="text-left text-xs font-semibold text-neutral-500 hover:text-black transition-colors">Investor Login</button>
            <button onClick={onContactClick} className="text-left text-xs font-semibold text-neutral-500 hover:text-black transition-colors">Contact GP</button>
          </div>

          {/* Column 3 - Regulatory */}
          <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
            <span className="text-xs font-bold uppercase tracking-widest text-black">Legal Disclosures</span>
            <button onClick={() => setActiveDisclaimer('privacy')} className="text-left text-xs font-semibold text-neutral-500 hover:text-black transition-colors hover:underline underline-offset-4">Privacy Policy</button>
            <button onClick={() => setActiveDisclaimer('terms')} className="text-left text-xs font-semibold text-neutral-500 hover:text-black transition-colors hover:underline underline-offset-4">Terms of Service</button>
            <button onClick={() => setActiveDisclaimer('disclaimer')} className="text-left text-xs font-semibold text-neutral-500 hover:text-black transition-colors hover:underline underline-offset-4">Structured Disclosures</button>
          </div>

        </div>
      </div>

      {/* Bottom Compliance Segment */}
      <div className="border-t border-black/5 py-8 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="font-sans text-[11px] text-neutral-500 tracking-wider font-semibold">
          &copy; {new Date().getFullYear()} Shoebox Investments Inc. All Rights Reserved. Informational materials only. Not an offer to sell securities.
        </p>
        
        {/* Verification and Navigation Utilities */}
        <div className="flex gap-6 items-center">
          <button 
            onClick={() => setActiveDisclaimer('disclaimer')}
            className="text-neutral-400 hover:text-black transition-colors"
            title="Registered Protection Status"
          >
            <Shield className="w-5 h-5 opacity-40 hover:opacity-100" />
          </button>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleScrollToTop(); }}
            className="p-2 border border-black/10 rounded-full hover:border-black text-neutral-400 hover:text-black transition-colors"
            title="Scroll back to header"
          >
            <ChevronUp className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Mini Disclosure Modal Sheet */}
      {activeDisclaimer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setActiveDisclaimer(null)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <div className="relative bg-white text-black max-w-md w-full p-8 rounded-lg shadow-xl border border-neutral-100 z-10 animate-scale-up">
            <div className="flex gap-3 items-center mb-4 text-black border-b border-neutral-100 pb-3">
              <Info className="w-5 h-5 text-neutral-600" />
              <h3 className="font-sans font-bold text-sm tracking-widest uppercase">
                {legalDisclosures[activeDisclaimer as keyof typeof legalDisclosures].title}
              </h3>
            </div>
            <p className="font-serif text-neutral-600 text-sm leading-relaxed mb-6 font-light">
              {legalDisclosures[activeDisclaimer as keyof typeof legalDisclosures].content}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setActiveDisclaimer(null)}
                className="px-5 py-2 bg-black hover:bg-neutral-800 text-white font-sans text-[10px] font-bold uppercase tracking-wider transition-colors rounded"
              >
                Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
