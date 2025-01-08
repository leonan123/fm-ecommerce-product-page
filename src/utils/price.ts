export function getFormattedProductTotalPrice(quantity: number, price: number, discountPercentage: number) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((quantity * price) * (1 - discountPercentage / 100))
}

export function getFormattedProductPrice(price: number) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}