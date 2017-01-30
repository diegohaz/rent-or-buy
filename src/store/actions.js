export const AREAS_REQUEST = 'AREAS_REQUEST'
export const AREAS_SUCCESS = 'AREAS_SUCCESS'
export const AREAS_FAILURE = 'AREAS_FAILURE'
export const FORM_REGISTER = 'FORM_REGISTER'
export const FORM_UNREGISTER = 'FORM_UNREGISTER'
export const FORM_SET_VALUE = 'FORM_SET_VALUE'

export const areas = {
  request: () => ({ type: AREAS_REQUEST }),
  success: list => ({ type: AREAS_SUCCESS, list }),
  failure: error => ({ type: AREAS_FAILURE, error })
}

export const formRegister = name => ({ type: FORM_REGISTER, name })
export const formUnregister = name => ({ type: FORM_UNREGISTER, name })
export const formSetValue = (form, name, value) => ({ type: FORM_SET_VALUE, form, name, value })
