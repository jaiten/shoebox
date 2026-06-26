/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ActiveMandates from './components/ActiveMandates';
import BentoFocus from './components/BentoFocus';
import Portfolio from './components/Portfolio';
import Ethos from './components/Ethos';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  // Global hook targeting opportunity selector sync
  const [selectedOpportunityType, setSelectedOpportunityType] = useState<string | null>(null);

  const handleScrollToContact = (sectorType?: string) => {
    if (sectorType) {
      setSelectedOpportunityType(sectorType);
    }

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const topOffset = 96; // Offset for headerNav
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - topOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const topOffset = 96;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1b1b1b] font-sans antialiased overflow-x-hidden selection:bg-black selection:text-white">
      {/* Top Fixed Header Nav Bar */}
      <Header onPartnerClick={() => handleScrollToContact()} />

      <main>
        {/* Parallax Hero Board */}
        <Hero 
          onLearnMoreClick={handleScrollToProjects} 
          onContactClick={() => handleScrollToContact()} 
        />

        {/* Active Mandates — prominent callout strip */}
        <ActiveMandates onContactClick={(type) => handleScrollToContact(type)} />

        {/* Foundation Desk Overview */}
        <About />

        {/* Strategic Focus Bento Grid Dashboard */}
        <BentoFocus onSelectOpportunityType={(type) => handleScrollToContact(type)} />

        {/* Real Asset Highlights Section with Detail Modals */}
        <Portfolio />

        {/* Core Principles contrasting workspace */}
        <Ethos />

        {/* Interactive Opportunity Submission Sheet */}
        <ContactForm 
          selectedType={selectedOpportunityType} 
          onClearType={() => setSelectedOpportunityType(null)} 
        />
      </main>

      {/* Structured Legal Foot Segment */}
      <Footer onContactClick={() => handleScrollToContact()} />
    </div>
  );
}
