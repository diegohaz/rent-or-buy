import data from './data.json'

export const fetchAreas = () => Promise.resolve(Object.keys(data))

export const fetchRentalPrice = area => Promise.resolve(data[area.toUpperCase()].aluguel)

export const fetchBuyPrice = area => Promise.resolve(data[area.toUpperCase()].compra)
