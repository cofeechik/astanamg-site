import Image from 'next/image';
import { cn } from '@/lib/cn';

type Props = {
  /** Путь в /public. Если нет — рисуется заглушка с теми же пропорциями. */
  src?: string;
  alt: string;
  /** Класс пропорций, например 'aspect-[4/3]'. Пропорции фиксированы и не зависят от наличия фото. */
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  /** object-position для кадрирования, например 'object-[50%_30%]'. */
  position?: string;
  tone?: 'light' | 'dark';
  placeholderLabel?: string;
  className?: string;
};

export function Media({
  src,
  alt,
  ratio,
  sizes = '100vw',
  priority,
  position,
  tone = 'light',
  placeholderLabel,
  className,
}: Props) {
  if (!src) {
    const dark = tone === 'dark';
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          'placeholder-hatch relative flex items-end overflow-hidden rounded-sm',
          dark ? 'bg-forest-deep [--hatch:var(--color-forest-line)]' : 'bg-sand [--hatch:var(--color-line)]',
          ratio,
          className,
        )}
      >
        {placeholderLabel ? (
          <span className={cn('m-4 text-14', dark ? 'text-forest-ink' : 'text-ink-50')}>{placeholderLabel}</span>
        ) : null}
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden rounded-sm bg-sand', ratio, className)}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn('object-cover', position)} />
    </div>
  );
}
