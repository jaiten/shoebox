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
    tag: 'Business Loans',
    headline: 'Working Capital & Growth Loans',
    body: 'Financing for equipment, working capital, expansion, and other growth needs for established businesses and entrepreneurs.',
    cta: 'Get Business Funding',
    type: 'Business Financing',
  },
  {
    tag: 'Real Estate Development',
    headline: 'Ground-Level JV Partner',
    body: 'Investing at the ground level in land assemblies, townhouses, and high-rise residential development projects across North America.',
    cta: 'Explore Partnership',
    type: 'Real Estate',
  },
  {
    tag: 'Private Lending',
    headline: '12%+ Per Annum',
    body: 'Short-term bridge financing and secure first/second mortgage lending for real estate projects in the Lower Mainland and GTA.',
    cta: 'Apply for Financing',
    type: 'Real Estate',
  },
  {
    tag: 'MSP & MSSP Acquisitions',
    headline: '$500K - $1.5M ARR',
    body: 'Searching for MSPs from $500K to $1.5M in ARR to acquire across Vancouver, Toronto, Miami, New York and Los Angeles.',
    cta: 'Sell Your MSP',
    type: 'MSP/Technology',
  },
];

function dividerClasses(index: number) {
  const base = index === 0 ? 'border-t-0' : 'border-t';
  const sm =
    index === 0
      ? 'sm:border-t-0 sm:border-l-0'
      : index === 1
        ? 'sm:border-t-0 sm:border-l'
        : index === 2
          ? 'sm:border-t sm:border-l-0'
          : 'sm:border-t sm:border-l';
  const lg = index === 0 ? 'lg:border-t-0 lg:border-l-0' : 'lg:border-t-0 lg:border-l';
  return `${base} ${sm} ${lg}`;
}

export default function BentoFocus({ onSelectOpportunityType }: BentoFocusProps) {
  return (
    <section className="bg-[#0e2116] py-16 md:py-20 border-b border-[#c4a25a]/15" id="focus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c4a25a] animate-gold-pulse flex-shrink-0" />
          <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#c4a25a]">
            Active Mandates
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-[#c4a25a]/15">
          {MANDATES.map((mandate, index) => (
            <motion.div
              key={mandate.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group px-0 sm:px-6 lg:px-8 py-7 sm:py-8 lg:py-0 flex flex-col gap-4 border-[#c4a25a]/15 ${dividerClasses(index)}`}
            >
              <span className="font-sans text-[10px] font-bold tracking-[0.22em] text-white/40 uppercase">
                {mandate.tag}
              </span>

              <p className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                {mandate.headline}
              </p>

              <p className="font-serif text-white/60 text-sm leading-relaxed font-light flex-1">
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
