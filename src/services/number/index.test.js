import { currency, percentage } from '.'

test('currency', () => {
  expect(currency(12000.58876)).toBe('R$ 12.000,59')
})

test('percentage', () => {
  expect(percentage(87.5887)).toBe('87,59%')
  expect(percentage(87)).toBe('87%')
  expect(percentage(87.5)).toBe('87,5%')
})
