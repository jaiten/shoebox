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

  const greenCard = {
    panel: 'bg-[#1a3929] border-white/12 hover:border-[#c4a25a]/50',
    accent: 'bg-[#d4b472]',
    index: 'text-[#d4b472]',
    title: 'text-white',
    body: 'text-white/72',
  };

  const goldCard = {
    panel: 'bg-[#d4b472] border-[#e2c995] hover:border-[#f0dbb1]',
    accent: 'bg-[#927025]',
    index: 'text-[#1a3929]/75',
    title: 'text-[#1a3929]',
    body: 'text-[#1a3929]/85',
  };

  // Echo the logo's green / gold / gold / green arrangement.
  const cardStyles = [greenCard, goldCard, goldCard, greenCard];

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
                  <div className="font-sans font-bold text-2xl text-[#c4a25a] opacity-70 group-hover:opacity-100 transition-opacity duration-300 tabular-nums leading-none pt-0.5 min-w-[2.5rem]">
                    {item.number}
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold uppercase tracking-[0.18em] sm:tracking-widest text-white/90 mb-2 group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="font-serif text-white/68 text-sm md:text-base leading-relaxed font-light">
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 auto-rows-fr items-stretch"
          >
            {supportPoints.map((item, index) => {
              const style = cardStyles[index];

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className={`relative overflow-hidden rounded-2xl border shadow-[0_18px_50px_rgba(0,0,0,0.14)] flex min-h-[190px] sm:min-h-[215px] md:min-h-[250px] h-full flex-col justify-between p-5 sm:p-6 md:p-8 transition-all duration-300 group ${style.panel}`}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at top right, rgba(255,255,255,0.12) 0%, transparent 55%)' }}
                  />
                  <div className={`relative w-10 h-1 rounded-full mb-5 ${style.accent}`} />

                  <div className="relative flex-1 flex flex-col">
                    <span className={`font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.24em] uppercase mb-3 ${style.index}`}>
                      0{index + 1}
                    </span>
                    <h3 className={`font-sans text-sm sm:text-[15px] font-bold tracking-[0.14em] uppercase leading-snug ${style.title}`}>
                      {item.title}
                    </h3>
                  </div>

                  <p className={`relative font-serif text-[13px] sm:text-[13.5px] leading-relaxed font-light mt-5 ${style.body}`}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
