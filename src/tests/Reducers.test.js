import { GET_PRODUCTS, SET_ERROR_MSG } from '../store/actions/types'
import productViewerReducer from '../store/reducers/productViewerReducer'

describe('Ticket Viewer Reducer', () => {
  // Checking if the default state is returned when not given an action type
  describe('When not given a type', () => {
    let newState

    beforeEach(() => {
      newState = productViewerReducer(undefined, {})
    })

    it('Should have "products" equal to [] ', () => {
      expect(newState.products).toEqual([])
    })

    it('Should have "nextUrl" equal to null ', () => {
      expect(newState.nextUrl).toEqual(null)
    })

    it('Should have "error" equal to null ', () => {
      expect(newState.error).toEqual(null)
    })
  })

  describe('When given a type ', () => {
    let getOroductsPayload

    beforeEach(() => {
      // Setting a dummy data payload
      getOroductsPayload = {
        type: GET_PRODUCTS,
        products: [],
        nextUrl: null,
        error: null
      }
    })

    // Setting specific attributes and checking if they were updated correctly
    it('Should update products When given GET_PRODUCTS', () => {
      getOroductsPayload.products = [1, 2, 3, 4, 5]
      const newState = productViewerReducer(undefined, getOroductsPayload)
      expect(newState.products).toEqual(getOroductsPayload.products)
    })

    it('Should update error When given SET_ERROR_MSG', () => {
      const testErrorMsg = 'My test error message'
      const newState = productViewerReducer(undefined, {
        type: SET_ERROR_MSG,
        payload: testErrorMsg
      })
      expect(newState.error).toEqual(testErrorMsg)
    })

    it('Should update nextUrl When given GET_PRODUCTS', () => {
      getOroductsPayload.nextUrl = 'my_dummy_url'
      const newState = productViewerReducer(undefined, getOroductsPayload)
      expect(newState.nextUrl).toEqual(getOroductsPayload.nextUrl)
    })
  })
})
