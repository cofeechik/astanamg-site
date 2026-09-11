'use client';

import Link from 'next/link';
import { useEffect, useId, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { ArrowRightIcon, CloseIcon, MenuIcon } from '@/components/ui/Icons';
import { header, nav } from '@/content/site';
import { ui } from '@/content/ui';
import { COMPANY } from '@/lib/company';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? ui.menu.close : ui.menu.open}
        onClick={() => setOpen((v) => !v)}
        className="-mr-2 flex size-11 items-center justify-center rounded-sm"
      >
        {open ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="fixed inset-x-0 top-(--header-h) bottom-0 z-50 overflow-y-auto border-t border-line bg-white"
      >
        <Container className="py-6">
          <nav aria-label={ui.menu.mobile}>
            <ul className="border-b border-line">
              {nav.map((item) => (
                <li key={item.href} className="border-t border-line">
                  <Link
                    href={item.href}
                    onClick={close}
                    className="flex items-center justify-between py-4 text-24 font-semibold"
                  >
                    {item.label}
                    <ArrowRightIcon className="text-ink-50" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8 flex flex-col items-start gap-4">
            <Button href={header.ctaHref} size="lg" onClick={close} className="w-full">
              {header.cta}
            </Button>
            <a href={COMPANY.phone.href} className="tnum text-18 font-semibold">
              {COMPANY.phone.display}
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
}
