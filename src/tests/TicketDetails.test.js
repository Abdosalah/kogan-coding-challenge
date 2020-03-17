import React from 'react'
import { mount } from 'enzyme'
import TicketDetails from '../pages/TicketDetails'
import { findByTestAtrr, testStore } from './testsUtil'
import { GET_TICKET_DETAILS, SET_ERROR_MSG } from '../store/actions/types'

// Setting up the component for testing, depending on the values of the
// parameters i dispatch actions to test the class component
const setUp = (isSelectedTicketSet, isErrorSet) => {
  const state = {
    ticket_id: 2
  }
  const store = testStore()
  if (isSelectedTicketSet) {
    const test_payload = 'this is the expected value'
    store.dispatch({
      type: GET_TICKET_DETAILS,
      payload: test_payload
    })
  } else if (isErrorSet) {
    store.dispatch({
      type: SET_ERROR_MSG,
      payload: 'An error msg'
    })
  }
  const wrapper = mount(<TicketDetails store={store} location={state} />)
  return wrapper
}

// Checking if the component renders
describe('Checking TicketDetails Page', () => {
  let component
  beforeEach(() => {
    component = setUp(false, false)
  })

  it('Should render the main without errors', () => {
    const wrapper = findByTestAtrr(component, 'ticket-details-component')
    expect(wrapper.length).toBe(1)
  })
})

// Checking which div is rendered based on the action dispatched
describe('Checking behaviour when selected ticket is set', () => {
  let component
  beforeEach(() => {
    component = setUp(true, false)
  })

  it('Should render the details div', () => {
    const wrapper = findByTestAtrr(component, 'ticket-details-div')
    expect(wrapper.length).toBe(1)
  })

  it('Should not render the error div', () => {
    const wrapper = findByTestAtrr(component, 'error-div')
    expect(wrapper.length).toBe(0)
  })

  it('Should not render the status div', () => {
    const wrapper = findByTestAtrr(component, 'status-div')
    expect(wrapper.length).toBe(0)
  })
})

describe('Checking behaviour when error message is set', () => {
  let component
  beforeEach(() => {
    component = setUp(false, true)
  })

  it('Should render the error div', () => {
    const wrapper = findByTestAtrr(component, 'error-div')
    expect(wrapper.length).toBe(1)
  })

  it('Should not render the details div', () => {
    const wrapper = findByTestAtrr(component, 'ticket-details-div')
    expect(wrapper.length).toBe(0)
  })

  it('Should not render the status div', () => {
    const wrapper = findByTestAtrr(component, 'status-div')
    expect(wrapper.length).toBe(0)
  })
})

describe('Checking behaviour when neither the error message or selected ticket is set', () => {
  let component
  beforeEach(() => {
    component = setUp(false, false)
  })

  it('Should render the status div', () => {
    const wrapper = findByTestAtrr(component, 'status-div')
    expect(wrapper.length).toBe(1)
  })

  it('Should not render the details div', () => {
    const wrapper = findByTestAtrr(component, 'ticket-details-div')
    expect(wrapper.length).toBe(0)
  })

  it('Should not render the error div', () => {
    const wrapper = findByTestAtrr(component, 'error-div')
    expect(wrapper.length).toBe(0)
  })
})
