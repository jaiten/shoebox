/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ABOUT_IMAGE } from '../data';

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-neutral-50 border-b border-black/5 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">

        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1.5px] bg-[#c4a25a]" />
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#c4a25a]">
              OUR FOUNDATION
            </span>
          </div>

          <h2 className="font-sans text-3xl md:text-5xl font-semibold tracking-tight text-black mb-8 leading-[1.15]">
            Quiet Confidence through Disciplined Execution.
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="font-serif text-md md:text-lg text-neutral-600 leading-relaxed font-light">
              Shoebox Investments was built on a foundation of entrepreneurial experience and a meticulous approach to capital preservation. We don't just invest; we architect real-world opportunities.
            </p>
            <p className="font-serif text-md md:text-lg text-neutral-600 leading-relaxed font-light">
              Our investment philosophy is deeply rooted in long-term multi-generational thinking, prioritizing sustainable cash-flow growth and structural equity protection over transient, highly speculative market bubbles. Every single partnership we cultivate is an active, collaborative commitment to shared executive excellence.
            </p>
          </motion.div>

          {/* Gold accent divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 h-[1px] bg-gradient-to-r from-[#c4a25a]/60 via-[#c4a25a]/20 to-transparent origin-left"
          />
        </motion.div>

        {/* Right Image Column */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-6 md:col-start-7 mt-8 md:mt-0 relative"
        >
          <div className="aspect-[4/5] relative overflow-hidden bg-neutral-200 shadow-xl group">
            <img
              src={ABOUT_IMAGE}
              alt="Sophisticated modern corporate boardroom concrete desk representing the Shoebox standard"
              className="w-full h-full object-cover filter grayscale contrast-105 brightness-95 transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0 select-none"
            />

            {/* Badge overlay */}
            <div className="absolute bottom-0 left-0 p-6 md:p-8 bg-white/95 backdrop-blur-sm border-t border-r border-[#c4a25a]/20 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="w-4 h-[1.5px] bg-[#c4a25a]" />
                <p className="font-sans text-[11px] font-bold tracking-[0.25em] text-black uppercase">
                  THE SHOEBOX STANDARD
                </p>
              </div>
            </div>

            {/* Gold corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#c4a25a]/40 pointer-events-none" />
          </div>

          {/* Accent frames */}
          <div className="absolute -inset-4 border border-black/5 -z-10 pointer-events-none translate-x-2 translate-y-2" />
          <div className="absolute -inset-4 border border-[#c4a25a]/10 -z-10 pointer-events-none -translate-x-1 -translate-y-1" />
        </motion.div>

      </div>
    </section>
  );
}
