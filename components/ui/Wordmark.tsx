import { cn } from '@/lib/cn';

/**
 * Текстовый локап для тёмных фонов. Растровый логотип (градиент, тень, белая обводка)
 * на forest разваливается, а инверсной версии у клиента нет — поэтому набор на Onest.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex flex-col text-forest-ink', className)} aria-label="Astana Mebel Group">
      <span aria-hidden="true" className="text-48 leading-none font-semibold text-white">
        AMG
      </span>
      <span aria-hidden="true" className="mt-2.5 text-14 leading-none font-medium tracking-[0.15em]">
        ASTANA MEBEL GROUP
      </span>
    </span>
  );
}
