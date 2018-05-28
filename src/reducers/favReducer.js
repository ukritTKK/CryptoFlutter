import {

  SET_EMPTY_FAV_COIN_DATA

} from '../Utils/ActionTypes'

const initialState = {
  isFetching: null,
  favCoinData: [],
  favCoinBool: [],
  hasError: false,
  errorMessage: null
}

export default function (state = initialState, action) {

  switch(action.type) {

    case 'TOGGLE_FAV':
      return Object.assign({}, state, {
        isFetching: false,
        favCoinData: action.payload,
        favCoinBool: state.favCoinBool,
        hasError: false,
        errorMessage: null
      })

    case 'SET_INITIAL_FAV_BOOL':
      return Object.assign({}, state, {
        isFetching: false,
        favCoinData: state.favCoinData,
        favCoinBool: action.payload,
        hasError: false,
        errorMessage: null
      })

    case SET_EMPTY_FAV_COIN_DATA:


      return {
        ...state,
        favCoinData: []
      }

    default:
      return state
  }

}
