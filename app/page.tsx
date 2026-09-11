// ВРЕМЕННО: полигон токенов. Заменяется секциями главной после сверки.
export default function Home() {
  return (
    <main className="mx-auto max-w-[var(--container-page)] px-6 py-16 lg:px-16">
      <h1 className="text-32 md:text-48 lg:text-72">Мебель на заказ в Астане</h1>
      <p className="mt-6 max-w-[60ch] text-18 text-ink-70">
        Полигон дизайн-токенов. Секции подключаются после сверки.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        {['ink', 'forest', 'lime', 'wood', 'sand', 'ink-70', 'line'].map((c) => (
          <div key={c} className="rounded-sm border border-line px-4 py-3 text-14">
            <span className={`mr-3 inline-block size-5 align-middle bg-${c}`} />
            {c}
          </div>
        ))}
      </div>
    </main>
  );
}
