import { COMPANY, FOUNDED_YEAR, LEAD_TIME, experienceLabel } from '@/lib/company';

export const hero = {
  title: 'Мебель на заказ в Астане',
  lead: `Собственное производство с ${FOUNDED_YEAR} года: проектируем под ваши размеры, изготавливаем в своём цехе и сами устанавливаем. Срок изготовления — ${LEAD_TIME}.`,
  primaryCta: { label: 'Рассчитать стоимость', href: '/#contacts' },
  whatsapp: { label: 'Написать в WhatsApp', href: COMPANY.whatsapp.href },
  image: {
    desktop: { src: '/images/hero/hero-desktop.webp', width: 1920, height: 1080 },
    mobile: { src: '/images/hero/hero-mobile.webp', width: 960, height: 1200 },
    alt: 'Мастер укладывает белую мебельную плиту на рабочий стол станка с ЧПУ',
  },
  facts: [
    `С ${FOUNDED_YEAR} года — ${experienceLabel()}`,
    'Собственный цех в Астане',
    'Бесплатный замер и 3D-проект',
    'Гарантия 12 месяцев',
  ],
} as const;
