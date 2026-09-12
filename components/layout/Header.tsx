import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { header, nav } from '@/content/site';
import { ui } from '@/content/ui';
import { COMPANY } from '@/lib/company';
import { MobileMenu } from './MobileMenu';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <Container className="flex h-(--header-h) items-center justify-between gap-6">
        {/* Растровый логотип — только здесь, на белом. На тёмных фонах — Wordmark. */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.webp"
            alt={header.logoAlt}
            width={400}
            height={164}
            priority
            unoptimized
            className="h-10 w-auto lg:h-12"
          />
        </Link>

        <nav aria-label={ui.menu.main} className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-16 text-ink-70 transition-colors hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <a
            href={COMPANY.phone.href}
            className="tnum hidden text-16 font-semibold whitespace-nowrap hover:text-forest md:block"
          >
            {COMPANY.phone.display}
          </a>
          <span className="hidden md:block">
            <Button href={header.ctaHref}>{header.cta}</Button>
          </span>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
