import axios from 'axios'
import { GET_PRODUCTS, SET_ERROR_MSG } from './types'
import { GET_PRODUCTS_URL, INITIAL_NEXT_URL } from '../../config/keys'

// Fetch all PRODUCTS
export const getProducts = (nextUrl) => dispatch => {
  if (!nextUrl) nextUrl = INITIAL_NEXT_URL
  // Assemble the url together with the page number
  var url = `${GET_PRODUCTS_URL}${nextUrl}`

  // Send the request to the server with the url as a parameter and
  // and call the validation function
  axios.get(url, { params: { url } }).then(response => {
    dispatch({
      type: GET_PRODUCTS,
      payload: response.data.objects,
      nextUrl: response.data.next
    })
  }).catch(error => {
    dispatch({
      type: SET_ERROR_MSG,
      payload: error
    })
  })
}
