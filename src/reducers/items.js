export default function items(state = {}, action) {
  switch (action.type) {

    case 'ADD_ITEM':
      return {
        ...state,
        [action.payload.id]: action.payload
      }

    case 'CHANGE_ITEM_AMOUNT':
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          amount: action.payload.amount
        }
      }

    case 'DELETE_ITEM':
      const newState = {...state}
      delete newState[action.payload.id]
      return newState

    default:
      return state
  }
}
