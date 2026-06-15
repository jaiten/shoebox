/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  location: string;
  link?: string;
}

export interface EthosItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface InquiryInput {
  name: string;
  company: string;
  email: string;
  opportunityType: 'Real Estate' | 'Private Lending' | 'MSP/Technology' | 'Other Investment';
  message: string;
}

export interface InquiryResponse {
  success: boolean;
  message: string;
}
