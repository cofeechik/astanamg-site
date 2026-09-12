import { COMPANY, FOUNDED_YEAR, LEAD_TIME, experienceLabel } from '@/lib/company';

export const hero = {
  title: 'Мебель на заказ в Астане',
  lead: `Собственное производство с ${FOUNDED_YEAR} года: проектируем под ваши размеры, изготавливаем в своём цехе и сами устанавливаем. Срок изготовления — ${LEAD_TIME}.`,
  /** Мобильный первый экран: одна строка, чтобы фото попадало выше сгиба. */
  leadShort: `Собственное производство с ${FOUNDED_YEAR} года`,
  primaryCta: { label: 'Рассчитать стоимость', href: '/#contacts' },
  whatsapp: { label: 'Написать в WhatsApp', href: COMPANY.whatsapp.href },
  image: {
    desktop: { src: '/images/hero/hero-desktop.webp', width: 1200, height: 675 },
    mobile: { src: '/images/hero/hero-mobile.webp', width: 960, height: 1200 },
    alt: 'Зал кафе: два мягких дивана с серой обивкой напротив друг друга и стол с деревянной столешницей на чёрной опоре',
  },
  facts: [
    `С ${FOUNDED_YEAR} года — ${experienceLabel()}`,
    'Собственный цех в Астане',
    'Бесплатный замер и 3D-проект',
    'Гарантия 12 месяцев',
  ],
} as const;
