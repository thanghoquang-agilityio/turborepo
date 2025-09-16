import { formatAmountCurrency } from '..'

describe('formatAmountCurrency', () => {
  it('should format positive number correctly', () => {
    expect(formatAmountCurrency(1234)).toBe('1,234.00')
  })

  it('should format zero correctly', () => {
    expect(formatAmountCurrency(0)).toBe('0.00')
  })

  it('should format number with decimals correctly', () => {
    expect(formatAmountCurrency(1234.56)).toBe('1,234.56')
  })

  it('should format positive number string correctly', () => {
    expect(formatAmountCurrency('1234')).toBe('$1,234.00')
  })

  it('should format negative number string correctly', () => {
    expect(formatAmountCurrency('-1234')).toBe('-$1,234.00')
  })

  it('should format number string with spaces correctly', () => {
    expect(formatAmountCurrency(' 1234 ')).toBe('$1,234.00')
  })

  it('should format empty string correctly', () => {
    expect(formatAmountCurrency('')).toBe('$0.00')
  })

  it('should format non-numeric string as zero', () => {
    expect(formatAmountCurrency('abc')).toBe('$NaN')
  })
})
