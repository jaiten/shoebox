/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ETHOS_DATA } from '../data';

export default function Ethos() {
  const supportPoints = [
    {
      title: 'SKIN IN THE GAME',
      desc: 'We put our own capital into every deal we back, so our incentives are always aligned with yours.',
    },
    {
      title: 'HANDS-ON PARTNERSHIP',
      desc: 'We roll up our sleeves and work directly with the businesses and projects we back, not just write a check.',
    },
    {
      title: 'STRAIGHT TALK',
      desc: 'Honest answers and real numbers, with no corporate spin, exactly how we\'d want to be treated.',
    },
    {
      title: 'REAL RELATIONSHIPS',
      desc: 'We build relationships with developers, business owners, and technology founders to identify opportunities and grow together.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#0e2116] text-white overflow-hidden relative" id="philosophy">
      <div
        className="absolute top-0 right-1/4 w-[700px] h-[700px] rounded-full pointer-events-none animate-drift"
        style={{ background: 'radial-gradient(circle, rgba(196,162,90,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(45,90,64,0.4) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <span className="w-6 h-[1.5px] bg-[#c4a25a]" />
              <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#c4a25a]">
                OUR ETHOS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white mb-8 sm:mb-10 md:mb-12 leading-[1.12]">
              Our Investment Philosophy.
            </h2>

            <div className="space-y-7 sm:space-y-8 md:space-y-10">
              {ETHOS_DATA.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-4 sm:gap-6 group"
                >
                  <div className="font-sans font-bold text-2xl text-[#d4b472] transition-opacity duration-300 tabular-nums leading-none pt-0.5 min-w-[2.5rem]">
                    {item.number}
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold uppercase tracking-[0.18em] sm:tracking-widest text-white mb-2 transition-colors">
                      {item.title}
                    </h4>
                    <p className="font-serif text-white/85 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-4 h-[1px] w-10 sm:w-12 bg-[#c4a25a]/45 group-hover:bg-[#c4a25a] transition-colors duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl p-px bg-gradient-to-br from-[#d4b472]/60 via-white/10 to-[#d4b472]/25 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px overflow-hidden rounded-[calc(1.5rem-1px)] bg-white/10">
              {supportPoints.map((item, index) => (
                <div
                  key={item.title}
                  className="group relative flex min-h-[200px] md:min-h-[260px] flex-col bg-[#1a3929] p-6 md:p-8 transition-colors duration-500 hover:bg-[#1f4431]"
                >
                  <span className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-[#d4b472] to-transparent transition-[width] duration-700 ease-out group-hover:w-full" />
                  <span className="font-serif text-5xl md:text-6xl leading-none text-white/15 transition-colors duration-500 group-hover:text-[#d4b472]">
                    0{index + 1}
                  </span>
                  <div className="mt-auto pt-8">
                    <h3 className="font-sans text-[13px] sm:text-sm font-bold uppercase tracking-[0.16em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-serif text-sm leading-relaxed text-white/85">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
