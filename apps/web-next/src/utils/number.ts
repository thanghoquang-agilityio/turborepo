export const formatAmountCurrency = (balance: number | string): string => {
  const dollarUSLocale: Intl.NumberFormat = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  if (typeof balance === 'number') {
    return dollarUSLocale.format(balance).slice(1)
  }

  return dollarUSLocale.format(Number(balance))
}
