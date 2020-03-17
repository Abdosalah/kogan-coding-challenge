import axios from 'axios'
import { GET_PRODUCTS, SET_ERROR_MSG } from './types'
import { GET_PRODUCTS_URL } from '../../config/keys'

// Fetch all PRODUCTS
export const getProducts = (page_no = 1) => dispatch => {
  // Assemble the url together with the page number
  var url = `${GET_PRODUCTS_URL}`

  // Send the request to the server with the url as a parameter and
  // and call the validation function
  axios.get(url, { params: { url } }).then(response => {
    dispatch({
      type: GET_PRODUCTS,
      payload: response.data.objects,
      next_url: response.data.next
    })
  }).catch(error => {
    dispatch({
      type: SET_ERROR_MSG,
      payload: error
    })
  })
}
