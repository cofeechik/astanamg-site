import { COMPANY, LEAD_TIME } from '@/lib/company';

/** Навигация. Пока одна страница — ссылки якорные. */
export const nav = [
  { label: 'Каталог', href: '/#catalog' },
  { label: 'Проекты', href: '/#projects' },
  { label: 'Цены', href: '/#pricing' },
  { label: 'Как работаем', href: '/#process' },
  { label: 'Производство', href: '/#production' },
  { label: 'Контакты', href: '/#contacts' },
] as const;

export const header = {
  cta: 'Рассчитать стоимость',
  logoAlt: 'Astana Mebel Group — мебель на заказ в Астане',
} as const;

export const footer = {
  tagline: `Собственное производство корпусной и мягкой мебели в Астане. Срок изготовления — ${LEAD_TIME}.`,
  columns: [
    {
      title: 'Мебель',
      links: [
        { label: 'Кухни', href: '/#catalog' },
        { label: 'Шкафы и гардеробные', href: '/#catalog' },
        { label: 'Спальни', href: '/#catalog' },
        { label: 'Детские', href: '/#catalog' },
        { label: 'Гостиные', href: '/#catalog' },
        { label: 'Мягкая мебель', href: '/#catalog' },
      ],
    },
    {
      title: 'Бизнесу',
      links: [
        { label: 'Офисы', href: '/#catalog' },
        { label: 'Кафе и рестораны', href: '/#catalog' },
        { label: 'Бутики и салоны', href: '/#catalog' },
      ],
    },
    {
      title: 'Компания',
      links: [
        { label: 'Проекты', href: '/#projects' },
        { label: 'Производство', href: '/#production' },
        { label: 'Вопросы и ответы', href: '/#faq' },
        { label: 'Контакты', href: '/#contacts' },
      ],
    },
  ],
  legal: `© ${new Date().getFullYear()} ${COMPANY.name}. Все права защищены.`,
} as const;

export const mobileBar = {
  call: 'Позвонить',
  whatsapp: 'WhatsApp',
} as const;
