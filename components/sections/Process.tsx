import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { process } from '@/content/process';

/**
 * Линия времени: на десктопе горизонтальная, на мобильном — вертикальная слева.
 * Узлы квадратные — в системе нет скруглений больше 4px.
 */
export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        <SectionHeading id="process-title" eyebrow={process.eyebrow} title={process.title} />

        <ol className="relative mt-12 grid gap-10 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          <span
            aria-hidden="true"
            className="absolute top-3 bottom-3 left-3 w-px bg-line-strong lg:top-3 lg:right-0 lg:bottom-auto lg:left-3 lg:h-px lg:w-auto"
          />
          {process.steps.map((step, i) => (
            <li key={step.title} className="relative pl-14 lg:pt-14 lg:pl-0">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 flex size-6 items-center justify-center rounded-sm border border-ink bg-white"
              >
                <span className="size-2 bg-lime" />
              </span>
              <p className="tnum text-14 text-ink-50">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-2 text-24">{step.title}</h3>
              <p className="mt-3 text-16 text-ink-70">{step.text}</p>
              <p className="mt-5 inline-block border-b-2 border-lime pb-1 text-14 font-semibold">{step.tag}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
