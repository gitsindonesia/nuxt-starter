import type { ErrorResponse } from '~/types'

export function toCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
}

export function getErrorMessage(err: Error) {
  return (err as ErrorResponse).response?.data?.message ?? err.message
}
