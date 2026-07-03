/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ABOUT_IMAGE } from '../data';

export default function About() {
  return (
    <section className="py-20 md:py-32 bg-[#f3f9f4] border-b border-[#1a3929]/8 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1.5px] bg-[#c4a25a]" />
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#1a3929]">
              WHY SHOEBOX?
            </span>
          </div>

          <h2 className="font-sans text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-[#1a3929] mb-6 md:mb-8 leading-[1.15]">
            Every successful business starts somewhere.
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 md:space-y-6"
          >
            <p className="font-serif text-base md:text-lg text-neutral-600 leading-relaxed font-light">
              Sometimes it&apos;s a notebook. Sometimes it&apos;s a sketch on a napkin. Sometimes it&apos;s a shoebox filled with receipts, ideas, plans and dreams.
            </p>
            <p className="font-serif text-base md:text-lg text-neutral-600 leading-relaxed font-light">
              Shoebox Investments was built on the belief that disciplined execution turns simple ideas into successful businesses, real estate and long-term wealth.
            </p>
            <p className="font-serif text-base md:text-lg text-neutral-600 leading-relaxed font-light">
              Today we continue investing in entrepreneurs, developers and business owners who share that same mindset.
            </p>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 md:mt-10 h-[1.5px] bg-gradient-to-r from-[#c4a25a] via-[#1a3929]/40 to-transparent origin-left"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-6 md:col-start-7 mt-4 md:mt-0 relative"
        >
          <div className="aspect-[4/5] sm:aspect-[5/6] md:aspect-[4/5] relative overflow-hidden bg-[#c4a25a]/10 shadow-xl group">
            <img
              src={ABOUT_IMAGE}
              alt="Sophisticated modern corporate boardroom concrete desk representing the Shoebox standard"
              className="w-full h-full object-cover brightness-95 saturate-105 transition-all duration-700 ease-out group-hover:brightness-103 group-hover:saturate-115 select-none"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3929]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 bg-[#1a3929]/95 backdrop-blur-sm border-t border-r border-[#c4a25a]/20 shadow-lg max-w-[85%]">
              <div className="flex items-center gap-2">
                <span className="w-4 h-[1.5px] bg-[#c4a25a]" />
                <p className="font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.22em] sm:tracking-[0.25em] text-[#c4a25a] uppercase">
                  BUILT BY ENTREPRENEURS
                </p>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#c4a25a]/50 pointer-events-none transition-all duration-500 ease-out group-hover:w-20 group-hover:h-20 group-hover:border-[#c4a25a]/80" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#c4a25a]/20 pointer-events-none transition-all duration-500 ease-out group-hover:w-12 group-hover:h-12 group-hover:border-[#c4a25a]/40" />
          </div>

          <div className="absolute -inset-4 border border-[#1a3929]/8 -z-10 pointer-events-none translate-x-2 translate-y-2" />
          <div className="absolute -inset-4 border border-[#c4a25a]/10 -z-10 pointer-events-none -translate-x-1 -translate-y-1" />
        </motion.div>
      </div>
    </section>
  );
}
