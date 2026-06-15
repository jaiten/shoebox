/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ETHOS_DATA } from '../data';

export default function Ethos() {
  const supportPoints = [
    { title: 'INTEGRITY AND ALIGNMENT', desc: 'Co-investing significant personal capital checks alongside limited partners to guarantee fully balanced incentives.' },
    { title: 'ACTIVE OWNERSHIP', desc: 'Deploying expert in-house operational, engineering, and financial specialists to directly augment board execution.' },
    { title: 'CLEAR COMMUNICATION', desc: 'Providing highly objective, real-time secure performance metrics with zero corporate posturing.' },
    { title: 'GLOBAL PERSPECTIVE', desc: 'Sourcing off-market real estate and technology assets through robust cross-border proprietary networks.' }
  ];

  return (
    <section className="py-24 md:py-32 bg-black text-white overflow-hidden" id="philosophy">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Left Column - Principles Statement */}
          <div>
            <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-neutral-400 mb-6 block">
              OUR ETHOS
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-semibold tracking-tight text-white mb-12 leading-[1.15]">
              The Core Principles of Capital Excellence.
            </h2>
            
            {/* List block */}
            <div className="space-y-10">
              {ETHOS_DATA.map((item) => (
                <div key={item.id} className="flex gap-6 group">
                  <div className="font-sans font-semibold text-2xl text-neutral-600 opacity-50 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300">
                    {item.number}
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-neutral-200 mb-2 group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="font-serif text-neutral-400 text-sm md:text-md leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - 2x2 Grid of Bento Ethos cards representing active philosophies */}
          <div className="grid grid-cols-2 gap-4">
            {supportPoints.map((item, index) => {
              // Alternate grid style values for rich rhythm representation
              const isDarkAccent = index === 1 || index === 2;
              return (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className={`aspect-square flex flex-col justify-between p-6 md:p-8 border border-white/5 cursor-default transition-colors ${
                    isDarkAccent 
                      ? 'bg-neutral-900 border-white/10 text-white' 
                      : 'bg-white/5 hover:bg-neutral-900 border-white/5 text-neutral-200'
                  }`}
                >
                  <span className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase line-clamp-2">
                    {item.title}
                  </span>
                  
                  <p className="font-serif text-[11px] md:text-xs text-neutral-400 font-light leading-relaxed mt-4">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
