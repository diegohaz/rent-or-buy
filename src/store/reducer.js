import { combineReducers } from 'redux'
import { AREAS_SUCCESS, FORM_REGISTER, FORM_UNREGISTER, FORM_SET_VALUE } from './actions'

const initialState = {
  areas: [],
  form: {}
}

export const getAreas = (state = initialState) => state.areas || []

export const areas = (state = initialState.areas, action) => {
  switch (action.type) {
    case AREAS_SUCCESS:
      return action.list
    default:
      return state
  }
}

export const getValues = (state = initialState, form) => state.form[form] || {}

export const form = (state = initialState.form, action) => {
  switch (action.type) {
    case FORM_REGISTER:
      return {
        ...state,
        [action.name]: {}
      }
    case FORM_UNREGISTER:
      return {
        ...state,
        [action.name]: undefined
      }
    case FORM_SET_VALUE:
      return {
        ...state,
        [action.form]: {
          ...state[action.form],
          [action.name]: action.value
        }
      }
    default:
      return state
  }
}

export default combineReducers({
  areas,
  form
})
