import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { pricing, tiers } from '@/content/pricing';
import { ui } from '@/content/ui';
import { formatNumber } from '@/lib/format';

const maxPrice = Math.max(...tiers.map((t) => t.priceFrom));

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="bg-sand py-16 md:py-24 lg:py-32">
      <Container>
        <SectionHeading id="pricing-title" eyebrow={pricing.eyebrow} title={pricing.title} lead={pricing.lead} />

        {/* Лестница цен, а не три одинаковые карточки: колонки через тонкие линии, шкала ∝ цене. */}
        <ol className="mt-12 grid border-t-2 border-ink lg:mt-16 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <li
              key={t.id}
              className="border-b border-line-strong py-8 lg:border-b-0 lg:border-l lg:px-8 lg:pb-2 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
            >
              <p className="tnum text-14 text-ink-50">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-2 text-24">{t.name}</h3>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-18 text-ink-70">{ui.price.from}</span>
                <span className="tnum text-48 font-semibold">{formatNumber(t.priceFrom)}</span>
                <span className="text-24 font-semibold">₸</span>
              </p>
              <p className="mt-1 text-14 text-ink-70">{pricing.unit}</p>
              <div aria-hidden="true" className="mt-6 h-1.5 bg-line">
                <div className="h-full bg-wood" style={{ width: `${Math.round((t.priceFrom / maxPrice) * 100)}%` }} />
              </div>
              <p className="mt-6 text-16 text-ink-70">{t.summary}</p>
              <ul className="mt-5 space-y-2 text-16">
                {t.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.8em] h-px w-3 shrink-0 bg-ink" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-8 rounded-sm bg-white p-6 md:p-8 lg:mt-16 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="border-l-2 border-lime pl-5 lg:col-span-6">
            <p className="text-18 font-semibold md:text-24">{pricing.disclaimerTitle}</p>
            <p className="mt-2 text-16 text-ink-70">{pricing.disclaimer}</p>
          </div>
          <div className="lg:col-span-4">
            <p className="text-14 font-medium">{pricing.included.title}</p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-14 text-ink-70">
              {pricing.included.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-14 text-ink-70">{pricing.payment}</p>
          </div>
          <div className="lg:col-span-2 lg:justify-self-end">
            <Button href="/#contacts" variant="dark">
              {pricing.cta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
