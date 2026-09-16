/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface BentoFocusProps {
  onSelectOpportunityType: (type: string) => void;
}

const MANDATES = [
  {
    tag: 'MSP & MSSP Acquisitions',
    headline: '$500K - $1.5M ARR',
    body: 'Actively acquiring and scaling MSPs and MSSPs in Vancouver, Toronto, Miami, New York, and Los Angeles. We seek providers with $500K to $1.5M in annual recurring revenue, supporting growth in cybersecurity, AI, and IT support services.',
    cta: 'Sell Your MSP',
    type: 'MSP/Technology',
  },
  {
    tag: 'Real Estate Development',
    headline: 'Ground-Level Investment',
    body: 'Investing at the ground level in land assemblies, townhouses, high-rise residential developments, and subdivisions. We partner with developers through strategic joint ventures in growing North American markets.',
    cta: 'Explore Partnership',
    type: 'Real Estate',
  },
  {
    tag: 'Private Lending',
    headline: 'From 12% Per Annum',
    body: 'Short-term bridge financing and secured first and second mortgage loans for institutional and individual property developers. Financing for real estate projects in the Lower Mainland and GTA.',
    cta: 'Apply for Financing',
    type: 'Private Lending',
  },
  {
    tag: 'Venture Capital',
    headline: 'Early-Stage Technology',
    body: 'Minority and majority investments in early-stage enterprise software, AI platforms, and logistics automation businesses with high barriers to entry and the potential to transform how companies operate and scale.',
    cta: 'Discuss Your Venture',
    type: 'Other Investment',
  },
];

export default function BentoFocus({ onSelectOpportunityType }: BentoFocusProps) {
  return (
    <section className="focus-section bg-[#0e2116] py-20 md:py-28 border-b border-[#c4a25a]/15" id="focus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c4a25a] flex-shrink-0" />
          <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#c4a25a]">
            Four Investment Verticals
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {MANDATES.map((mandate, index) => (
            <motion.div
              key={mandate.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mandate-card group p-7 sm:p-10 flex flex-col gap-5 border border-white/10 rounded-2xl"
            >
              <span className="font-sans text-[10px] font-semibold tracking-[0.2em] text-[#d8bf88] uppercase">
                <span className="text-white/30 mr-4">0{index + 1}</span>
                {mandate.tag}
              </span>

              <p className="font-serif text-3xl sm:text-4xl font-normal text-[#faf8f2] tracking-tight leading-tight">
                {mandate.headline}
              </p>

              <p className="font-sans text-white/65 text-sm sm:text-base leading-[1.8] flex-1 max-w-lg">
                {mandate.body}
              </p>

              <button
                onClick={() => onSelectOpportunityType(mandate.type)}
                className="mt-2 self-start flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-[#c4a25a] hover:gap-4 transition-all duration-300 cursor-pointer group-hover:text-[#d4b472]"
              >
                {mandate.cta} <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
