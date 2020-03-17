import checkPropTypes from 'check-prop-types'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../store/reducers'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]

// A function that searches through a component for a specific attribute
export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`)
  return wrapper
}

// Create a mock store and return it
export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}
