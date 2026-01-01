export function formatCurrency(
  amount: number,
  options?: { locale?: string; currency?: string }
) {
  const locale = options?.locale ?? "en-US";
  const currency = options?.currency ?? "USD";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
