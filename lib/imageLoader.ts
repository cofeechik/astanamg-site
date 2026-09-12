type LoaderArgs = { src: string; width: number; quality?: number };

/** Ширины, которые заранее нарезает scripts/images.mjs. Должны совпадать с deviceSizes в next.config. */
export const WIDTHS = [480, 960, 1440];

/**
 * Статический экспорт: оптимизатора на сервере нет, поэтому загрузчик просто
 * подставляет нужную нарезку рядом с оригиналом — /images/x.webp → /images/x-960.webp.
 */
export default function imageLoader({ src, width }: LoaderArgs): string {
  const best = WIDTHS.find((w) => w >= width) ?? WIDTHS[WIDTHS.length - 1];
  return src.replace(/\.webp$/, `-${best}.webp`);
}
