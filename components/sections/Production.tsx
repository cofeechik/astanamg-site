import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Wordmark } from '@/components/ui/Wordmark';
import { production } from '@/content/production';

export function Production() {
  return (
    <section
      id="production"
      aria-labelledby="production-title"
      className="bg-forest py-16 text-forest-ink md:py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            {/* На forest — только текстовый локап: растровый логотип здесь разваливается. */}
            <Wordmark className="mb-12" />
            <SectionHeading
              tone="dark"
              id="production-title"
              eyebrow={production.eyebrow}
              title={production.title}
              lead={production.lead}
            />
          </div>

          <ul className="grid gap-10 lg:col-span-7 lg:grid-cols-3 lg:gap-8">
            {production.materials.map((item) => (
              <li key={item.title} className="border-t border-forest-line pt-5">
                <p className="text-14">{item.title}</p>
                <p className="mt-2 text-18 font-semibold text-white md:text-24">{item.brands}</p>
                <p className="mt-3 text-16">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/*
          TODO: фото цеха. Когда клиент пришлёт снимки — вернуть сетку 2×2 справа от текста:
          <div className="grid grid-cols-2 gap-4">
            {photos.map((p) => (
              <Media key={p.alt} src={p.src} alt={p.alt} ratio="aspect-[4/3]" tone="dark" sizes="(min-width: 1024px) 340px, 50vw" />
            ))}
          </div>
          Заглушки убраны намеренно: четыре пустых штрихованных прямоугольника
          выглядели хуже, чем их отсутствие.
        */}

        <dl className="mt-14 grid grid-cols-2 gap-y-8 border-t border-forest-line pt-10 md:grid-cols-4 lg:mt-20">
          {production.figures.map((figure) => (
            <div key={figure.label} className="flex flex-col-reverse justify-end pr-4">
              <dt className="mt-1 text-14">{figure.label}</dt>
              <dd className="text-24 font-semibold text-white md:text-32">{figure.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
