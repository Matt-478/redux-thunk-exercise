import {initialState} from '../store'
import {INCREMENT} from '../action/actions'

export const mainReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT: 
    return {
      ...state,
      count: state.count +1
    }

    case 'FETCH_MOVIES':
      return {
        ...state,
        itemsToDisplay:  [action.payload]
      }
    default:
      return state
  }
}