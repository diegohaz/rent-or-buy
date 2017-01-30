import { take, put, call, fork } from 'redux-saga/effects'
import { fetchAreas, fetchRentalPrice, fetchBuyPrice } from 'services/api'
import { areas, formSetValue, FORM_SET_VALUE, AREAS_REQUEST } from './actions'

export function* setDefaultPrices(form, area) {
  const [rental, buy] = yield [
    call(fetchRentalPrice, area),
    call(fetchBuyPrice, area)
  ]
  yield [
    put(formSetValue(form, 'rental', rental)),
    put(formSetValue(form, 'buy', buy))
  ]
}

export function* requestAreas() {
  try {
    const list = yield call(fetchAreas)
    yield put(areas.success(list))
  } catch (e) {
    yield put(areas.failure(e))
  }
}

export const formSetAreaValue = action => action.type === FORM_SET_VALUE && action.name === 'area'

export function* watchFormSetAreaValue() {
  while (true) {
    const { form, value } = yield take(formSetAreaValue)
    yield call(setDefaultPrices, form, value)
  }
}

export function* watchAreasRequest() {
  while (true) {
    yield take(AREAS_REQUEST)
    yield call(requestAreas)
  }
}

export default function* () {
  yield fork(watchFormSetAreaValue)
  yield fork(watchAreasRequest)
}
