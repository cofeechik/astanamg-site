'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { ArrowRightIcon } from '@/components/ui/Icons';
import { ui } from '@/content/ui';

/**
 * Горизонтальная лента. Левый край выровнен по контейнеру, правый уходит за экран.
 * На мобильном — свайп со snap, с планшета — ещё и стрелки.
 */
export function Rail({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      setEdge({
        start: el.scrollLeft <= 4,
        end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
      });
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector('li');
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const arrow =
    'flex size-12 items-center justify-center rounded-sm border border-line-strong transition-colors hover:border-ink disabled:pointer-events-none disabled:opacity-35';

  return (
    <div>
      <div
        ref={ref}
        role="region"
        aria-label={ui.rail.region}
        tabIndex={0}
        className="scrollbar-none snap-x snap-mandatory scroll-pl-6 overflow-x-auto px-6 lg:scroll-pl-[max(4rem,calc((100%-80rem)/2))] lg:px-[max(4rem,calc((100%-80rem)/2))]"
      >
        <ul className="flex gap-4 after:block after:w-px after:shrink-0 lg:gap-6">{children}</ul>
      </div>
      <Container className="mt-8 hidden justify-end gap-2 md:flex">
        <button type="button" aria-label={ui.rail.prev} disabled={edge.start} onClick={() => scroll(-1)} className={arrow}>
          <ArrowRightIcon className="rotate-180" />
        </button>
        <button type="button" aria-label={ui.rail.next} disabled={edge.end} onClick={() => scroll(1)} className={arrow}>
          <ArrowRightIcon />
        </button>
      </Container>
    </div>
  );
}
