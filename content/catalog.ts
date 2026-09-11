export type CatalogId =
  | 'kitchens'
  | 'bedrooms'
  | 'wardrobes'
  | 'kids'
  | 'living'
  | 'sofas'
  | 'offices'
  | 'cafe'
  | 'retail';

export type CatalogItem = {
  id: CatalogId;
  title: string;
  /** Как направление называется в поле «Тип мебели» формы заявки. */
  formLabel: string;
  note: string;
  image: string;
  alt: string;
  /** object-position, если главное в кадре не по центру. */
  position?: string;
};

const items = {
  kitchens: {
    id: 'kitchens',
    title: 'Кухни',
    formLabel: 'Кухня',
    note: 'Прямые, угловые, с островом, до потолка',
    image: '/images/catalog/kitchens.webp',
    alt: 'Светлая кухня до потолка с глянцевыми фасадами, встроенной техникой и стеклянной витриной',
  },
  bedrooms: {
    id: 'bedrooms',
    title: 'Спальни',
    formLabel: 'Спальня',
    note: 'Шкаф во всю стену, кровать с мягким изголовьем, тумбы',
    image: '/images/catalog/bedrooms.webp',
    alt: 'Спальня: белый шкаф во всю стену с золотыми молдингами и кровать с изголовьем из бордового велюра',
    position: 'object-[40%_50%]',
  },
  wardrobes: {
    id: 'wardrobes',
    title: 'Шкафы и гардеробные',
    formLabel: 'Шкаф или гардеробная',
    note: 'Купе, распашные, встроенные, в прихожую',
    image: '/images/catalog/wardrobes.webp',
    alt: 'Распашной шкаф до потолка с серыми матовыми фасадами, длинными чёрными ручками и открытым стеллажом под дерево',
  },
  kids: {
    id: 'kids',
    title: 'Детские',
    formLabel: 'Детская',
    note: 'Кровать, шкаф и рабочее место в одном проекте',
    image: '/images/catalog/kids.webp',
    alt: 'Детская: кровать, шкафы и письменный стол в светлом дубе с белыми фасадами',
  },
  living: {
    id: 'living',
    title: 'Гостиные',
    formLabel: 'Гостиная',
    note: 'Стенки под ТВ, стеллажи, системы хранения',
    image: '/images/catalog/living.webp',
    alt: 'Гостиная: белая стенка во всю стену с нишей под телевизор и фасадами с круглым фрезерованным декором',
  },
  sofas: {
    id: 'sofas',
    title: 'Мягкая мебель',
    formLabel: 'Мягкая мебель',
    note: 'Диваны и кресла под размер комнаты',
    image: '/images/catalog/sofas.webp',
    alt: 'Светлый модульный угловой диван с оттоманкой и декоративными подушками',
  },
  offices: {
    id: 'offices',
    title: 'Офисы',
    formLabel: 'Мебель для офиса',
    note: 'Рабочие столы, шкафы, стойки ресепшн',
    image: '/images/catalog/offices.webp',
    alt: 'Два офисных стола с тумбами в декоре ореха и чёрные кресла',
  },
  cafe: {
    id: 'cafe',
    title: 'Кафе и рестораны',
    formLabel: 'Мебель для кафе или ресторана',
    note: 'Диваны, столы, барные стойки',
    image: '/images/catalog/cafe.webp',
    alt: 'Зал кафе: серые диваны с каретной стяжкой и столы с деревянными столешницами',
  },
  retail: {
    id: 'retail',
    title: 'Бутики и салоны',
    formLabel: 'Мебель для бутика или салона',
    note: 'Стеллажи, витрины, рабочие места мастеров',
    image: '/images/catalog/retail.webp',
    alt: 'Торговый зал: белые стеллажи с жёлтыми полками и светодиодной подсветкой',
  },
} as const satisfies Record<CatalogId, CatalogItem>;

function pick(...ids: CatalogId[]): CatalogItem[] {
  return ids.map((id) => items[id]);
}

export const catalog = {
  eyebrow: 'Каталог',
  title: 'Что изготавливаем',
  lead: 'Всё — под ваши размеры, готовых моделей со склада нет. Кухни, шкафы и спальни — основная работа цеха, но мебель для бизнеса делаем так же часто.',
  action: 'Рассчитать',
  // Первые три — основной спрос, в сетке они крупнее.
  featured: pick('kitchens', 'bedrooms', 'wardrobes'),
  groups: [
    { title: 'Для дома', items: pick('kids', 'living', 'sofas') },
    { title: 'Для бизнеса', items: pick('offices', 'cafe', 'retail') },
  ],
  all: Object.values(items) as CatalogItem[],
} as const;

/** Карточка каталога ведёт к форме и заранее выбирает тип мебели. */
export function requestHref(id: CatalogId): string {
  return `/?type=${id}#contacts`;
}
