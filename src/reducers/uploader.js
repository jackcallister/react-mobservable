const States = {
  EMPTY: 'EMPTY',
  UPLOADING: 'UPLOADING',
}

const initialState = {
  status: States.EMPTY,
  percentage: 0,
}

export default function uploader(state = initialState, action) {
  switch (action.type) {

    case 'BEGIN_UPLOADING':
      return {
        ...state,
        status: 'UPLOADING',
      }

    case 'UPDATE_PERCENTAGE':
      return {
        ...state,
        percentage: action.payload.percentage
      }

    case 'SUCCESS_UPLOADING':
      return {
        ...state,
        status: States.EMPTY,
        percentage: 0,
      }

    default:
      return state
  }
}
