import { GET_PRODUCTS, GET_TICKET_DETAILS, SET_ERROR_MSG } from '../actions/types'

const initialState = {
  products: [],
  next_url: null,
  error: null
}

// Set the state based on the action dispatched
export default function (state = initialState, action) {
  switch (action.type) {
    // Set the attributes and clear the error
    case GET_PRODUCTS:
      return {
        products: action.payload,
        next_url: action.next_url,
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
