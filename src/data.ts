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
    title: 'North Delta Townhomes',
    subtitle: '65 Contemporary Townhomes | North Delta, BC',
    category: 'Residential Development',
    description: 'Shoebox Investments is an investment partner in a planned 65-unit townhouse community in North Delta. Spacious homes in a desirable, family-oriented neighbourhood combine efficient layouts and modern, sustainable amenities with convenient access to schools, shopping, highways, and transit. The development is designed to meet demand for higher-density housing and support long-term capital appreciation.',
    imageUrl: deltaTownhomeImage,
    location: 'North Delta, BC',
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
    title: 'Victoria Subdivision',
    subtitle: 'Estate Lots in Langford | Greater Victoria, BC',
    category: 'Land Development',
    description: 'Shoebox Investments is participating in the subdivision of a 14-acre property in Langford, Greater Victoria, into multi-acre single-family building lots. The rural setting offers space, privacy, and potential views, with easy highway access and nearby town centres.',
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
    title: 'Growth & equity protection',
    description: 'We prioritize sound fundamentals, disciplined risk management, and equity protection over short-lived, highly speculative market bubbles.'
  },
  {
    id: 'ethos-3',
    number: '03',
    title: 'Strategic growth',
    description: 'We work actively with our partners to build shared profitability through practical growth, hands-on involvement, and excellence in execution.'
  }
];
