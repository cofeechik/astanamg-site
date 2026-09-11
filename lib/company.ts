/**
 * Константы компании. Всё, что повторяется на нескольких экранах,
 * живёт здесь — чтобы правка была в одном месте.
 */

export const FOUNDED_YEAR = 2011;

export const SITE_URL = 'https://astanamg.kz';

export const COMPANY = {
  name: 'Astana Mebel Group',
  legalCity: 'Астана',
  phone: {
    raw: '+77011628888',
    display: '+7 701 162 8888',
    href: 'tel:+77011628888',
  },
  whatsapp: {
    href: 'https://wa.me/77011628888',
    display: 'WhatsApp',
  },
  address: {
    country: 'Казахстан',
    city: 'Астана',
    street: 'ул. Орлыкол 10Б',
    hint: 'Астанатехнопарк, цех №4',
    full: 'Астана, ул. Орлыкол 10Б (Астанатехнопарк, цех №4)',
    // TODO: уточнить точку по литеру Б — сейчас координаты общие по адресу.
    geo: { lat: 51.1849, lng: 71.4279 },
    // Маршрут в 2GIS по адресу. Виджет карты не ставим в MVP — тяжёлый iframe.
    routeHref: `https://2gis.kz/astana/search/${encodeURIComponent('Орлыкол 10Б')}`,
  },
  instagram: {
    href: 'https://instagram.com/astanamg.kz',
    display: '@astanamg.kz',
  },
  // TODO: режим работы у клиента не указан нигде — взять у него. Пока строка не выводится.
  hours: null as string | null,
} as const;

/**
 * Единая формулировка срока изготовления. Используется везде:
 * hero, проекты, цены, FAQ, договорные тексты.
 * Другой формулировки на сайте быть не должно.
 */
export const LEAD_TIME = 'от 21 до 35 рабочих дней';

/**
 * Опыт считается от текущего года, а не зашит числом.
 * ВАЖНО: при статическом экспорте значение фиксируется на этапе сборки.
 * Пересборка сайта хотя бы раз в год обязательна.
 */
export function yearsInBusiness(from: number = FOUNDED_YEAR): number {
  return new Date().getFullYear() - from;
}

/** Русская плюрализация: 1 год / 2 года / 15 лет. */
export function plural(n: number, forms: [string, string, string]): string {
  const abs = Math.abs(n) % 100;
  const tail = abs % 10;
  if (abs > 10 && abs < 20) return forms[2];
  if (tail > 1 && tail < 5) return forms[1];
  if (tail === 1) return forms[0];
  return forms[2];
}

/** «15 лет», «21 год» — для подстановки в текст. */
export function experienceLabel(): string {
  const n = yearsInBusiness();
  return `${n} ${plural(n, ['год', 'года', 'лет'])}`;
}
