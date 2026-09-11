import { getImageProps } from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { WhatsAppIcon } from '@/components/ui/Icons';
import { hero } from '@/content/home';

/** Арт-дирекшн через getImageProps + <picture>: на мобильном кадр 4:5, с планшета — 16:9. */
function HeroImage() {
  const common = { alt: hero.image.alt, priority: true, sizes: '100vw' };
  const desktop = getImageProps({ ...common, ...hero.image.desktop }).props;
  const mobile = getImageProps({ ...common, ...hero.image.mobile }).props;

  return (
    <picture>
      <source
        media="(min-width: 768px)"
        srcSet={desktop.srcSet ?? desktop.src}
        width={desktop.width}
        height={desktop.height}
      />
      {/* eslint-disable-next-line @next/next/no-img-element -- <picture> собирается из getImageProps */}
      {/* getImageProps с priority не проставляет fetchpriority — задаём явно, это LCP-кадр. */}
      <img {...mobile} fetchPriority="high" loading="eager" className="block aspect-[4/5] w-full object-cover md:aspect-[16/9] lg:max-h-[46rem]" />
    </picture>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <Container className="pt-10 pb-10 md:pt-16 lg:pt-24 lg:pb-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <h1 id="hero-title" className="text-48 lg:col-span-7 lg:text-72">
            {hero.title}
          </h1>
          <div className="lg:col-span-5">
            <p className="text-18 text-ink-70">{hero.lead}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2">
              <Button href={hero.primaryCta.href} size="lg" className="w-full sm:w-auto">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.whatsapp.href} variant="link">
                <WhatsAppIcon />
                {hero.whatsapp.label}
              </Button>
            </div>
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-line pt-5 text-14 text-ink-70 md:text-16 lg:mt-16 lg:grid-cols-4">
          {hero.facts.map((fact) => (
            <li key={fact} className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 bg-lime" />
              {fact}
            </li>
          ))}
        </ul>
      </Container>

      <HeroImage />
    </section>
  );
}
