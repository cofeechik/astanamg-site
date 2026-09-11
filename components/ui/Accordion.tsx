import type { ReactNode } from 'react';
import { PlusIcon } from './Icons';

type Item = { question: string; answer: ReactNode };

/**
 * Аккордеон на нативном <details>: работает без JS, доступен с клавиатуры,
 * текст ответов индексируется. name — чтобы одновременно был открыт один пункт.
 */
export function Accordion({ items, name }: { items: readonly Item[]; name: string }) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details key={item.question} name={name} className="group border-b border-line">
          <summary className="flex cursor-pointer items-start justify-between gap-6 py-6 text-18 font-semibold hover:text-forest md:text-24">
            <span>{item.question}</span>
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-sm border border-line-strong transition-transform duration-200 group-open:rotate-45 group-open:border-lime group-open:bg-lime">
              <PlusIcon size={18} />
            </span>
          </summary>
          <div className="max-w-[48rem] pr-14 pb-8 text-16 text-ink-70 md:text-18">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
