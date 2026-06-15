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

export const HERO_IMAGE = heroImage;

export const ABOUT_IMAGE = aboutImage;

export const REAL_ESTATE_IMAGE = residentialDevelopmentImage;

export const PROJECTS_DATA: Project[] = [
  {
    id: 'north-delta',
    title: 'North Delta Development Project',
    category: 'Residential Development',
    description: 'A premium mid-rise multi-family residential building in a highly desirable urban growth center. Features modern sustainable amenities, highly efficient layout designs, and exceptional transit accessibility. Developed to provide high-density housing with long-term capital appreciation.',
    imageUrl: residentialDevelopmentImage,
    location: 'Canada'
  },
  {
    id: 'victoria-subdivision',
    title: 'Victoria Subdivision Project',
    category: 'Land Development',
    description: 'A master-planned residential subdivision consisting of single-family building lots. The project utilizes structured civil designs, pristine green setbacks, and rigorous soil/land remediation techniques to secure pristine value. Fully pre-zoned and entitled to bypass market volatility cycles.',
    imageUrl: landDevelopmentImage,
    location: 'Canada'
  },
  {
    id: 'vancouver-private-credit',
    title: 'Metro Vancouver Mezzanine Credit',
    category: 'Private Lending',
    description: 'Structured junior bridge facility for a commercial mixed-use retail redevelopment project in Vancouver\'s Broadway expansion corridor. Provides strong risk-adjusted returns backed by secondary collateral guarantees and robust developer equity.',
    imageUrl: creditTechnologyImage,
    location: 'Canada'
  },
  {
    id: 'toronto-msp-rollup',
    title: 'Ontario Enterprise Tech Partners II',
    category: 'MSP/Technology',
    description: 'Strategic equity injection supporting the consolidation and organic operational expansion of two premium Managed Service Providers. Service deliveries include predictive cybersecurity compliance, multicloud provisioning, and automated data pipelines.',
    imageUrl: creditTechnologyImage,
    location: 'Canada'
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
