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
      'Primarily 3 & 4-bedroom homes',
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
