/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { HERO_IMAGE } from '../data';

interface HeroProps {
  onContactClick: (type?: string) => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const handleViewProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      const topOffset = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section relative min-h-[90svh] md:min-h-screen flex flex-col pt-20 md:pt-24 overflow-hidden bg-[#0e2116]">
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Sophisticated architectural coastal skyline of real estate development assets"
          className="hero-image w-full h-full object-cover select-none"
        />
        <div className="hero-shade absolute inset-0" />
        <div
          className="absolute bottom-0 left-0 w-2/3 h-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(196,162,90,0.10) 0%, transparent 65%)' }}
        />
      </div>

      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full py-16 md:py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-14 h-[2px] bg-gradient-to-r from-[#c4a25a] to-[#d4b472] mb-6 origin-left"
          />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-3 mb-8 font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#d4b472] uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c4a25a] flex-shrink-0" />
            Head Office: Vancouver, Canada
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="hero-title font-serif font-normal tracking-[-0.045em] text-[#faf8f2] mb-7 leading-[1.06]"
          >
            Strategic Investments.<br />
            Real Assets.<br />
            <span className="text-[#d8bf88] italic">Long-Term Vision.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-base md:text-lg text-white/75 mb-6 max-w-xl leading-[1.75]"
          >
            Based in Vancouver, Shoebox Investments acquires MSPs and MSSPs, invests at the ground level in real estate development, and provides short-term real estate financing starting at 12% per annum.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[11px] sm:text-xs tracking-[0.06em] text-white/55 mb-9 md:mb-11 max-w-xl leading-[2]"
          >
            MSP &amp; MSSP Acquisitions <span className="text-[#c4a25a]/60">&bull;</span> Real Estate Development <span className="text-[#c4a25a]/60">&bull;</span> Private Lending <span className="text-[#c4a25a]/60">&bull;</span> Venture Capital
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <button
              onClick={() => onContactClick('MSP/Technology')}
              className="rounded-full relative overflow-hidden w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-[#c4a25a] text-[#0e2116] font-sans text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] sm:tracking-widest text-center transition-all duration-300 hover:shadow-lg active:scale-95 cursor-pointer group"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Sell Your MSP</span>
              <span className="absolute inset-0 bg-[#1a3929] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button
              onClick={handleViewProjects}
              className="rounded-full w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 border border-[#c4a25a]/40 text-white font-sans text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] sm:tracking-widest text-center backdrop-blur-sm transition-all duration-300 hover:border-[#c4a25a] hover:bg-[#c4a25a]/10 hover:text-[#d4b472] active:scale-95 cursor-pointer"
            >
              View All Assets
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute right-10 bottom-20 hidden lg:flex flex-col items-center gap-3 z-10"
        aria-hidden="true"
      >
        <span
          className="font-sans text-[9px] font-bold tracking-[0.3em] text-[#c4a25a]/50 uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-[#c4a25a]/70 to-transparent animate-scroll-bounce" />
      </motion.div>
    </section>
  );
}
