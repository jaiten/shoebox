/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, EthosItem } from './types';
import heroImage from './assets/hero-real-assets.png';
import aboutImage from './assets/about-boardroom.png';
import residentialDevelopmentImage from './assets/residential-development.png';
import landDevelopmentImage from './assets/land-development.png';
import creditTechnologyImage from './assets/credit-technology.png';
import deltaTownhomeImage from './assets/delta-townhome-community.png';

export const HERO_IMAGE = heroImage;

export const ABOUT_IMAGE = aboutImage;

export const REAL_ESTATE_IMAGE = residentialDevelopmentImage;

export const PROJECTS_DATA: Project[] = [
  {
    id: 'delta-townhome-community',
    title: 'Delta Townhome Community',
    subtitle: '65 Contemporary Townhomes | Delta, BC',
    category: 'Residential Development',
    description: 'Shoebox Investments is a proud investment partner in a planned 65-unit townhouse community in Delta. Designed for modern family living, the development features spacious homes ranging from approximately 1,100 to 1,900 sq. ft., contemporary architecture, underground parking, and landscaped amenity spaces.',
    imageUrl: deltaTownhomeImage,
    location: 'Delta, BC',
    highlights: [
      '65 contemporary townhomes',
      'Approximately 1,100-1,900 sq. ft.',
      'Primarily 3 and 4-bedroom homes',
      'Underground parking',
      'Landscaped community amenities',
      'Family-oriented neighbourhood',
      'Convenient access to schools, parks, shopping, and transit',
    ],
    interestTitle: 'Interested in purchasing a home?',
    interestText: 'Register your interest to receive updates on pricing, floor plans, and availability.',
    disclaimer: 'Conceptual project information. Sizes, layouts, pricing, and completion dates are subject to change pending final approvals.',
  },
  {
    id: 'langford-estate-lots',
    title: 'Langford Estate Lots',
    subtitle: 'Premium Estate Lot Development | Greater Victoria, BC',
    category: 'Land Development',
    description: 'Shoebox Investments is participating in the transformation of a 14-acre property in Langford into a limited collection of premium estate-sized residential lots. Designed for buyers seeking privacy, space, and a custom home lifestyle, these properties offer the opportunity to build in a peaceful natural setting while remaining close to Greater Victoria.',
    imageUrl: landDevelopmentImage,
    location: 'Greater Victoria, BC',
    highlights: [
      'Approximately five premium estate lots',
      'Approximately 2 acres per lot',
      'Rural setting with natural surroundings',
      'Potential water views',
      'Ideal for custom homes',
      'Minutes from Greater Victoria',
    ],
    interestTitle: 'Interested in one of these lots?',
    interestText: 'Register your interest to receive updates as the subdivision progresses.',
    disclaimer: 'Project details are subject to final subdivision approval and may change.',
  },
  {
    id: 'vancouver-private-credit',
    title: 'Private Lending',
    subtitle: '12%+/annum Short-Term Real Estate Financing',
    category: 'Private Lending',
    description: 'Private lending at 12%/annum for short term financing of real estate projects in the Lower Mainland and GTA. Secure first/second mortgage lending solutions for individual and institutional property developers.',
    imageUrl: creditTechnologyImage,
    location: 'Lower Mainland + GTA',
    highlights: [
      'Short-term bridge financing',
      'Secure first and second mortgage structures',
      'Institutional and individual property developers',
    ],
  },
  {
    id: 'tech-partnerships',
    title: 'Tech Partnerships',
    subtitle: 'MSP & MSSP Acquisition Mandate',
    category: 'MSP/Technology',
    description: 'Strategic equity purchases of small and midsize Managed Service Providers and MSSPs in key areas of Vancouver, Toronto, Miami, New York, and Los Angeles. We are searching for MSPs from $500K to $1.5M in ARR to acquire.',
    imageUrl: creditTechnologyImage,
    location: 'North America',
    highlights: [
      'Target ARR range of $500K to $1.5M',
      'Predictive cybersecurity services',
      'AI services and support services',
    ],
  }
];

export const ETHOS_DATA: EthosItem[] = [
  {
    id: 'ethos-1',
    number: '01',
    title: 'Long-term relationships',
    description: 'We invest in people as much as projects. Our partnerships are built for decades, not fiscal quarters.'
  },
  {
    id: 'ethos-2',
    number: '02',
    title: 'Disciplined execution',
    description: 'Meticulous attention to detail and rigorous risk management define every move we make.'
  },
  {
    id: 'ethos-3',
    number: '03',
    title: 'Strategic growth',
    description: 'We identify asymmetric opportunities where strategic management can unlock exponential value.'
  }
];

export const BENTO_ELEMENTS = {
  aboutDescription: [
    'Shoebox Investments was built on a foundation of entrepreneurial experience and a meticulous approach to capital preservation. We don\'t just invest; we architect opportunities.',
    'Our philosophy is rooted in long-term thinking, prioritizing sustainable growth and structural integrity over transient market trends. Every partnership we enter is a commitment to shared excellence.'
  ],
  sections: {
    realEstate: {
      tag: 'Real Estate Partnerships',
      title: 'Real Estate Partnerships',
      desc: 'Land assemblies, subdivisions, and strategic joint ventures across growing North American markets.'
    },
    privateLending: {
      title: 'Private Lending',
      desc: 'Specialized bridge financing and first/second mortgage lending solutions for complex capital needs.',
      linkText: 'Structured Credit'
    },
    techMsp: {
      title: 'Tech & MSP',
      desc: 'Acquiring and scaling Managed Service Providers in major hubs: Vancouver, Toronto, and Miami.',
      linkText: 'Market Focus'
    },
    ventureCapital: {
      title: 'Venture Capital',
      desc: 'Strategic early-stage investments in AI, SaaS, and Automation platforms that redefine productivity and industrial scale.',
      tags: ['AI/ML', 'SaaS', 'Automation', 'Fintech']
    }
  }
};
