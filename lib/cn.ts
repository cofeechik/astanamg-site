/** Склейка классов без зависимостей. Конфликты классов не разрешает — не передавайте взаимоисключающие. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
