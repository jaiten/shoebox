/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ETHOS_DATA } from '../data';

export default function Ethos() {
  const supportPoints = [
    { title: 'INTEGRITY AND ALIGNMENT', desc: 'Co-investing significant personal capital checks alongside limited partners to guarantee fully balanced incentives.' },
    { title: 'ACTIVE OWNERSHIP',        desc: 'Deploying expert in-house operational, engineering, and financial specialists to directly augment board execution.' },
    { title: 'CLEAR COMMUNICATION',     desc: 'Providing highly objective, real-time secure performance metrics with zero corporate posturing.' },
    { title: 'GLOBAL PERSPECTIVE',      desc: 'Sourcing off-market real estate and technology assets through robust cross-border proprietary networks.' },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0e2116] text-white overflow-hidden relative" id="philosophy">

      {/* Animated ambient gold glow — upper right */}
      <div
        className="absolute top-0 right-1/4 w-[700px] h-[700px] rounded-full pointer-events-none animate-drift"
        style={{ background: 'radial-gradient(circle, rgba(196,162,90,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      {/* Subtle green gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(45,90,64,0.4) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left — Principles */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1.5px] bg-[#c4a25a]" />
              <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#c4a25a]">
                OUR ETHOS
              </span>
            </div>
            <h2 className="font-sans text-3xl md:text-5xl font-semibold tracking-tight text-white mb-12 leading-[1.15]">
              The Core Principles of Capital Excellence.
            </h2>

            <div className="space-y-10">
              {ETHOS_DATA.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-6 group"
                >
                  {/* Gold number */}
                  <div className="font-sans font-bold text-2xl text-[#c4a25a] opacity-55 group-hover:opacity-100 transition-opacity duration-300 tabular-nums leading-none pt-0.5 min-w-[2.5rem]">
                    {item.number}
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-white/80 mb-2 group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="font-serif text-white/45 text-sm md:text-md leading-relaxed font-light">
                      {item.description}
                    </p>
                    <div className="mt-4 h-[1px] w-0 group-hover:w-12 bg-[#c4a25a] transition-all duration-500 ease-out" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — 2×2 value cards */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {supportPoints.map((item, index) => {
              // Match the logo's 2×2 grid: top-left=green, top-right=gold, bottom-left=gold, bottom-right=faded green
              const cardStyles = [
                'bg-[#1a3929] border-white/10 hover:border-[#c4a25a]/30',
                'bg-gradient-to-br from-[#D4B472] to-[#B8943E] border-transparent hover:border-[#c4a25a]/50',
                'bg-gradient-to-br from-[#D4B472] to-[#B8943E] border-transparent hover:border-[#c4a25a]/50',
                'bg-[#1a3929]/30 border-white/5 hover:border-[#c4a25a]/20',
              ];
              const isGold = index === 1 || index === 2;
              return (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`aspect-square flex flex-col justify-between p-6 md:p-8 border cursor-default transition-all duration-300 group ${cardStyles[index]}`}
                >
                  <span className={`font-sans text-[11px] font-bold tracking-[0.2em] uppercase line-clamp-2 transition-colors duration-300 ${isGold ? 'text-[#1a3929] group-hover:text-[#0e2116]' : 'text-white/70 group-hover:text-[#c4a25a]'}`}>
                    {item.title}
                  </span>
                  <p className={`font-serif text-[11px] md:text-xs font-light leading-relaxed mt-4 transition-colors duration-300 ${isGold ? 'text-[#1a3929]/70 group-hover:text-[#1a3929]' : 'text-white/40 group-hover:text-white/60'}`}>
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
