/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent } from 'react';
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

  useEffect(() => {
    if (selectedType) {
      const optionType = selectedType === 'Venture Capital' ? 'Other Investment' : selectedType;
      setFormData(prev => ({ ...prev, opportunityType: optionType as any }));
    }
  }, [selectedType]);

  const [loading, setLoading] = useState(false);
  const [errorString, setErrorString] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault(): void }) => {
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('The inquiry service is currently offline. Please retry momentarily.');
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
    setFormData({ name: '', company: '', email: '', opportunityType: 'Real Estate', message: '' });
    setSuccessMessage(null);
    setErrorString(null);
    onClearType();
  };

  const inputClass = "w-full bg-transparent border-0 border-b border-neutral-200 focus:border-[#1a3929] focus:ring-0 py-2.5 px-0 font-serif text-sm transition-colors duration-300 outline-none";

  return (
    <section className="py-24 md:py-32 bg-white border-t border-black/5" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-[1.5px] bg-[#c4a25a]" />
                <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#1a3929]">
                  CONTACT
                </span>
              </div>
              <h2 className="font-sans text-3xl md:text-5xl font-semibold tracking-tight text-[#1a3929] mb-8 leading-[1.15]">
                Discuss a Strategic Opportunity.
              </h2>
              <p className="font-serif text-neutral-500 text-sm md:text-base leading-relaxed mb-12 font-light">
                We are always seeking investment opportunities, innovative developers, and syndication partners that align with our long-term preservation-driven philosophy. Complete the opportunity form to initiate a GP review.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-[#1a3929]/10">
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#1a3929]">
                Regional General Partner Offices
              </p>
              <div className="grid grid-cols-1 gap-5 font-serif text-xs text-neutral-500 font-light">
                {[
                  { region: 'WESTERN CANADA', city: 'Vancouver, BC, Canada'      },
                  { region: 'EASTERN CANADA', city: 'Toronto, ON, Canada'        },
                  { region: 'UNITED STATES',  city: 'Miami, FL, United States'   },
                ].map((office) => (
                  <div key={office.region} className="flex items-start gap-3 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c4a25a] mt-1 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <strong className="font-sans font-semibold text-[#1a3929] uppercase tracking-wider block text-[10px] mb-0.5">{office.region}</strong>
                      {office.city}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 md:col-start-6"
          >
            <AnimatePresence mode="wait">
              {!successMessage ? (
                <motion.form
                  key="contact-form-key"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8 bg-[#f3f9f4] p-8 md:p-14 border border-[#1a3929]/10 shadow-sm relative overflow-hidden"
                >
                  {/* Green-to-gold top border */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1a3929] via-[#c4a25a] to-[#1a3929]" />

                  <h3 className="font-sans text-sm font-semibold tracking-widest uppercase text-[#1a3929] border-b border-[#1a3929]/10 pb-3 block">
                    OPPORTUNITY SUBMISSION FORM
                  </h3>

                  {errorString && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-800 flex items-start gap-3 rounded">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
                      <p className="font-serif text-xs leading-relaxed">{errorString}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="font-sans text-[10px] font-bold uppercase tracking-wider mb-2 block text-[#1a3929]/60">
                        Full Name <span className="font-normal">*</span>
                      </label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange}
                        placeholder="John Doe" className={inputClass} required disabled={loading} />
                    </div>
                    <div>
                      <label className="font-sans text-[10px] font-bold uppercase tracking-wider mb-2 block text-[#1a3929]/60">
                        Company / Syndicate
                      </label>
                      <input type="text" name="company" value={formData.company} onChange={handleInputChange}
                        placeholder="Alpha Holdings Inc." className={inputClass} disabled={loading} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="font-sans text-[10px] font-bold uppercase tracking-wider mb-2 block text-[#1a3929]/60">
                        Email Address <span className="font-normal">*</span>
                      </label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange}
                        placeholder="johndoe@email.com" className={inputClass} required disabled={loading} />
                    </div>
                    <div>
                      <label className="font-sans text-[10px] font-bold uppercase tracking-wider mb-2 block text-[#1a3929]/60">
                        Opportunity Sector Focus
                      </label>
                      <select name="opportunityType" value={formData.opportunityType} onChange={handleInputChange}
                        className={`${inputClass} cursor-pointer`} disabled={loading}>
                        <option value="Real Estate">Real Estate Partnerships</option>
                        <option value="Private Lending">Private Lending / Credit</option>
                        <option value="MSP/Technology">MSP / Technology Roll-up</option>
                        <option value="Other Investment">Venture Capital / Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-sans text-[10px] font-bold uppercase tracking-wider mb-2 block text-[#1a3929]/60">
                      Opportunity Description &amp; Proposed Message <span className="font-normal">*</span>
                    </label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange}
                      placeholder="Outline your proposal location, estimated capitalization size, current equity structure, and anticipated cash flow/exit horizons..."
                      rows={4} className={`${inputClass} resize-none`} required disabled={loading} />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="relative overflow-hidden w-full bg-[#1a3929] text-white disabled:bg-neutral-400 disabled:cursor-not-allowed py-5 font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-[#1a3929] transition-colors duration-300">
                      {loading ? <><Loader2 className="w-4 h-4 animate-spin" />SUBMITTING INQUIRY...</> : 'SUBMIT INQUIRY'}
                    </span>
                    {!loading && <span className="absolute inset-0 bg-[#c4a25a] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="submission-success-key"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#1a3929] text-white p-8 md:p-12 border border-[#c4a25a]/20 shadow-xl space-y-8 font-sans relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#c4a25a] via-[#d4b472] to-[#c4a25a]" />
                  <div className="space-y-4 border-b border-white/15 pb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#c4a25a] flex-shrink-0" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#c4a25a]">
                        INQUIRY RECEIVED
                      </span>
                    </div>
                    <p className="font-serif text-white/75 text-sm md:text-base leading-relaxed font-light">
                      {successMessage}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-semibold tracking-wider">
                    <span className="uppercase text-white/60">A member of our team will respond directly.</span>
                    <button
                      onClick={handleResetForm}
                      className="px-6 py-3 border border-[#c4a25a]/50 hover:border-[#c4a25a] hover:bg-[#c4a25a]/10 text-[#c4a25a] font-sans text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer"
                    >
                      FILE ANOTHER INQUIRY
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
