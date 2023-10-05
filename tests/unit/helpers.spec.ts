import { expect, it } from 'vitest'
import { toCurrency } from '~/utils/helpers'

it('toCurrency', () => {
  const value = toCurrency(1000)
  expect(value).toBe('$1,000.00')
})
