import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { InstagramIcon, MapPinIcon, WhatsAppIcon } from '@/components/ui/Icons';
import { Wordmark } from '@/components/ui/Wordmark';
import { footer } from '@/content/site';
import { ui } from '@/content/ui';
import { COMPANY } from '@/lib/company';

export function Footer() {
  return (
    <footer className="bg-forest text-forest-ink">
      <Container className="grid gap-14 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <Wordmark />
          <p className="mt-6 max-w-[26rem] text-16">{footer.tagline}</p>

          <ul className="mt-10 space-y-4 text-16">
            <li>
              <a href={COMPANY.phone.href} className="tnum text-24 font-semibold text-white hover:text-lime">
                {COMPANY.phone.display}
              </a>
            </li>
            <li>
              <a
                href={COMPANY.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 hover:text-white"
              >
                <WhatsAppIcon /> {COMPANY.whatsapp.display}
              </a>
            </li>
            <li>
              <a
                href={COMPANY.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 hover:text-white"
              >
                <InstagramIcon /> {COMPANY.instagram.display}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MapPinIcon className="mt-0.5 shrink-0" />
              <span>{COMPANY.address.full}</span>
            </li>
          </ul>
        </div>

        <nav aria-label={ui.menu.footer} className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-7">
          {footer.columns.map((column) => (
            <div key={column.title}>
              <p className="text-14 font-medium text-white">{column.title}</p>
              <ul className="mt-5 space-y-3 text-16">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </Container>

      <Container>
        <p className="border-t border-forest-line py-6 text-14">{footer.legal}</p>
      </Container>
    </footer>
  );
}
