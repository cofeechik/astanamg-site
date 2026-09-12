import { LEAD_TIME } from '@/lib/company';
import { tier, type TierId } from './pricing';

/*
 * TODO: ЧЕРНОВИК — данные кейсов не сверены с клиентом.
 * - тип и материал определены по фотографиям;
 * - цена — нижняя граница уровня фасадов из pricing.ts, а не смета проекта;
 *   для мягкой мебели, металла и торгового оборудования фасадные уровни неприменимы — цены нет;
 * - площадь и дата реализации НЕ заполнены намеренно, выдумывать их нельзя;
 *   незаполненные поля карточка не показывает вовсе.
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
  labels: {
    area: 'Площадь',
    material: 'Материал',
    leadTime: 'Срок',
    price: 'Цена',
    priceUnit: '/п.м.',
    priceByEstimate: 'По смете после замера',
  },
  items: [
    {
      id: 'kitchen-loft',
      title: 'Кухня в декоре бетона с деревянной столешницей',
      image: '/images/projects/kitchen-loft.webp',
      alt: 'Прямая кухня с матовыми фасадами в декоре бетона, деревянной столешницей и фартуком, встроенной техникой и чёрной вытяжкой',
      material: 'Фасады в декоре бетона, столешница под дерево',
      area: null,
      completed: null,
      leadTime: LEAD_TIME,
      priceFrom: fromTier('ldsp'),
    },
    {
      id: 'wardrobe-fluted',
      title: 'Шкаф с фрезерованными фасадами и витриной',
      image: '/images/projects/wardrobe-fluted.webp',
      alt: 'Светлый шкаф до потолка с фрезерованными фасадами, длинными чёрными ручками и застеклённой секцией с подсветкой полок',
      material: 'Крашеный МДФ с фрезеровкой, стекло, подсветка',
      area: null,
      completed: null,
      leadTime: LEAD_TIME,
      priceFrom: fromTier('mdf-paint'),
    },
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
  ] satisfies readonly Project[],
} as const;
