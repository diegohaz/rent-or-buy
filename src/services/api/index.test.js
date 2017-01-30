import { fetchAreas, fetchRentalPrice, fetchBuyPrice } from '.'
import data from './data.json'

test('fetchAreas', async () => {
  const areas = await fetchAreas()
  expect(areas).toEqual(Object.keys(data))
})

test('fetchRentalPrice', async () => {
  const rental = await fetchRentalPrice('rj')
  expect(rental).toBe(data.RJ.aluguel)
})

test('fetchBuyPrice', async () => {
  const rental = await fetchBuyPrice('rj')
  expect(rental).toBe(data.RJ.compra)
})
