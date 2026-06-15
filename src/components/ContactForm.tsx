/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { InquiryInput, InquiryResponse } from '../types';

interface ContactFormProps {
  selectedType: string | null;
  onClearType: () => void;
}

export default function ContactForm({ selectedType, onClearType }: ContactFormProps) {
  const [formData, setFormData] = useState<InquiryInput>({
    name: '',
    company: '',
    email: '',
    opportunityType: 'Real Estate',
    message: ''
  });

  // Sync parent selection to local form state
  useEffect(() => {
    if (selectedType) {
      const optionType = selectedType === 'Venture Capital' ? 'Other Investment' : selectedType;
      setFormData(prev => ({
        ...prev,
        opportunityType: optionType as any
      }));
    }
  }, [selectedType]);

  const [loading, setLoading] = useState(false);
  const [errorString, setErrorString] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorString('Please complete the mandatory fields (Name, Email, and Message) to file an opportunity inquiry.');
      return;
    }

    setLoading(true);
    setErrorString(null);
    setSuccessMessage(null);

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('The inquiry service is currently offline. Please retry momentarily.');
      }

      const rawResult = await response.json() as InquiryResponse;
      if (rawResult.success) {
        setSuccessMessage(rawResult.message || 'Inquiry received. Our team will review your submission and follow up directly.');
      } else {
        throw new Error(rawResult.message || 'Inquiry submission encountered an unexpected issue.');
      }
    } catch (err: any) {
      setErrorString(err.message || 'Inquiry submission failed. Please retry momentarily.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      opportunityType: 'Real Estate',
      message: ''
    });
    setSuccessMessage(null);
    setErrorString(null);
    onClearType();
  };

  return (
    <section className="py-24 md:py-32 bg-white border-t border-black/5" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          
          {/* Left Column: Office Information and Prompts */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-neutral-400 mb-6 block">
                CONTACT
              </span>
              <h2 className="font-sans text-3xl md:text-5xl font-semibold tracking-tight text-black mb-8 leading-[1.15]">
                Discuss a Strategic Opportunity.
              </h2>
              <p className="font-serif text-neutral-500 text-sm md:text-base leading-relaxed mb-12 font-light">
                We are always seeking investment opportunities, innovative developers, and syndication partners that align with our long-term preservation-driven philosophy. Complete the opportunity form to initiate a GP review.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-neutral-100">
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-black">
                Regional General Partner Offices
              </p>
              <div className="grid grid-cols-1 gap-4 font-serif text-xs text-neutral-500 font-light">
                <div>
                  <strong className="font-sans font-semibold text-black uppercase tracking-wider block text-[10px] mb-0.5">WESTERN CANADA</strong>
                  Vancouver, BC, Canada
                </div>
                <div>
                  <strong className="font-sans font-semibold text-black uppercase tracking-wider block text-[10px] mb-0.5">EASTERN CANADA</strong>
                  Toronto, ON, Canada
                </div>
                <div>
                  <strong className="font-sans font-semibold text-black uppercase tracking-wider block text-[10px] mb-0.5">UNITED STATES</strong>
                  Miami, FL, United States
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form Workspace */}
          <div className="md:col-span-7 md:col-start-6">
            <AnimatePresence mode="wait">
              {!successMessage ? (
                <motion.form 
                  key="contact-form-key"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8 bg-[#fdfdfd] p-8 md:p-14 border border-neutral-200/60 shadow-sm"
                >
                  <h3 className="font-sans text-sm font-semibold tracking-widest uppercase text-black border-b border-neutral-100 pb-3 block">
                    OPPORTUNITY SUBMISSION FORM
                  </h3>

                  {errorString && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-850 flex items-start gap-3 rounded">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-650" />
                      <p className="font-serif text-xs leading-relaxed">{errorString}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name */}
                    <div className="relative">
                      <label className="font-sans text-[10px] font-bold uppercase tracking-wider mb-2 block text-neutral-400">
                        Full Name <span className="text-neutral-500 font-normal">*</span>
                      </label>
                      <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-transparent border-0 border-b border-neutral-200 focus:border-black focus:ring-0 py-2.5 px-0 font-serif text-sm transition-colors duration-200 outline-none"
                        required
                        disabled={loading}
                      />
                    </div>

                    {/* Company */}
                    <div className="relative">
                      <label className="font-sans text-[10px] font-bold uppercase tracking-wider mb-2 block text-neutral-400">
                        Company / Syndicate
                      </label>
                      <input 
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Alpha Holdings Inc."
                        className="w-full bg-transparent border-0 border-b border-neutral-200 focus:border-black focus:ring-0 py-2.5 px-0 font-serif text-sm transition-colors duration-200 outline-none"
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Email */}
                    <div className="relative">
                      <label className="font-sans text-[10px] font-bold uppercase tracking-wider mb-2 block text-neutral-400">
                        Email Address <span className="text-neutral-500 font-normal">*</span>
                      </label>
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="johndoe@email.com"
                        className="w-full bg-transparent border-0 border-b border-neutral-200 focus:border-black focus:ring-0 py-2.5 px-0 font-serif text-sm transition-colors duration-200 outline-none"
                        required
                        disabled={loading}
                      />
                    </div>

                    {/* Opportunity Type */}
                    <div className="relative">
                      <label className="font-sans text-[10px] font-bold uppercase tracking-wider mb-2 block text-neutral-400">
                        Opportunity Sector Focus
                      </label>
                      <select 
                        name="opportunityType"
                        value={formData.opportunityType}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-0 border-b border-neutral-200 focus:border-black focus:ring-0 py-2.5 px-0 font-serif text-sm cursor-pointer outline-none transition-colors"
                        disabled={loading}
                      >
                        <option value="Real Estate">Real Estate Partnerships</option>
                        <option value="Private Lending">Private Lending / Credit</option>
                        <option value="MSP/Technology">MSP / Technology Roll-up</option>
                        <option value="Other Investment">Venture Capital / Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label className="font-sans text-[10px] font-bold uppercase tracking-wider mb-2 block text-neutral-400">
                      Opportunity Description &amp; Proposed Message <span className="text-neutral-500 font-normal">*</span>
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Outline your proposal location, estimated capitalization size, current equity structure, and anticipated cash flow/exit horizons..."
                      rows={4}
                      className="w-full bg-transparent border-0 border-b border-neutral-200 focus:border-black focus:ring-0 py-2.5 px-0 font-serif text-sm transition-colors duration-200 outline-none resize-none"
                      required
                      disabled={loading}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black text-white hover:bg-neutral-800 disabled:bg-neutral-600 disabled:cursor-not-allowed py-5 font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        SUBMITTING INQUIRY...
                      </>
                    ) : (
                      'SUBMIT INQUIRY'
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="submission-success-key"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-neutral-900 text-white p-8 md:p-12 border border-white/10 shadow-xl space-y-8 font-sans"
                >
                  <div className="space-y-4 border-b border-white/15 pb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-neutral-300 flex-shrink-0" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-neutral-300">
                        INQUIRY RECEIVED
                      </span>
                    </div>
                    <p className="font-serif text-neutral-300 text-sm md:text-base leading-relaxed font-light">
                      {successMessage}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-neutral-400 font-semibold tracking-wider">
                    <span className="uppercase text-neutral-300">
                      A member of our team will respond directly.
                    </span>
                    <button
                      onClick={handleResetForm}
                      className="px-6 py-3 border border-white/20 hover:border-white text-white font-sans text-[10px] font-bold uppercase tracking-widest rounded transition-all cursor-pointer"
                    >
                      FILE ANOTHER INQUIRY
                    </button>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
