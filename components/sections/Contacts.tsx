import { Suspense } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { MapPinIcon, WhatsAppIcon } from '@/components/ui/Icons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { contacts } from '@/content/contacts';
import { COMPANY } from '@/lib/company';
import { ContactForm, ContactFormFields } from './ContactForm';

export function Contacts() {
  const { details } = contacts;
  return (
    <section id="contacts" aria-labelledby="contacts-title" className="bg-sand py-16 md:py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading id="contacts-title" eyebrow={contacts.eyebrow} title={contacts.title} lead={contacts.lead} />
          {/* useSearchParams при статическом экспорте требует Suspense; до гидратации — форма без предвыбора. */}
          <Suspense fallback={<ContactFormFields />}>
            <ContactForm />
          </Suspense>
        </div>

        {/* Виджет 2GIS в MVP не ставим — тяжёлый iframe. Вместо карты — адрес и ссылка на маршрут. */}
        <dl className="self-end border-t border-line-strong lg:col-span-5">
          <div className="border-b border-line-strong py-6">
            <dt className="text-14 text-ink-50">{details.phoneLabel}</dt>
            <dd className="mt-2">
              <a href={COMPANY.phone.href} className="tnum text-32 font-semibold hover:text-forest">
                {COMPANY.phone.display}
              </a>
            </dd>
            <dd className="mt-2">
              <Button href={COMPANY.whatsapp.href} variant="link">
                <WhatsAppIcon />
                {details.whatsappLabel}
              </Button>
            </dd>
          </div>
          <div className="border-b border-line-strong py-6">
            <dt className="text-14 text-ink-50">{details.addressLabel}</dt>
            <dd className="mt-2 text-18">
              {COMPANY.address.city}, {COMPANY.address.street}
              <br />
              {COMPANY.address.hint}
            </dd>
            <dd className="mt-5">
              <Button href={COMPANY.address.routeHref} variant="outline">
                <MapPinIcon size={18} />
                {details.routeLabel}
              </Button>
            </dd>
          </div>
          {COMPANY.hours ? (
            <div className="border-b border-line-strong py-6">
              <dt className="text-14 text-ink-50">{details.hoursLabel}</dt>
              <dd className="mt-2 text-18">{COMPANY.hours}</dd>
            </div>
          ) : null}
        </dl>
      </Container>
    </section>
  );
}
