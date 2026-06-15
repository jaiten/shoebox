/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
        <div className="text-center mb-16 md:mb-24">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-neutral-400 mb-4 block">
            STRATEGIC FOCUS
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-semibold tracking-tight text-black">
            Where Capital Meets Strategy.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Real Estate Partnerships (Row 1, 2-Cols wide) */}
          <div 
            onClick={() => onSelectOpportunityType('Real Estate')}
            className="md:col-span-2 group relative aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-neutral-900 shadow-sm cursor-pointer"
          >
            <img 
              src={REAL_ESTATE_IMAGE} 
              alt="Luxury high-density concrete real estate complex" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out select-none"
            />
            {/* Dark contrast gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
            
            {/* Card Content Overlay */}
            <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-neutral-300 uppercase block mb-2">
                CORE ASSET ALLOCATION
              </span>
              <h3 className="font-sans text-2xl md:text-3xl font-semibold mb-3 tracking-tight">
                Real Estate Partnerships
              </h3>
              <p className="font-serif text-sm md:text-md text-neutral-300 leading-relaxed max-w-lg font-light">
                Land assemblies, high-rise residential subdivisions, and strategic developer joint ventures across rapidly growing metropolitan North American corridors.
              </p>
            </div>
            
            {/* Top-Right action icon */}
            <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Private Lending (Row 1, 1-Col wide) */}
          <div 
            onClick={() => onSelectOpportunityType('Private Lending')}
            className="group block border border-neutral-200/80 p-8 md:p-10 flex flex-col justify-between hover:bg-neutral-50 hover:border-black transition-all duration-300 shadow-sm cursor-pointer"
          >
            <div>
              <div className="p-4 bg-neutral-100 group-hover:bg-black group-hover:text-white transition-colors duration-300 inline-block rounded-lg mb-8 text-neutral-800">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="font-sans text-xl md:text-2xl font-semibold mb-4 text-black tracking-tight">
                Private Lending
              </h3>
              <p className="font-serif text-neutral-500 text-sm md:text-base leading-relaxed font-light">
                Specialized bridge financing, custom mezzanine credit facilities, and secure first/second mortgage lending solutions for complex institutional developer space.
              </p>
            </div>
            
            <div className="mt-8 border-t border-neutral-200/60 pt-6">
              <span className="font-sans text-[11px] font-bold tracking-widest text-black uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                Structured Credit <ArrowRight className="w-4 h-4 text-neutral-450" />
              </span>
            </div>
          </div>

          {/* Tech & MSP (Row 2, 1-Col wide) */}
          <div 
            onClick={() => onSelectOpportunityType('MSP/Technology')}
            className="group block border border-neutral-200/80 p-8 md:p-10 flex flex-col justify-between hover:bg-neutral-50 hover:border-black transition-all duration-300 shadow-sm cursor-pointer"
          >
            <div>
              <div className="p-4 bg-neutral-100 group-hover:bg-black group-hover:text-white transition-colors duration-300 inline-block rounded-lg mb-8 text-neutral-800">
                <Network className="w-8 h-8" />
              </div>
              <h3 className="font-sans text-xl md:text-2xl font-semibold mb-4 text-black tracking-tight">
                Tech &amp; MSP
              </h3>
              <p className="font-serif text-neutral-500 text-sm md:text-base leading-relaxed font-light">
                Acquiring and scaling operationally efficient Managed Service Providers (MSPs) inside key regional high-density tech tech hubs: Vancouver, Toronto, and Miami.
              </p>
            </div>
            
            <div className="mt-8 border-t border-neutral-200/60 pt-6">
              <span className="font-sans text-[11px] font-bold tracking-widest text-black uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                Market Focus <ArrowRight className="w-4 h-4 text-neutral-450" />
              </span>
            </div>
          </div>

          {/* Venture Capital (Row 2, 2-Cols wide) */}
          <div 
            onClick={() => onSelectOpportunityType('Other Investment')}
            className="md:col-span-2 group min-h-[320px] bg-black text-white p-10 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-lg cursor-pointer hover:bg-neutral-900 transition-colors duration-350"
          >
            <div className="flex-1 flex flex-col justify-center">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-2">
                HIGH-CONVICTION ENTERPRISE
              </span>
              <h3 className="font-sans text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
                Venture Capital
              </h3>
              <p className="font-serif text-neutral-350 text-sm md:text-base leading-relaxed mb-8 font-light">
                Strategic minority and majority early-stage investments inside high-barrier enterprise Software, machine intelligence platforms, and logistics automation pipelines that directly re-architect operational scale.
              </p>
              
              {/* Sector Tags Grid */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {['AI/ML', 'SaaS', 'Automation', 'Fintech'].map((tag) => (
                  <div key={tag} className="flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-neutral-300">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Styled side rocket logo representation */}
            <div className="w-full md:w-1/3 aspect-square bg-white/5 border border-white/5 p-8 flex items-center justify-center rounded-lg relative overflow-hidden group-hover:border-white/10 transition-colors">
              <Rocket className="w-16 h-16 md:w-20 md:h-20 text-neutral-500 opacity-20 transform group-hover:scale-110 group-hover:opacity-40 group-hover:text-white transition-all duration-700" />
              <div className="absolute -inset-10 bg-radial-gradient from-white/5 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
