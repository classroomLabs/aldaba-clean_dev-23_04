// ❌
export function calculateDiscount(price: number) {
  // 🤢 where these numbers came from?
  const EXPENSIVE_LIMIT = 1000;
  const DISCOUNT_EXPENSIVE = 2;
  const DISCOUNT_CHEAP = 1;
  if (price > EXPENSIVE_LIMIT) {
    return (price * DISCOUNT_EXPENSIVE) / 100;
  } else {
    return (price * DISCOUNT_CHEAP) / 100;
  }
}
