import React from 'react'
import { shallow } from 'enzyme'
import TicketList from '../pages/TicketList'
import { findByTestAtrr, testStore } from './testsUtil'

// Setting up the component for testing
const setUp = () => {
  const store = testStore()
  const wrapper = shallow(<TicketList store={store} />).childAt(0).dive()
  return wrapper
}

describe('Checking TicketList Page', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })

  it('Should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'ticket-list')
    expect(wrapper.length).toBe(1)
  })
})

describe('Checking Props', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })

  it('Should have the fucntion getTickets defined', () => {
    expect(component.instance().props.getTickets).toBeDefined()
  })

  it('Should have the object ticketViewer defined', () => {
    expect(component.instance().props.ticketViewer).toBeDefined()
  })
})
