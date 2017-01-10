import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReducer'

// console.log(store.getState())
// { libraries: [ { id: 1, ...}] }
export default combineReducers({
  libraries: LibraryReducer
})
