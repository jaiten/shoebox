/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, EthosItem } from './types';
import heroImage from './assets/hero-real-assets.png';
import aboutImage from './assets/about-boardroom.png';
import residentialDevelopmentImage from './assets/residential-development.png';
import landDevelopmentImage from './assets/land-development.png';
import deltaTownhomeImage from './assets/delta-townhome-community.png';

export const HERO_IMAGE = heroImage;

export const ABOUT_IMAGE = aboutImage;

export const REAL_ESTATE_IMAGE = residentialDevelopmentImage;

export const PROJECTS_DATA: Project[] = [
  {
    id: 'north-delta-development',
    title: 'North Delta Development',
    subtitle: 'Townhome Community | Delta, BC',
    category: 'Residential Development',
    description: 'Multi-unit, spacious townhouses in a highly desirable, family-oriented neighbourhood, close to schools, shopping, and highway infrastructure. Modern, sustainable design with efficient layouts and excellent transit accessibility, built for high-density housing with long-term capital appreciation.',
    imageUrl: deltaTownhomeImage,
    location: 'Delta, BC',
    highlights: [
      'Multi-unit, spacious townhouses',
      'Family-oriented neighbourhood',
      'Close to schools, shopping, and highway infrastructure',
      'Modern, sustainable design with efficient layouts',
      'Exceptional transit accessibility',
      'Built for long-term capital appreciation',
    ],
    interestTitle: 'Interested in this project?',
    interestText: 'Register your interest to receive updates as the project progresses.',
    disclaimer: 'Conceptual project information. Details are subject to change pending final approvals.',
  },
  {
    id: 'victoria-subdivision',
    title: 'Victoria Subdivision',
    subtitle: 'Estate Lot Development | Greater Victoria, BC',
    category: 'Land Development',
    description: 'A rural-style subdivision of multi-acre, single-family building lots with view potential, offering easy highway access and close proximity to town centres.',
    imageUrl: landDevelopmentImage,
    location: 'Greater Victoria, BC',
    highlights: [
      'Multi-acre, single-family building lots',
      'View potential',
      'Easy highway access',
      'Close proximity to town centres',
    ],
    interestTitle: 'Interested in this project?',
    interestText: 'Register your interest to receive updates as the subdivision progresses.',
    disclaimer: 'Project details are subject to final subdivision approval and may change.',
  },
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
    description: 'We back practical opportunities where hands-on experience and involvement can unlock real growth.'
  }
];
