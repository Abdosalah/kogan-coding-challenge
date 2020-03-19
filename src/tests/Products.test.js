import React from 'react'
import { mount } from 'enzyme'
import Products from '../pages/Products'
import { findByTestAtrr, testStore } from './testsUtil'
import { GET_PRODUCTS, SET_ERROR_MSG } from '../store/actions/types'

// Setting up the component for testing
const setUp = (isDataSet, isErrorSet) => {
  const store = testStore()
  if (isDataSet) {
    const testPayload = [1, 2, 3, 4, 5]
    const testNextUrl = 'this is the test URL'
    store.dispatch({
      type: GET_PRODUCTS,
      products: testPayload,
      nextUrl: testNextUrl
    })
  } else if (isErrorSet) {
    store.dispatch({
      type: SET_ERROR_MSG,
      payload: 'An error msg'
    })
  }
  const wrapper = mount(<Products store={store} />)
  return wrapper
}

describe('Checking default page behaviour', () => {
  let component
  beforeEach(() => {
    component = setUp(false, false)
  })

  it('Should render the main div without errors', () => {
    const wrapper = findByTestAtrr(component, 'product-display-component')
    expect(wrapper.length).toBe(1)
  })

  it('Should render the products list div', () => {
    const wrapper = findByTestAtrr(component, 'product-list')
    expect(wrapper.length).toBe(1)
  })

  it('Should not render any items', () => {
    const wrapper = findByTestAtrr(component, 'product-item')
    expect(wrapper.length).toBe(0)
  })

  it('Should not render the error div', () => {
    const wrapper = findByTestAtrr(component, 'error-div')
    expect(wrapper.length).toBe(0)
  })
})

describe('Checking page behaviour when products are set', () => {
  let component
  beforeEach(() => {
    component = setUp(true, false)
  })

  it('Should render the main div without errors', () => {
    const wrapper = findByTestAtrr(component, 'product-display-component')
    expect(wrapper.length).toBe(1)
  })

  it('Should render the products list', () => {
    const wrapper = findByTestAtrr(component, 'product-list')
    expect(wrapper.length).toBe(1)
  })

  it('Should render an item for each value in products array', () => {
    const wrapper = findByTestAtrr(component, 'product-item')
    expect(wrapper.length).toBe(5)
  })

  it('Should not render the error div', () => {
    const wrapper = findByTestAtrr(component, 'error-div')
    expect(wrapper.length).toBe(0)
  })
})

describe('Checking pag behaviour when the error is set', () => {
  let component
  beforeEach(() => {
    component = setUp(false, true)
  })

  it('Should render the main div without errors', () => {
    const wrapper = findByTestAtrr(component, 'product-display-component')
    expect(wrapper.length).toBe(1)
  })

  it('Should render the products list', () => {
    const wrapper = findByTestAtrr(component, 'product-list')
    expect(wrapper.length).toBe(1)
  })

  it('Should not render any items', () => {
    const wrapper = findByTestAtrr(component, 'product-item')
    expect(wrapper.length).toBe(0)
  })

  it('Should render the error div', () => {
    const wrapper = findByTestAtrr(component, 'error-div')
    expect(wrapper.length).toBe(1)
  })
})
