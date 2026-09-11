import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'dark' | 'outline' | 'outline-light' | 'link';
type Size = 'md' | 'lg';

const base =
  'inline-flex shrink-0 items-center justify-center gap-2.5 rounded-sm font-semibold whitespace-nowrap transition-colors duration-150';

const variants: Record<Variant, string> = {
  primary: 'bg-lime text-ink hover:bg-lime-deep',
  dark: 'bg-ink text-white hover:bg-forest',
  outline: 'border border-ink text-ink hover:bg-ink hover:text-white',
  'outline-light': 'border border-forest-line text-white hover:border-forest-ink',
  link: 'text-ink underline decoration-lime decoration-2 underline-offset-[6px] hover:decoration-ink',
};

const sizes: Record<Size, string> = {
  md: 'h-12 px-5 text-16',
  lg: 'h-14 px-7 text-16',
};

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type AsLink = Common & { href: string } & Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'className' | 'children'>;
type AsButton = Common & { href?: undefined } & Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'children'>;

export function Button(props: AsLink | AsButton) {
  const { variant = 'primary', size = 'md', className, children } = props;
  const classes = cn(base, variants[variant], variant === 'link' ? 'h-12 px-0 text-16' : sizes[size], className);

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    // Внутренние ссылки — через Link, внешние (tel:, https:) — обычный <a>.
    if (href.startsWith('/')) {
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }
    const external = href.startsWith('http');
    return (
      <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {children}
      </a>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, type = 'button', ...rest } = props;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
