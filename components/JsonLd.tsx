/** Встраивает JSON-LD. `<` экранируется, чтобы строка из контента не закрыла тег <script>. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
