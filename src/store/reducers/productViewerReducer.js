import { GET_PRODUCTS, SET_ERROR_MSG } from '../actions/types'

const initialState = {
  products: [],
  nextUrl: null,
  error: null
}

// Set the state based on the action dispatched
export default function (state = initialState, action) {
  switch (action.type) {
    // Set the attributes and clear the error
    case GET_PRODUCTS:
      return {
        products: action.products,
        nextUrl: action.nextUrl,
        error: null
      }
    // Set the error msg
    case SET_ERROR_MSG:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
