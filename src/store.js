import { createStore, combineReducers } from 'redux'

import items from './reducers/items'
import uploader from './reducers/uploader'

const combindedReducers = combineReducers({
  items: items,
  uploader: uploader,
})

export default createStore(combindedReducers)
