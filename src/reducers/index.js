import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReducer'
import SelectionReducer from'./SelectionReducer'

// console.log(store.getState())
// { libraries: [ { id: 1, ...}] }
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
})
