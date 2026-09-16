/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Shield, ChevronUp, Info } from "lucide-react";

interface FooterProps {
  onContactClick: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  const [activeDisclaimer, setActiveDisclaimer] = useState<string | null>(null);

  const handleScrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const topOffset = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const legalDisclosures = {
    privacy: {
      title: "Privacy Statement",
      content:
        'Shoebox Investments Inc. ("Shoebox") takes reasonable precautions to protect any partner, investor, or borrower information shared with us. Any details submitted through this website\'s contact form are stored securely and are never shared with unauthenticated external parties.',
    },
    terms: {
      title: "Terms of Engagement",
      content:
        "By using this website or submitting an inquiry, you acknowledge that Shoebox Investments pursues MSP and MSSP acquisitions, real estate development partnerships, private lending, and venture capital investments. Nothing on this website constitutes an offer to sell securities. Specific partnership and financing terms are agreed upon directly with our team.",
    },
    disclaimer: {
      title: "Risk Disclosures",
      content:
        "Private lending, mortgage financing, real estate, and business investments all involve risk. Past project performance is not a guarantee of future results. This website is informational only and does not constitute an offer to sell securities.",
    },
    login: {
      title: "Partner Portal Access",
      content:
        "Our partner portal is reserved for active investment and financing partners. If you're an existing partner looking for updates on your deal, please reach out directly to your Shoebox contact.",
    },
  };

  const linkClass =
    "text-left text-xs font-semibold text-[#8fbc9e] hover:text-white transition-colors duration-200";

  return (
    <footer className="bg-[#1a3929] text-white relative overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(196,162,90,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1a3929] via-[#c4a25a] to-[#1a3929]" />

      <div className="w-full py-16 md:py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-12 relative">
        <div className="max-w-md">
          <button
            onClick={handleScrollToTop}
            className="font-sans text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-[#c4a25a] uppercase block mb-4 md:mb-6 text-left cursor-pointer hover:text-[#d4b472] transition-colors duration-200"
          >
            SHOEBOX INVESTMENTS
          </button>
          <p className="font-serif text-sm md:text-base text-[#8fbc9e] leading-relaxed">
            Headquartered in Vancouver, we acquire MSPs and MSSPs, invest at the
            ground level in real estate development, provide short-term private
            lending, and back early-stage technology ventures across North America.
          </p>

          <div className="mt-8 w-12 h-[1.5px] bg-gradient-to-r from-[#c4a25a] to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 font-sans w-full md:w-auto">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white">
              Company
            </span>
            <button
              onClick={() => handleNavClick("#about")}
              className={linkClass}
            >
              Why Shoebox?
            </button>
            <button
              onClick={() => handleNavClick("#focus")}
              className={linkClass}
            >
              What We Do
            </button>
            <button
              onClick={() => handleNavClick("#philosophy")}
              className={linkClass}
            >
              How We Work
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white">
              Connect
            </span>
            <button
              onClick={() => setActiveDisclaimer("login")}
              className={linkClass}
            >
              Partner Login
            </button>
            <button onClick={onContactClick} className={linkClass}>
              Contact Us
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white">
              Legal Disclosures
            </span>
            <button
              onClick={() => setActiveDisclaimer("privacy")}
              className={`${linkClass} hover:underline underline-offset-4`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveDisclaimer("terms")}
              className={`${linkClass} hover:underline underline-offset-4`}
            >
              Terms of Service
            </button>
            <button
              onClick={() => setActiveDisclaimer("disclaimer")}
              className={`${linkClass} hover:underline underline-offset-4`}
            >
              Risk Disclosures
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-8 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left relative">
        <p className="font-sans text-[10px] sm:text-[11px] text-[#a8cdb4] tracking-[0.16em] sm:tracking-wider font-semibold">
          &copy; {new Date().getFullYear()} Shoebox Investments Inc. All Rights
          Reserved. Informational materials only. Not an offer to sell
          securities.
        </p>

        <div className="flex gap-6 items-center">
          <button
            onClick={() => setActiveDisclaimer("disclaimer")}
            className="text-[#a8cdb4] hover:text-[#c4a25a] transition-colors duration-200"
            title="Registered Protection Status"
          >
            <Shield className="w-5 h-5 opacity-60 hover:opacity-100" />
          </button>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToTop();
            }}
            className="p-2 border border-[#c4a25a]/30 rounded-full hover:border-[#c4a25a] text-[#a8cdb4] hover:text-[#c4a25a] transition-all duration-200"
            title="Scroll back to header"
          >
            <ChevronUp className="w-4 h-4" />
          </a>
        </div>
      </div>

      {activeDisclaimer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setActiveDisclaimer(null)}
            className="absolute inset-0 bg-[#0e2116]/80 backdrop-blur-sm"
          />
          <div className="relative bg-white text-[#1a3929] max-w-md w-full p-5 sm:p-6 md:p-8 shadow-2xl border border-[#1a3929]/10 z-10 max-h-[90vh] overflow-y-auto">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1a3929] via-[#c4a25a] to-transparent" />

            <div className="flex gap-3 items-center mb-4 border-b border-[#1a3929]/10 pb-3">
              <Info className="w-5 h-5 text-[#c4a25a]" />
              <h3 className="font-sans font-bold text-sm tracking-widest uppercase text-[#1a3929]">
                {
                  legalDisclosures[
                    activeDisclaimer as keyof typeof legalDisclosures
                  ].title
                }
              </h3>
            </div>
            <p className="font-serif text-neutral-700 text-sm leading-relaxed mb-6">
              {
                legalDisclosures[
                  activeDisclaimer as keyof typeof legalDisclosures
                ].content
              }
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setActiveDisclaimer(null)}
                className="relative overflow-hidden px-5 py-2.5 bg-[#1a3929] text-white font-sans text-[10px] font-bold uppercase tracking-wider transition-colors group cursor-pointer"
              >
                <span className="relative z-10 group-hover:text-[#1a3929] transition-colors duration-300">
                  Acknowledge
                </span>
                <span className="absolute inset-0 bg-[#c4a25a] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
