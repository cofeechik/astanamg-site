import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  action?: ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
};

/** Заголовок секции: метка с лаймовой чертой, H2, подводка и опциональное действие справа. */
export function SectionHeading({ id, eyebrow, title, lead, action, tone = 'light', className }: Props) {
  const dark = tone === 'dark';
  return (
    <div className={cn('flex flex-col gap-8 md:flex-row md:items-end md:justify-between', className)}>
      <div className="max-w-[46rem]">
        <p className={cn('flex items-center gap-3 text-14 font-medium', dark ? 'text-forest-ink' : 'text-ink-70')}>
          <span aria-hidden="true" className="h-0.5 w-8 bg-lime" />
          {eyebrow}
        </p>
        <h2 id={id} className={cn('mt-4 text-32 md:text-48', dark && 'text-white')}>
          {title}
        </h2>
        {lead ? <p className={cn('mt-5 text-16 md:text-18', dark ? 'text-forest-ink' : 'text-ink-70')}>{lead}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
