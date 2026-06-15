/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoUrl from '../assets/shoebox_investments_logo_whitebg.svg';

interface HeaderProps {
  onPartnerClick: () => void;
}

export default function Header({ onPartnerClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);

      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      setScrollProgress(total > 0 ? (y / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Focus',      href: '#focus'      },
    { name: 'Projects',   href: '#projects'   },
    { name: 'Philosophy', href: '#philosophy' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <nav
        className={`fixed top-0 w-full h-24 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-lg shadow-[0_1px_30px_rgba(0,0,0,0.08)] border-b border-black/5'
            : 'bg-white/95 backdrop-blur-md border-b border-black/5'
        }`}
        id="headerNav"
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12 w-full h-full">

          {/* Brand Wordmark */}
          <a
            href="#"
            className="h-16 w-52 md:h-18 md:w-64 flex items-center justify-center overflow-hidden select-none transition-opacity hover:opacity-85"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-label="Shoebox Investments"
          >
            <img
              src={logoUrl}
              alt=""
              className="h-full w-full object-contain scale-[1.85]"
              aria-hidden="true"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="relative group font-sans text-sm font-semibold tracking-wider text-neutral-500 hover:text-black transition-colors duration-300 uppercase cursor-pointer py-1"
              >
                {link.name}
                {/* Gold underline on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c4a25a] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={onPartnerClick}
              className="relative overflow-hidden px-6 py-3 bg-black text-white font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 group cursor-pointer"
            >
              <span className="relative z-10">PARTNER WITH US</span>
              <span className="absolute inset-0 bg-[#c4a25a] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-black p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-24 left-0 w-full bg-white border-b border-black/10 shadow-lg z-40 py-6 px-6"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left py-2 text-neutral-600 font-sans text-md font-semibold tracking-wider hover:text-black transition-colors uppercase"
                  >
                    {link.name}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.06 }}
                  onClick={() => { setIsOpen(false); onPartnerClick(); }}
                  className="w-full text-center py-4 bg-black text-white font-sans text-sm font-bold uppercase tracking-widest hover:bg-[#c4a25a] transition-all mt-2"
                >
                  PARTNER WITH US
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
