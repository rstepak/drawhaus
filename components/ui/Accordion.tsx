'use client';

import { useState } from 'react';

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="border-t border-border">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between py-6 text-left gap-10 group"
            aria-expanded={open === i}
          >
            <span className="text-parchment text-sm leading-relaxed tracking-wide transition-colors group-hover:text-gold">
              {item.question}
            </span>
            <span
              className="text-muted shrink-0 text-xl leading-none mt-0.5 transition-transform duration-300"
              style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
              aria-hidden="true"
            >
              +
            </span>
          </button>

          {/* Animated height via CSS grid trick */}
          <div
            className="grid transition-all duration-300 ease-in-out"
            style={{ gridTemplateRows: open === i ? '1fr' : '0fr' }}
          >
            <div className="min-h-0 overflow-hidden">
              <p className="text-muted text-sm leading-relaxed pb-8 max-w-2xl">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="border-t border-border" />
    </div>
  );
}
