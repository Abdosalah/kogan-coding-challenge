import { combineReducers } from 'redux'
import ticketViewerReducer from './ticketViewerReducer'

export default combineReducers({
  ticketViewer: ticketViewerReducer
})
