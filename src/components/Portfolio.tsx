/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Real Estate' | 'Private Lending' | 'MSP/Technology'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filters the list based on classification
  const filteredProjects = PROJECTS_DATA.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Real Estate') {
      return project.category.includes('Residential') || project.category.includes('Land');
    }
    return project.category === activeFilter;
  });

  return (
    <section className="py-24 md:py-32 bg-[#f9f9f9]" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 border-b border-black/10 pb-8">
          <div>
            <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-neutral-400 mb-4 block">
              PORTFOLIO HIGHLIGHTS
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-semibold tracking-tight text-black mb-2">
              Building for Tomorrow.
            </h2>
          </div>
          
          {/* Quick interactive Category Toggles */}
          <div className="flex flex-wrap gap-3 md:gap-4 font-sans text-xs font-bold uppercase tracking-widest">
            {(['All', 'Real Estate', 'Private Lending', 'MSP/Technology'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 border-b-2 cursor-pointer transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'border-black text-black' 
                    : 'border-transparent text-neutral-400 hover:text-black hover:border-neutral-200'
                }`}
              >
                {filter === 'All' ? 'View All Assets' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer block"
              >
                {/* Visual Card Wrapper */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200 mb-6 shadow-sm border border-neutral-200/50">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-102 group-hover:grayscale-0 group-hover:scale-103 transition-all duration-700 ease-in-out select-none"
                  />
                  {/* Subtle hover state call attention */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-8 py-4 bg-white text-black font-sans text-xs font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                      View Asset Details
                    </span>
                  </div>
                </div>

                {/* Info block */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-sans text-[10px] font-bold text-neutral-400 uppercase tracking-[0.25em]">
                    {project.location} | {project.category}
                  </span>
                </div>
                <h3 className="font-sans text-xl md:text-2xl font-semibold text-black tracking-tight group-hover:text-neutral-700 transition-colors">
                  {project.title}
                </h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Sheet for Project Details */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative bg-white text-black max-w-3xl w-full rounded-lg overflow-hidden shadow-2xl z-10 border border-neutral-100"
              >
                {/* Visual Banner */}
                <div className="aspect-[16/9] relative bg-neutral-900">
                  <img 
                    src={selectedProject.imageUrl} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover filter brightness-90 select-none"
                  />
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/70 hover:bg-black text-white hover:text-white transition-all cursor-pointer rounded-full"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-0 left-0 p-8 text-white bg-gradient-to-t from-black to-transparent w-full">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-[10px] font-sans font-bold tracking-[0.2em] uppercase mb-2 rounded">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>

                {/* Document details column */}
                <div className="p-8 md:p-10 space-y-6">
                  <div>
                    <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
                      ASSET OVERVIEW
                    </h4>
                    <p className="font-serif text-neutral-600 leading-relaxed font-light text-md md:text-lg">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 border-t border-neutral-100 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-neutral-100 text-neutral-800 rounded">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-sans text-[10px] text-neutral-400 font-bold uppercase tracking-wider">GEOGRAPHY</p>
                        <p className="font-sans text-sm font-semibold text-black">{selectedProject.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-neutral-100 text-neutral-800 rounded">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-sans text-[10px] text-neutral-400 font-bold uppercase tracking-wider">SECTOR SPECIFICATION</p>
                        <p className="font-sans text-sm font-semibold text-black">{selectedProject.category}</p>
                      </div>
                    </div>
                  </div>

                  {/* Operational Footer action */}
                  <div className="flex justify-end pt-4">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-3 bg-neutral-900 hover:bg-black text-white font-sans text-xs font-bold uppercase tracking-widest transition-all cursor-pointer rounded"
                    >
                      Acknowledge &amp; Return
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
