import { Container } from '@/components/ui/Container';
import { Media } from '@/components/ui/Media';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Wordmark } from '@/components/ui/Wordmark';
import { production } from '@/content/production';
import { ui } from '@/content/ui';

export function Production() {
  return (
    <section id="production" aria-labelledby="production-title" className="bg-forest py-16 text-forest-ink md:py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            {/* На forest — только текстовый локап, растровый логотип здесь разваливается. */}
            <Wordmark className="mb-12" />
            <SectionHeading
              tone="dark"
              id="production-title"
              eyebrow={production.eyebrow}
              title={production.title}
              lead={production.lead}
            />
            <dl className="mt-10 grid grid-cols-2 border-t border-forest-line">
              {production.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col-reverse justify-end border-b border-forest-line py-5 odd:border-r odd:pr-4 even:pl-5"
                >
                  <dt className="mt-1 text-14">{stat.label}</dt>
                  <dd className="text-24 font-semibold text-white md:text-32">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid grid-cols-2 gap-3 self-start lg:col-span-7 lg:gap-4">
            {production.photos.map((photo) => (
              <Media
                key={photo.alt}
                src={photo.src}
                alt={photo.src ? photo.alt : `${ui.placeholder} ${photo.alt.toLowerCase()}`}
                ratio="aspect-[4/3]"
                tone="dark"
                placeholderLabel={production.photoPlaceholder}
                sizes="(min-width: 1024px) 340px, 50vw"
              />
            ))}
          </div>
        </div>

        <ul className="mt-14 grid gap-10 border-t border-forest-line pt-10 md:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          {production.materials.map((item) => (
            <li key={item.title}>
              <p className="text-14">{item.title}</p>
              <p className="mt-2 text-24 font-semibold text-white">{item.brands}</p>
              <p className="mt-3 text-16">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
