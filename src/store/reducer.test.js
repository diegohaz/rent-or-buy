import * as actions from './actions'
import * as reducer from './reducer'

test('getAreas', () => {
  expect(reducer.getAreas()).toEqual([])
  expect(reducer.getAreas({})).toEqual([])
  expect(reducer.getAreas({ areas: ['RJ', 'SP'] })).toEqual(['RJ', 'SP'])
})

test('getValues', () => {
  expect(reducer.getValues()).toEqual({})
  expect(reducer.getValues(undefined, 'foo')).toEqual({})
  expect(reducer.getValues({ form: {} })).toEqual({})
  expect(reducer.getValues({ form: {} }, 'foo')).toEqual({})
  expect(reducer.getValues({ form: { foo: {} } }, 'foo')).toEqual({})
  expect(reducer.getValues({ form: { foo: { field: 'value' } } }, 'foo')).toEqual({ field: 'value' })
})

describe('areas', () => {
  it('returns the initial state', () => {
    expect(reducer.areas(undefined, {})).toEqual([])
  })

  it('handles AREAS_SUCCESS', () => {
    const action = { type: actions.AREAS_SUCCESS, list: ['RJ', 'SP'] }
    expect(reducer.areas([], action)).toEqual(['RJ', 'SP'])
    expect(reducer.areas(['MG', 'BA'], action)).toEqual(['RJ', 'SP'])
  })
})

describe('form', () => {
  it('returns the initial state', () => {
    expect(reducer.form(undefined, {})).toEqual({})
  })

  describe('FORM_REGISTER', () => {
    it('adds the new form to the initial state', () => {
      expect(reducer.form({}, {
        type: actions.FORM_REGISTER,
        name: 'foo'
      })).toEqual({
        foo: {}
      })
    })

    it('adds the new form to an existing state', () => {
      expect(reducer.form({
        foo: {}
      }, {
        type: actions.FORM_REGISTER,
        name: 'bar'
      })).toEqual({
        foo: {},
        bar: {}
      })
    })
  })

  describe('FORM_UNREGISTER', () => {
    it('removes form from an existing state', () => {
      expect(reducer.form({
        foo: {}
      }, {
        type: actions.FORM_UNREGISTER,
        name: 'foo'
      })).toEqual({})
    })
  })

  describe('FORM_SET_VALUE', () => {
    it('sets value', () => {
      expect(reducer.form({
        foo: { field: 'value' }
      }, {
        type: actions.FORM_SET_VALUE,
        form: 'foo',
        name: 'bar',
        value: 'baz'
      })).toEqual({
        foo: {
          field: 'value',
          bar: 'baz'
        }
      })
    })
  })
})
