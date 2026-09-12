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
        sizes={desktop.sizes}
        width={desktop.width}
        height={desktop.height}
      />
      {/* getImageProps с priority не проставляет fetchpriority — задаём явно, это LCP-кадр. */}
      {/* eslint-disable-next-line @next/next/no-img-element -- <picture> собирается из getImageProps */}
      <img
        {...mobile}
        fetchPriority="high"
        loading="eager"
        className="block aspect-[4/5] w-full object-cover md:aspect-[16/9] lg:max-h-[46rem]"
      />
    </picture>
  );
}

/**
 * Порядок на мобильном: заголовок → строка подзаголовка → фото → кнопки → факты,
 * чтобы фото попадало в первый экран 390×844. На десктопе фото уходит вниз.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="flex flex-col">
      <Container className="order-1 pt-5 pb-4 md:pt-14 md:pb-8 lg:pt-24">
        <div className="grid gap-2 lg:grid-cols-12 lg:items-end lg:gap-16">
          <h1 id="hero-title" className="text-48 lg:col-span-7 lg:text-72">
            {hero.title}
          </h1>
          <p className="text-16 text-ink-70 md:text-18 lg:col-span-5">
            <span className="md:hidden">{hero.leadShort}</span>
            <span className="hidden md:inline">{hero.lead}</span>
          </p>
        </div>
      </Container>

      <div className="order-2 lg:order-3">
        <HeroImage />
      </div>

      <Container className="order-3 pt-5 pb-2 lg:order-2 lg:pt-0 lg:pb-14">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <Button href={hero.primaryCta.href} size="lg" className="w-full sm:w-auto">
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.whatsapp.href} variant="link">
            <WhatsAppIcon />
            {hero.whatsapp.label}
          </Button>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-line pt-5 text-14 text-ink-70 md:text-16 lg:grid-cols-4">
          {hero.facts.map((fact) => (
            <li key={fact} className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 bg-lime" />
              {fact}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
