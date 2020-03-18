import { combineReducers } from 'redux'
import productViewerReducer from './productViewerReducer'

export default combineReducers({
  productViewer: productViewerReducer
})
