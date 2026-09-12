// Подготовка изображений: оригиналы с astanamg.kz → webp в public/images.
// Оригиналы кэшируются в .image-cache/ и в git не попадают.
// Запуск: npm run images
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import satori from 'satori';

const SOURCE = 'https://astanamg.kz/wp-content/uploads/2025/07/';
const CACHE = '.image-cache';
const OUT = 'public/images';
const QUALITY = 82;

// max — потолок ширины для слота; каждый кадр режется в 480/960/1440, но не больше max и не больше оригинала.
const JOBS = [
  // Hero: арт-дирекшн — два кадра из одного снимка зала кафе (855).
  { src: '855.jpg', out: 'hero/hero-desktop.webp', max: 1440, quality: 78, extract: { left: 0, top: 240, width: 1200, height: 675 } },
  { src: '855.jpg', out: 'hero/hero-mobile.webp', max: 780, quality: 76, extract: { left: 120, top: 0, width: 960, height: 1200 } },

  // Каталог: три крупные карточки.
  { src: '205.jpg', out: 'catalog/kitchens.webp', max: 1440 },
  { src: '206.jpg', out: 'catalog/bedrooms.webp', max: 1440 },
  { src: '209-1.jpg', out: 'catalog/wardrobes.webp', max: 1440 },
  // Каталог: компактные строки.
  { src: '212.webp', out: 'catalog/kids.webp', max: 480 }, // детская — не путать с 212.jpg
  { src: '208.jpg', out: 'catalog/living.webp', max: 480 },
  { src: '207.png', out: 'catalog/sofas.webp', max: 480 },
  { src: '212.jpg', out: 'catalog/offices.webp', max: 480 }, // офис — не путать с 212.webp
  { src: '211.jpg', out: 'catalog/cafe.webp', max: 480 },
  { src: '210.jpg', out: 'catalog/retail.webp', max: 480 },

  // Проекты.
  { src: '809-1.jpg', out: 'projects/kitchen-loft.webp', max: 800, quality: 78 },
  { src: '828-1.jpg', out: 'projects/wardrobe-fluted.webp', max: 800, quality: 78 },
  { src: '829.jpg', out: 'projects/hallway.webp', max: 800, quality: 78 },
  { src: '844.jpg', out: 'projects/reception.webp', max: 800, quality: 78 },
  { src: '852.jpg', out: 'projects/nail-salon.webp', max: 800, quality: 78 },
  { src: '846.jpg', out: 'projects/shop-racks.webp', max: 800, quality: 78 },

  // Логотип — только для светлого фона (градиент, тень, белая обводка).
  { src: 'logo-3-1024x420.png', out: 'logo.webp', max: 400, quality: 90, alpha: true, responsive: false },
];

async function original(name) {
  const file = path.join(CACHE, name);
  try {
    await fs.access(file);
    return file;
  } catch {}
  const res = await fetch(SOURCE + name);
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);
  await fs.mkdir(CACHE, { recursive: true });
  await fs.writeFile(file, Buffer.from(await res.arrayBuffer()));
  return file;
}

function report(name, info) {
  console.log(`${name.padEnd(30)} ${`${info.width}×${info.height}`.padEnd(10)} ${Math.round(info.size / 1024)} КБ`);
}

const WIDTHS = [480, 960, 1440];

async function convert(job) {
  const source = await original(job.src);
  const meta = await sharp(source).metadata();
  // Ширина кадра после кропа — апскейлить нельзя.
  const available = job.extract ? job.extract.width : meta.width;
  const cap = Math.min(job.max, available);
  const targets = job.responsive === false ? [{ name: job.out, width: cap }] : WIDTHS.map((w) => ({
    name: job.out.replace(/.webp$/, `-${w}.webp`),
    width: Math.min(w, cap),
  }));

  for (const target of targets) {
    let img = sharp(source);
    if (job.extract) img = img.extract(job.extract);
    img = img.resize({ width: target.width, withoutEnlargement: true });
    if (!job.alpha) img = img.flatten({ background: '#ffffff' });
    const dest = path.join(OUT, target.name);
    await fs.mkdir(path.dirname(dest), { recursive: true });
    report(target.name, await img.webp({ quality: job.quality ?? QUALITY, effort: 6 }).toFile(dest));
  }
}

// ---------- og:image 1200×630 ----------
// Сабсеты Onest регистрируются под разными именами: с одним именем satori
// берёт первый файл целиком и латиница/цифры уходят в «тофу».
// Фото цеха + затемнение + подпись. JPEG, а не webp: мессенджеры
// (WhatsApp, часть Telegram-клиентов) webp в превью читают ненадёжно.

const el = (type, style, ...children) => ({
  type,
  props: { style: { display: 'flex', ...style }, children: children.length === 1 ? children[0] : children },
});

async function fonts() {
  const dir = 'node_modules/@fontsource/onest/files';
  const list = [];
  for (const weight of [400, 600]) {
    for (const subset of ['cyrillic', 'latin']) {
      list.push({
        name: subset === 'latin' ? 'Onest Latin' : 'Onest Cyrillic',
        weight,
        style: 'normal',
        data: await fs.readFile(path.join(dir, `onest-${subset}-${weight}-normal.woff`)),
      });
    }
  }
  return list;
}

async function ogImage() {
  const W = 1200;
  const H = 630;
  const muted = '#D8E0D5';
  const overlay = el(
    'div',
    {
      width: W,
      height: H,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '64px 72px',
      fontFamily: 'Onest Latin, Onest Cyrillic',
      color: '#FFFFFF',
      backgroundImage:
        'linear-gradient(90deg, rgba(18,20,15,0.92) 0%, rgba(18,20,15,0.78) 45%, rgba(18,20,15,0.30) 100%)',
    },
    el(
      'div',
      { display: 'flex', flexDirection: 'column' },
      el('div', { fontSize: 44, fontWeight: 600, letterSpacing: -1, lineHeight: 1 }, 'AMG'),
      el('div', { fontSize: 14, fontWeight: 600, letterSpacing: 2.1, marginTop: 8, color: muted }, 'ASTANA MEBEL GROUP'),
    ),
    el(
      'div',
      { display: 'flex', flexDirection: 'column', maxWidth: 780 },
      el('div', { width: 72, height: 6, backgroundColor: '#8CC63E', marginBottom: 28 }),
      el('div', { fontSize: 76, fontWeight: 600, letterSpacing: -2.2, lineHeight: 1.02 }, 'Мебель на заказ в Астане'),
      el('div', { fontSize: 30, fontWeight: 400, marginTop: 22, color: muted }, 'Собственное производство с 2011 года'),
    ),
    el('div', { fontSize: 24, fontWeight: 400, color: muted }, 'astanamg.kz  ·  +7 701 162 8888'),
  );

  const svg = await satori(overlay, { width: W, height: H, fonts: await fonts() });
  const info = await sharp(await original('203.jpg'))
    .resize(W, H, { fit: 'cover', position: 'centre' })
    .composite([{ input: Buffer.from(svg) }])
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile('public/og-image.jpg');
  report('../og-image.jpg', info);
}

const onlyOg = process.argv.includes('--og');
if (!onlyOg) for (const job of JOBS) await convert(job);
try {
  await ogImage();
} catch (error) {
  // satori печатает в стек минифицированный исходник — выводим только суть.
  console.error('og-image:', String(error.message).slice(0, 400));
  process.exit(1);
}
