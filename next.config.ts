import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Статический экспорт: сборка отдаётся как набор html-файлов в /out
  output: 'export',
  trailingSlash: true,
  images: {
    // Обязательно при output: 'export' — оптимизатор Next требует рантайм.
    // Готовим изображения заранее (webp/avif) на этапе подготовки контента.
    unoptimized: true,
  },
};

export default nextConfig;
