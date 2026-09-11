import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import { homeMeta } from '@/content/meta';
import { SITE_URL } from '@/lib/company';
import './globals.css';

const onest = Onest({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-onest',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: homeMeta.title,
  description: homeMeta.description,
  keywords: [...homeMeta.keywords],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'Astana Mebel Group',
    title: homeMeta.title,
    description: homeMeta.description,
    images: [homeMeta.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: homeMeta.title,
    description: homeMeta.description,
    images: [homeMeta.ogImage.url],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={onest.variable}>
      <body>{children}</body>
    </html>
  );
}
