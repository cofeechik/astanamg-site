import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ArrowRightIcon, ArrowUpRightIcon } from '@/components/ui/Icons';
import { Media } from '@/components/ui/Media';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { catalog, requestHref, type CatalogItem } from '@/content/catalog';
import { cn } from '@/lib/cn';

/** Крупная карточка основного спроса. Первая растягивается на две строки сетки. */
function FeaturedCard({ item, lead }: { item: CatalogItem; lead: boolean }) {
  return (
    <Link href={requestHref(item.id)} className="group flex h-full flex-col overflow-hidden rounded-sm bg-white">
      <Media
        src={item.image}
        alt={item.alt}
        position={item.position}
        ratio={lead ? 'aspect-[4/3] lg:aspect-auto' : 'aspect-[4/3] lg:aspect-[16/10]'}
        sizes={lead ? '(min-width: 1024px) 700px, 100vw' : '(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw'}
        className={cn('rounded-none', lead && 'lg:min-h-[26rem] lg:flex-1')}
      />
      <div className="flex items-end justify-between gap-4 p-5 lg:p-6">
        <div>
          <h3 className={lead ? 'text-24 lg:text-32' : 'text-24'}>{item.title}</h3>
          <p className="mt-1.5 text-14 text-ink-70 md:text-16">{item.note}</p>
        </div>
        <span
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-sm border border-line-strong transition-colors group-hover:border-lime group-hover:bg-lime"
        >
          <ArrowUpRightIcon size={18} />
        </span>
      </div>
    </Link>
  );
}

/** Компактная строка: миниатюра 3:2, название, короткая подпись. */
function CompactRow({ item }: { item: CatalogItem }) {
  return (
    <Link href={requestHref(item.id)} className="group flex items-center gap-4 py-4 md:gap-6">
      <Media src={item.image} alt={item.alt} ratio="aspect-[3/2]" sizes="160px" className="w-28 shrink-0 md:w-40" />
      <div className="min-w-0 flex-1">
        <h4 className="text-18 font-semibold md:text-24">{item.title}</h4>
        <p className="mt-1 text-14 text-ink-70 md:text-16">{item.note}</p>
      </div>
      <ArrowRightIcon className="shrink-0 text-ink-50 transition-colors group-hover:text-ink" />
    </Link>
  );
}

export function Catalog() {
  return (
    <section id="catalog" aria-labelledby="catalog-title" className="bg-sand py-16 md:py-24 lg:py-32">
      <Container>
        <SectionHeading id="catalog-title" eyebrow={catalog.eyebrow} title={catalog.title} lead={catalog.lead} />

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:grid-rows-2 lg:gap-6">
          {catalog.featured.map((item, i) => (
            <li key={item.id} className={i === 0 ? 'md:col-span-2 lg:col-span-7 lg:row-span-2' : 'lg:col-span-5'}>
              <FeaturedCard item={item} lead={i === 0} />
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-x-12">
          {catalog.groups.map((group) => (
            <div key={group.title}>
              <h3 className="flex items-center gap-3 text-14 font-medium text-ink-70">
                <span aria-hidden="true" className="h-0.5 w-5 bg-wood" />
                {group.title}
              </h3>
              <ul className="mt-4 border-t border-line-strong">
                {group.items.map((item) => (
                  <li key={item.id} className="border-b border-line-strong">
                    <CompactRow item={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
