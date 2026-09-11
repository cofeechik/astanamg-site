import { COMPANY, LEAD_TIME, SITE_URL, experienceLabel } from '@/lib/company';

export const homeMeta = {
  title: 'Мебель на заказ в Астане — собственное производство | Astana Mebel Group',
  description: `Изготавливаем кухни, шкафы, спальни и мебель для бизнеса на собственном производстве в Астане ${experienceLabel()}. Бесплатный замер и 3D-проект, срок ${LEAD_TIME}, гарантия 12 месяцев.`,
  ogImage: {
    url: `${SITE_URL}/og-image.jpg`,
    width: 1200,
    height: 630,
    alt: `${COMPANY.name} — мебель на заказ в Астане`,
  },
  keywords: [
    'мебель на заказ Астана',
    'кухни на заказ Астана',
    'шкафы-купе Астана',
    'корпусная мебель Астана',
    'мебель для кафе Астана',
  ],
} as const;
