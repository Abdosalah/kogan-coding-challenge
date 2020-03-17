import { GET_PRODUCTS, GET_TICKET_DETAILS, SET_ERROR_MSG } from '../store/actions/types'
import ticketViewerReducer from '../store/reducers/ticketViewerReducer'

describe('Ticket Viewer Reducer', () => {
  // Checking if the default state is returned when not given an action type
  describe('When not given a type', () => {
    let newState

    beforeEach(() => {
      newState = ticketViewerReducer(undefined, {})
    })
    /*
    count: null,
    tickets: [],
    selected_ticket: null,
    number_of_pages: 0,
    error: null
    */

    it('Should have "count" equal to null ', () => {
      expect(newState.count).toEqual(null)
    })

    it('Should have "tickets" as an empty array ', () => {
      expect(newState.tickets).toEqual([])
    })

    it('Should have "selected_ticket" equal to null ', () => {
      expect(newState.selected_ticket).toEqual(null)
    })

    it('Should have "number_of_pages" equal to 0 ', () => {
      expect(newState.number_of_pages).toEqual(0)
    })

    it('Should have "error" equal to null ', () => {
      expect(newState.error).toEqual(null)
    })
  })

  describe('When given a type ', () => {
    let get_tickets_payload

    beforeEach(() => {
      // Setting a dummy data payload
      get_tickets_payload = {
        type: GET_PRODUCTS,
        count: null,
        tickets: [],
        number_of_pages: 0
      }
    })

    // Setting specific attributes and checking if they were updated correctly
    it('Should update selected ticked when given GET_TICKET_DETAILS', () => {
      const test_payload = 'this is the expected value'
      const newState = ticketViewerReducer(undefined, {
        type: GET_TICKET_DETAILS,
        payload: test_payload
      })
      expect(newState.selected_ticket).toEqual(test_payload)
    })

    it('Should update error When given SET_ERROR_MSG', () => {
      const test_error_msg = 'My test error message'
      const newState = ticketViewerReducer(undefined, {
        type: SET_ERROR_MSG,
        payload: test_error_msg
      })
      expect(newState.error).toEqual(test_error_msg)
    })

    it('Should update count When given GET_PRODUCTS', () => {
      get_tickets_payload.count = 5
      const newState = ticketViewerReducer(undefined, get_tickets_payload)
      expect(newState.count).toEqual(get_tickets_payload.count)
    })

    it('Should update tickets When given GET_PRODUCTS', () => {
      get_tickets_payload.tickets = [1, 2]
      const newState = ticketViewerReducer(undefined, get_tickets_payload)
      expect(newState.tickets).toEqual(get_tickets_payload.tickets)
    })

    it('Should update number_of_pages When given GET_PRODUCTS', () => {
      get_tickets_payload.number_of_pages = 15
      const newState = ticketViewerReducer(undefined, get_tickets_payload)
      expect(newState.number_of_pages).toEqual(get_tickets_payload.number_of_pages)
    })
  })
})
