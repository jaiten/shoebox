import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import type { InquiryInput } from '../types';

type OpportunityType = InquiryInput['opportunityType'];
const options: { value: OpportunityType; label: string }[] = [
  { value: 'MSP/Technology', label: 'Sell Your MSP / MSSP' },
  { value: 'Real Estate', label: 'Real Estate Development Partnership' },
  { value: 'Private Lending', label: 'Short-Term Real Estate Financing' },
  { value: 'Other Investment', label: 'Venture Capital / Investment Partnership' },
];

interface OpportunitySelectProps {
  value: OpportunityType;
  onChange: (value: OpportunityType) => void;
  disabled?: boolean;
}

export default function OpportunitySelect({ value, onChange, disabled = false }: OpportunitySelectProps) {
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const search = useRef({ text: '', time: 0 });
  const [open, setOpen] = useState(false);
  const selected = Math.max(0, options.findIndex((option) => option.value === value));
  const [active, setActive] = useState(selected);

  useEffect(() => {
    setActive(selected);
  }, [selected]);

  useEffect(() => {
    if (disabled) setOpen(false);
  }, [disabled]);

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', dismiss);
    return () => document.removeEventListener('pointerdown', dismiss);
  }, [open]);

  useEffect(() => {
    if (open) document.getElementById(`${id}-option-${active}`)?.scrollIntoView({ block: 'nearest' });
  }, [active, open, id]);

  const choose = (index: number) => {
    onChange(options[index].value);
    setOpen(false);
    trigger.current?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Tab') { setOpen(false); return; }
    if (event.key === 'Escape') {
      if (open) { event.preventDefault(); event.stopPropagation(); setOpen(false); }
      return;
    }
    if (['ArrowDown', 'ArrowUp', 'Home', 'End', 'Enter', ' '].includes(event.key)) {
      event.preventDefault();
      if (event.key === 'Enter' || event.key === ' ') {
        if (open) choose(active);
        else { setActive(selected); setOpen(true); }
      } else {
        setOpen(true);
        if (event.key === 'Home') setActive(0);
        else if (event.key === 'End') setActive(options.length - 1);
        else if (!open) setActive(selected);
        else setActive((index) => (index + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length);
      }
      return;
    }
    if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      const now = Date.now();
      search.current = { text: (now - search.current.time < 600 ? search.current.text : '') + event.key.toLowerCase(), time: now };
      const match = options.findIndex((option) => option.label.toLowerCase().startsWith(search.current.text));
      if (match >= 0) { setActive(match); setOpen(true); }
    }
  };

  return (
    <div ref={root} className="relative min-w-0" onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
    }}>
      <label id={`${id}-label`} htmlFor={`${id}-trigger`} className="font-sans text-[10px] font-bold uppercase tracking-wider mb-2 block text-[#1a3929]/60">
        How Can We Help?
      </label>
      <input type="hidden" name="opportunityType" value={value} />
      <button
        ref={trigger}
        id={`${id}-trigger`}
        type="button"
        role="combobox"
        aria-labelledby={`${id}-label`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? `${id}-listbox` : undefined}
        aria-activedescendant={open ? `${id}-option-${active}` : undefined}
        disabled={disabled}
        onKeyDown={handleKeyDown}
        onClick={() => { setActive(selected); setOpen(!open); }}
        className={`flex w-full items-center justify-between gap-3 rounded-xl border px-3.5 py-3 text-left font-sans text-[13px] leading-5 text-[#26392d] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-50 ${open ? 'border-[#1a3929]/30 bg-white ring-4 ring-[#1a3929]/5' : 'border-black/10 bg-white/80 hover:bg-white hover:border-black/20'}`}
      >
        <span>{options[selected].label}</span>
        <ChevronDown aria-hidden="true" className={`h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <motion.ul
          id={`${id}-listbox`}
          role="listbox"
          aria-labelledby={`${id}-label`}
          initial={{ opacity: 0, y: -4, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.16 }}
          className="absolute right-0 top-full z-30 mt-2 max-h-64 w-full origin-top overflow-y-auto rounded-2xl border border-black/8 bg-white/95 p-1.5 shadow-[0_12px_36px_-8px_rgba(0,0,0,0.22),0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl"
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              id={`${id}-option-${index}`}
              role="option"
              aria-selected={value === option.value}
              onPointerMove={() => setActive(index)}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => choose(index)}
              className={`flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-3 font-sans text-[13px] leading-5 transition-colors duration-100 ${active === index ? 'bg-[#1a3929] text-white' : 'text-[#26392d]'}`}
            >
              <Check aria-hidden="true" className={`h-3.5 w-3.5 shrink-0 ${value === option.value ? 'opacity-100' : 'opacity-0'}`} />
              <span>{option.label}</span>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}
