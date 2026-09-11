import type { Metadata, Viewport } from 'next';
import { Onest } from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { MobileBar } from '@/components/layout/MobileBar';
import { homeMeta } from '@/content/meta';
import { ui } from '@/content/ui';
import { SITE_URL } from '@/lib/company';
import './globals.css';

const onest = Onest({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
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

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={onest.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-sm focus:bg-lime focus:px-4 focus:py-3 focus:text-ink"
        >
          {ui.skipLink}
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
