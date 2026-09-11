import { Accordion } from '@/components/ui/Accordion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { faq } from '@/content/faq';
import { COMPANY } from '@/lib/company';

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-white py-16 md:py-24 lg:py-32">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
            <SectionHeading id="faq-title" eyebrow={faq.eyebrow} title={faq.title} />
            <div className="mt-8 hidden border-l-2 border-lime pl-5 lg:block">
              <p className="text-16 font-semibold">{faq.askTitle}</p>
              <p className="mt-1 text-16 text-ink-70">{faq.askText}</p>
              <a href={COMPANY.phone.href} className="tnum mt-3 inline-block text-24 font-semibold hover:text-forest">
                {COMPANY.phone.display}
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8">
          <Accordion name="faq" items={faq.items} />
        </div>
      </Container>
    </section>
  );
}
