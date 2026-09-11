/** 150000 → «150 000» (неразрывный пробел между разрядами). */
export function formatNumber(n: number): string {
  return new Intl.NumberFormat('ru-RU').format(n);
}

/** 150000 → «150 000 ₸». */
export function formatTenge(n: number): string {
  return `${formatNumber(n)} ₸`;
}
