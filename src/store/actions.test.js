import * as actions from './actions'

test('areas', () => {
  expect(actions.areas.request()).toEqual({
    type: actions.AREAS_REQUEST
  })
  expect(actions.areas.success(['RJ', 'SP'])).toEqual({
    type: actions.AREAS_SUCCESS,
    list: ['RJ', 'SP']
  })
  expect(actions.areas.failure('err')).toEqual({
    type: actions.AREAS_FAILURE,
    error: 'err'
  })
})

test('formRegister', () => {
  expect(actions.formRegister('form')).toEqual({
    type: actions.FORM_REGISTER,
    name: 'form'
  })
})

test('formUnregister', () => {
  expect(actions.formUnregister('form')).toEqual({
    type: actions.FORM_UNREGISTER,
    name: 'form'
  })
})

test('formSetValue', () => {
  expect(actions.formSetValue('form', 'field', 'value')).toEqual({
    type: actions.FORM_SET_VALUE,
    form: 'form',
    name: 'field',
    value: 'value'
  })
})
