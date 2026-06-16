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

  const filteredProjects = PROJECTS_DATA.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Real Estate') {
      return project.category.includes('Residential') || project.category.includes('Land');
    }
    return project.category === activeFilter;
  });

  const filters = ['All', 'Real Estate', 'Private Lending', 'MSP/Technology'] as const;

  return (
    <section className="py-24 md:py-32 bg-[#f9f9f9]" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 border-b border-[#1a3929]/12 pb-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1.5px] bg-[#c4a25a]" />
              <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#1a3929]">
                PORTFOLIO HIGHLIGHTS
              </span>
            </div>
            <h2 className="font-sans text-3xl md:text-5xl font-semibold tracking-tight text-[#1a3929] mb-2">
              Building for Tomorrow.
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 md:gap-4 font-sans text-xs font-bold uppercase tracking-widest">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 border-b-2 cursor-pointer transition-all duration-300 ${
                  activeFilter === filter
                    ? 'border-[#c4a25a] text-[#1a3929]'
                    : 'border-transparent text-neutral-400 hover:text-[#1a3929] hover:border-[#1a3929]/20'
                }`}
              >
                {filter === 'All' ? 'View All Assets' : filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer block"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#c4a25a]/10 mb-6 shadow-sm border border-[#1a3929]/8">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover brightness-90 saturate-105 group-hover:scale-[1.07] group-hover:brightness-108 group-hover:saturate-125 group-hover:contrast-105 transition-all duration-700 ease-in-out select-none"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#1a3929]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-8 py-4 bg-[#c4a25a] text-[#1a3929] font-sans text-xs font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                      View Asset Details
                    </span>
                  </div>
                  {/* Gold bar on hover */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#c4a25a] to-[#d4b472] transition-all duration-700 ease-out" />
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <span className="w-3 h-[1px] bg-[#c4a25a]" />
                  <span className="font-sans text-[10px] font-bold text-[#1a3929]/50 uppercase tracking-[0.25em]">
                    {project.location} | {project.category}
                  </span>
                </div>
                <h3 className="font-sans text-xl md:text-2xl font-semibold text-[#1a3929] tracking-tight group-hover:text-[#2d5a40] transition-colors">
                  {project.title}
                </h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-[#0e2116]/88 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative bg-white text-[#1a3929] max-w-3xl w-full overflow-hidden shadow-2xl z-10 border border-[#1a3929]/8"
              >
                {/* Gold-green top bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1a3929] via-[#c4a25a] to-[#1a3929] z-20" />

                {/* Image banner */}
                <div className="aspect-[16/9] relative bg-[#0e2116]">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover filter brightness-85 select-none"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-[#1a3929]/80 hover:bg-[#1a3929] text-white transition-all cursor-pointer rounded-full"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-0 left-0 p-8 text-white bg-gradient-to-t from-[#0e2116] to-transparent w-full">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#c4a25a]/30 backdrop-blur-sm text-[#d4b472] text-[10px] font-sans font-bold tracking-[0.2em] uppercase mb-2">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>

                {/* Details */}
                <div className="p-8 md:p-10 space-y-6">
                  <div>
                    <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#c4a25a] mb-3">
                      ASSET OVERVIEW
                    </h4>
                    <p className="font-serif text-neutral-600 leading-relaxed font-light text-md md:text-lg">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 border-t border-[#1a3929]/10 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-[#f3f9f4] text-[#1a3929] rounded">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-sans text-[10px] text-[#c4a25a] font-bold uppercase tracking-wider">GEOGRAPHY</p>
                        <p className="font-sans text-sm font-semibold text-[#1a3929]">{selectedProject.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-[#f3f9f4] text-[#1a3929] rounded">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-sans text-[10px] text-[#c4a25a] font-bold uppercase tracking-wider">SECTOR SPECIFICATION</p>
                        <p className="font-sans text-sm font-semibold text-[#1a3929]">{selectedProject.category}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="relative overflow-hidden px-6 py-3 bg-[#1a3929] text-white font-sans text-xs font-bold uppercase tracking-widest transition-all cursor-pointer group"
                    >
                      <span className="relative z-10 group-hover:text-[#1a3929] transition-colors duration-300">Acknowledge &amp; Return</span>
                      <span className="absolute inset-0 bg-[#c4a25a] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
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
