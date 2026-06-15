/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { HERO_IMAGE } from '../data';

interface HeroProps {
  onLearnMoreClick: () => void;
  onContactClick: () => void;
}

const stats = [
  { value: '3',   label: 'Regional Offices'     },
  { value: '4',   label: 'Investment Verticals'  },
  { value: '10+', label: 'Active Partnerships'   },
];

export default function Hero({ onLearnMoreClick, onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col pt-24 overflow-hidden bg-neutral-900">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Sophisticated architectural coastal skyline of real estate development assets"
          className="w-full h-full object-cover filter grayscale contrast-110 brightness-65 select-none"
        />
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/92 via-neutral-900/65 to-neutral-900/20" />
        {/* Subtle gold tint at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#c4a25a]/8 to-transparent pointer-events-none" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-6 md:px-12 w-full py-16 md:py-24">
        <div className="max-w-3xl">

          {/* Gold accent line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-12 h-[2px] bg-[#c4a25a] mb-6 origin-left"
          />

          {/* Tagline badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-2 py-1.5 px-3 mb-6 bg-[#c4a25a]/15 backdrop-blur-md border border-[#c4a25a]/30 font-sans text-[11px] font-bold tracking-[0.25em] text-[#d4b472] uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c4a25a] animate-gold-pulse" />
            ESTABLISHED PRIVATE CAPITAL
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]"
          >
            Strategic Investments.<br />
            <span className="text-neutral-300">Real Assets.</span><br />
            Long-Term Vision.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-lg md:text-xl text-neutral-300/85 mb-11 max-w-xl leading-relaxed font-light"
          >
            A premier private equity and asset management firm based in Canada and the United States, specializing in the acquisition and disciplined stewardship of high-yield real estate partnerships, private credit, and transformative technology ventures.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={onLearnMoreClick}
              className="relative overflow-hidden px-10 py-5 bg-white text-black font-sans text-xs font-bold uppercase tracking-widest text-center transition-all duration-300 hover:shadow-lg active:scale-95 cursor-pointer group"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Explore Portfolio</span>
              <span className="absolute inset-0 bg-[#c4a25a] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button
              onClick={onContactClick}
              className="px-10 py-5 border border-white/30 text-white font-sans text-xs font-bold uppercase tracking-widest text-center backdrop-blur-sm transition-all duration-300 hover:border-[#c4a25a] hover:bg-[#c4a25a]/10 hover:text-[#d4b472] active:scale-95 cursor-pointer"
            >
              Partnership Inquiries
            </button>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute right-10 bottom-32 hidden lg:flex flex-col items-center gap-3 z-10"
        aria-hidden="true"
      >
        <span className="font-sans text-[9px] font-bold tracking-[0.3em] text-white/35 uppercase"
          style={{ writingMode: 'vertical-rl', letterSpacing: '0.3em' }}
        >
          SCROLL
        </span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-[#c4a25a]/70 to-transparent animate-scroll-bounce" />
      </motion.div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 bg-black/50 backdrop-blur-md border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-3 divide-x divide-white/10 py-5 md:py-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center px-4 md:px-8 gap-1">
                <span className="font-sans text-xl md:text-3xl font-bold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="font-sans text-[9px] md:text-[10px] text-neutral-400 font-semibold uppercase tracking-[0.18em] text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
