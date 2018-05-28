import { combineReducers } from 'redux'
import rootReducer from './rootReducer'
import favReducer from './favReducer'

export default combineReducers({
  root: rootReducer,
  fav: favReducer
})
