import omit from 'lodash/object/omit'
import store from '../store'

export function changeItemAmount (id, amount) {
  store.items[id].amount = amount
}

export function deleteItem (id) {
  store.items = omit(store.items, id)
}
