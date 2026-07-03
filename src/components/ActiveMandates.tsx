/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ActiveMandatesProps {
  onContactClick: (type: string) => void;
}

const mandates = [
  {
    tag: 'MSP & MSSP Acquisitions',
    headline: '$500K - $1.5M ARR',
    body: 'Searching for MSPs from $500K to $1.5M in ARR to acquire across Vancouver, Toronto, Miami, New York and Los Angeles.',
    cta: 'Sell Your MSP',
    type: 'MSP/Technology',
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
    type: 'Private Lending',
  },
];

export default function ActiveMandates({ onContactClick }: ActiveMandatesProps) {
  return (
    <section className="bg-[#0e2116] py-16 md:py-20 border-b border-[#c4a25a]/15">
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

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#c4a25a]/15">
          {mandates.map((mandate, index) => (
            <motion.div
              key={mandate.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group px-0 md:px-10 py-7 md:py-0 first:pl-0 last:pr-0 flex flex-col gap-4"
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
                onClick={() => onContactClick(mandate.type)}
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
