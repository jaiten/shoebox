/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Building2, Network, Rocket, ArrowUpRight, ArrowRight } from 'lucide-react';
import { REAL_ESTATE_IMAGE } from '../data';

interface BentoFocusProps {
  onSelectOpportunityType: (type: string) => void;
}

export default function BentoFocus({ onSelectOpportunityType }: BentoFocusProps) {
  return (
    <section className="py-24 md:py-32 bg-white" id="focus">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1.5px] bg-gradient-to-r from-[#1a3929] to-[#c4a25a]" />
            <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#1a3929]">
              STRATEGIC FOCUS
            </span>
            <span className="w-8 h-[1.5px] bg-gradient-to-l from-[#1a3929] to-[#c4a25a]" />
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-semibold tracking-tight text-[#1a3929]">
            Where Capital Meets Strategy.
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >

          {/* Real Estate Partnerships — 2-col wide image card */}
          <div
            onClick={() => onSelectOpportunityType('Real Estate')}
            className="md:col-span-2 group relative aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-[#0e2116] shadow-sm cursor-pointer"
          >
            <img
              src={REAL_ESTATE_IMAGE}
              alt="Luxury high-density concrete real estate complex"
              className="w-full h-full object-cover brightness-80 saturate-110 group-hover:brightness-100 group-hover:saturate-125 group-hover:scale-[1.06] group-hover:contrast-105 transition-all duration-700 ease-out select-none"
            />
            {/* Forest green gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e2116]/95 via-[#1a3929]/50 to-transparent" />
            {/* Gold bottom bar on hover */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#c4a25a] to-[#d4b472] transition-all duration-700 ease-out z-10" />

            <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#c4a25a] uppercase block mb-2">
                CORE ASSET ALLOCATION
              </span>
              <h3 className="font-sans text-2xl md:text-3xl font-semibold mb-3 tracking-tight">
                Real Estate Partnerships
              </h3>
              <p className="font-serif text-sm md:text-md text-white/70 leading-relaxed max-w-lg font-light">
                Land assemblies, townhouses, high-rise residential subdivisions, and strategic developer joint ventures across rapidly growing metropolitan North American corridors.
              </p>
            </div>

            <div className="absolute top-6 right-6 p-3 bg-[#c4a25a]/20 backdrop-blur-md border border-[#c4a25a]/40 text-[#d4b472] opacity-0 group-hover:opacity-100 transition-all duration-300">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Private Lending — 1-col card */}
          <div
            onClick={() => onSelectOpportunityType('Private Lending')}
            className="group block border border-neutral-200/80 p-8 md:p-10 flex flex-col justify-between hover:border-[#1a3929]/40 transition-all duration-300 shadow-sm cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a3929]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative">
              <div className="p-4 bg-[#f3f9f4] group-hover:bg-[#1a3929] transition-colors duration-300 inline-block rounded-lg mb-8 text-[#1a3929] group-hover:text-[#c4a25a]">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="font-sans text-xl md:text-2xl font-semibold mb-4 text-[#1a3929] tracking-tight">
                Private Lending
              </h3>
              <p className="font-serif text-neutral-500 text-sm md:text-base leading-relaxed font-light">
                Short term bridge financing, and secure first/second mortgage lending solutions for complex institutional or individual property developers.
              </p>
            </div>
            <div className="relative mt-8 border-t border-neutral-200/60 pt-6">
              <span className="font-sans text-[11px] font-bold tracking-widest text-[#1a3929] uppercase flex items-center gap-2 group-hover:gap-4 group-hover:text-[#c4a25a] transition-all duration-300">
                Structured Credit <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Tech & MSP — 1-col card */}
          <div
            onClick={() => onSelectOpportunityType('MSP/Technology')}
            className="group block border border-neutral-200/80 p-8 md:p-10 flex flex-col justify-between hover:border-[#1a3929]/40 transition-all duration-300 shadow-sm cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a3929]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative">
              <div className="p-4 bg-[#f3f9f4] group-hover:bg-[#1a3929] transition-colors duration-300 inline-block rounded-lg mb-8 text-[#1a3929] group-hover:text-[#c4a25a]">
                <Network className="w-8 h-8" />
              </div>
              <h3 className="font-sans text-xl md:text-2xl font-semibold mb-4 text-[#1a3929] tracking-tight">
                Tech &amp; MSP
              </h3>
              <p className="font-serif text-neutral-500 text-sm md:text-base leading-relaxed font-light">
                Acquiring and scaling Managed Service Providers (MSPs) and MSSPs in key areas: Vancouver, Toronto, Miami, New York and Los Angeles. Seeking MSPs from $500K to $1.5M in ARR to acquire.
              </p>
            </div>
            <div className="relative mt-8 border-t border-neutral-200/60 pt-6">
              <span className="font-sans text-[11px] font-bold tracking-widest text-[#1a3929] uppercase flex items-center gap-2 group-hover:gap-4 group-hover:text-[#c4a25a] transition-all duration-300">
                Market Focus <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Venture Capital — 2-col dark forest green card */}
          <div
            onClick={() => onSelectOpportunityType('Other Investment')}
            className="md:col-span-2 group min-h-[320px] bg-[#1a3929] text-white p-10 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-lg cursor-pointer transition-colors duration-350 relative overflow-hidden"
          >
            {/* Animated gold ambient glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(196,162,90,0.12) 0%, transparent 65%)' }}
            />
            {/* Subtle green-to-dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2d5a40]/30 to-transparent pointer-events-none" />

            <div className="flex-1 flex flex-col justify-center relative">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#c4a25a] uppercase block mb-2">
                HIGH-CONVICTION ENTERPRISE
              </span>
              <h3 className="font-sans text-2xl md:text-3xl font-semibold mb-4 tracking-tight text-white">
                Venture Capital
              </h3>
              <p className="font-serif text-white/65 text-sm md:text-base leading-relaxed mb-8 font-light">
                Minority and majority early-stage investments inside high-barrier enterprise software, machine intelligence platforms, and logistics automation pipelines that directly re-architect operational scale.
              </p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {['AI/ML', 'SaaS', 'Automation', 'Fintech'].map((tag) => (
                  <div key={tag} className="flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-white/50 group-hover:text-white/80 transition-colors duration-300">
                    <span className="w-1.5 h-1.5 bg-[#c4a25a] rounded-full animate-gold-pulse flex-shrink-0" />
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Icon box */}
            <div className="w-full md:w-1/3 aspect-square bg-white/5 border border-white/10 group-hover:border-[#c4a25a]/30 p-8 flex items-center justify-center relative overflow-hidden transition-colors duration-500">
              <Rocket className="w-16 h-16 md:w-20 md:h-20 text-white/20 transform group-hover:scale-110 group-hover:opacity-80 group-hover:text-[#c4a25a] transition-all duration-700" />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at center, rgba(196,162,90,0.08) 0%, transparent 70%)' }}
              />
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
