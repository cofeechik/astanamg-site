import { LEAD_TIME } from '@/lib/company';
import { tier, type TierId } from './pricing';

/*
 * TODO: ЧЕРНОВИК — данные кейсов не сверены с клиентом.
 * - тип и материал определены по фотографиям;
 * - цена — нижняя граница уровня фасадов из pricing.ts, а не реальная смета проекта;
 *   для мягкой мебели, металла и торгового оборудования фасадные уровни неприменимы — цены нет;
 * - площадь и дата реализации НЕ заполнены намеренно, выдумывать их нельзя.
 * Пока флаг draft = true, над лентой висит баннер «ЧЕРНОВИК». Снять после сверки.
 */

export type Project = {
  id: string;
  title: string;
  image: string;
  alt: string;
  material: string;
  /** TODO: взять у клиента. */
  area: string | null;
  /** TODO: взять у клиента. */
  completed: string | null;
  leadTime: string;
  /** Нижняя граница ₸ за погонный метр. null — по смете. */
  priceFrom: number | null;
};

const fromTier = (id: TierId) => tier(id).priceFrom;

export const projects = {
  draft: true,
  draftBanner: 'ЧЕРНОВИК: данные кейсов не сверены с клиентом',
  eyebrow: 'Проекты',
  title: 'Недавние работы',
  lead: 'Квартиры, салоны, кафе и магазины в Астане. Каждый проект — по индивидуальным размерам.',
  allLabel: 'Все проекты',
  // TODO: страницы /projects пока нет — ведём в Instagram, где клиент публикует работы.
  allHref: 'https://instagram.com/astanamg.kz',
  labels: {
    area: 'Площадь',
    material: 'Материал',
    leadTime: 'Срок',
    price: 'Цена',
    priceUnit: '/п.м.',
    priceByEstimate: 'По смете после замера',
    empty: '—',
  },
  items: [
    {
      id: 'hallway',
      title: 'Прихожая с системой хранения до потолка',
      image: '/images/projects/hallway.webp',
      alt: 'Прихожая до потолка: графитовые шкафы, открытая ниша с крючками на фоне панели под дуб и тумба с ящиками',
      material: 'ЛДСП: графит и дуб',
      area: null,
      completed: null,
      leadTime: LEAD_TIME,
      priceFrom: fromTier('ldsp'),
    },
    {
      id: 'reception',
      title: 'Стойка ресепшн с реечной облицовкой',
      image: '/images/projects/reception.webp',
      alt: 'Полукруглая стойка ресепшн с вертикальными рейками под дерево и чёрной столешницей, на стенах такие же рейки с подсветкой',
      material: 'Рейки в древесном декоре, чёрная столешница',
      area: null,
      completed: null,
      leadTime: LEAD_TIME,
      priceFrom: fromTier('mdf-film'),
    },
    {
      id: 'nail-salon',
      title: 'Рабочие места для маникюрного салона',
      image: '/images/projects/nail-salon.webp',
      alt: 'Два белых маникюрных стола на тумбах и длинный комод вдоль стены в салоне красоты',
      material: 'Белые матовые корпуса и столешницы',
      area: null,
      completed: null,
      leadTime: LEAD_TIME,
      priceFrom: fromTier('ldsp'),
    },
    {
      id: 'cafe-sofas',
      title: 'Диваны для зала кафе',
      image: '/images/projects/cafe-sofas.webp',
      alt: 'Серые диваны с вертикальной стёжкой друг напротив друга и стол с деревянной столешницей на чёрной опоре',
      material: 'Мягкие диваны с вертикальной стёжкой, стол на металлической опоре',
      area: null,
      completed: null,
      leadTime: LEAD_TIME,
      priceFrom: null,
    },
    {
      id: 'shop-racks',
      title: 'Торговые стеллажи для магазина',
      image: '/images/projects/shop-racks.webp',
      alt: 'Островные стеллажи из фанеры на чёрном металлическом каркасе и настенные полки в торговом зале',
      material: 'Фанера, металлический каркас',
      area: null,
      completed: null,
      leadTime: LEAD_TIME,
      priceFrom: null,
    },
    {
      id: 'terrace',
      title: 'Мебель для летней террасы',
      image: '/images/projects/terrace.webp',
      alt: 'Скамьи и стол из сосновой доски на чёрном металлическом каркасе у входа в кафе, ещё в защитной плёнке',
      material: 'Сосна, металлический каркас',
      area: null,
      completed: null,
      leadTime: LEAD_TIME,
      priceFrom: null,
    },
  ] satisfies readonly Project[],
} as const;
