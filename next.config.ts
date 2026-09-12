import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Статический экспорт: сборка отдаётся как набор html-файлов в /out
  output: 'export',
  trailingSlash: true,
  images: {
    // Оптимизатора на сервере нет: ширины нарезаются заранее (npm run images),
    // а загрузчик выбирает нужную. Логотип идёт с unoptimized — он один на все экраны.
    loader: 'custom',
    loaderFile: './lib/imageLoader.ts',
    deviceSizes: [480, 960, 1440],
  },
};

export default nextConfig;
