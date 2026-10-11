"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/content/academy";
import { cn } from "@/lib/cn";

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[var(--line)] border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-button-${i}`;
        return (
          <div key={item.q}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-display text-[17px] font-medium sm:text-lg">{item.q}</span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-accent transition-transform duration-300",
                    isOpen && "rotate-45 border-brand"
                  )}
                  aria-hidden
                >
                  <Plus size={16} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="max-w-3xl pb-6 text-[15px] leading-relaxed text-ink-2"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
