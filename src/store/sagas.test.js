import { take, put, call, fork } from 'redux-saga/effects'
import * as api from 'services/api'
import * as actions from './actions'
import saga, * as sagas from './sagas'

test('setDefaultPrices', () => {
  const generator = sagas.setDefaultPrices('form', 'RJ')
  expect(generator.next().value).toEqual([
    call(api.fetchRentalPrice, 'RJ'),
    call(api.fetchBuyPrice, 'RJ')
  ])
  expect(generator.next([100, 200]).value).toEqual([
    put(actions.formSetValue('form', 'rental', 100)),
    put(actions.formSetValue('form', 'buy', 200))
  ])
})

describe('requestAreas', () => {
  it('calls success', () => {
    const generator = sagas.requestAreas()
    expect(generator.next().value).toEqual(call(api.fetchAreas))
    expect(generator.next(['RJ', 'SP']).value).toEqual(put(actions.areas.success(['RJ', 'SP'])))
  })

  it('calls failure', () => {
    const generator = sagas.requestAreas()
    expect(generator.next().value).toEqual(call(api.fetchAreas))
    expect(generator.throw('error').value).toEqual(put(actions.areas.failure('error')))
  })
})

test('formSetAreaValue', () => {
  expect(sagas.formSetAreaValue({ type: actions.FORM_SET_VALUE })).toBe(false)
  expect(sagas.formSetAreaValue({ type: actions.FORM_SET_VALUE, name: 'foo' })).toBe(false)
  expect(sagas.formSetAreaValue({ type: actions.FORM_SET_VALUE, name: 'area' })).toBe(true)
})

test('watchFormSetAreaValue', () => {
  const payload = { form: 'foo', value: 'value' }
  const generator = sagas.watchFormSetAreaValue()
  expect(generator.next().value).toEqual(take(sagas.formSetAreaValue))
  expect(generator.next(payload).value).toEqual(call(sagas.setDefaultPrices, ...Object.values(payload)))
})

test('watchAreasRequest', () => {
  const generator = sagas.watchAreasRequest()
  expect(generator.next().value).toEqual(take(actions.AREAS_REQUEST))
  expect(generator.next().value).toEqual(call(sagas.requestAreas))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchFormSetAreaValue))
  expect(generator.next().value).toEqual(fork(sagas.watchAreasRequest))
})
