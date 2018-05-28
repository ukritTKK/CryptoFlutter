import {
  FETCHING_COIN_DATA,
  FETCH_COIN_DATA_SUCCESS,
  FETCH_COIN_DATA_FAIL,

  FETCHING_GLOBAL_COIN_DATA,
  FETCH_GLOBAL_COIN_DATA_SUCCESS,
  FETCH_GLOBAL_COIN_DATA_FAIL,

  SET_EMPTY_FAV_COIN_DATA

} from '../Utils/ActionTypes'

const initialState = {
  isFetching: null,
  fetchCoinData: [],
  coinData: [],
  globalCoinData: [],
  hasError: false,
  errorMessage: null,
  refreshing: false
}

export default function (state = initialState, action) {

  switch(action.type) {

    case FETCHING_COIN_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        fetchCoinData: [],
        coinData: state.coinData,
        globalCoinData: state.globalCoinData,
        hasError: false,
        errorMessage: null,
        refreshing: action.payload2
      })
    
    case FETCH_COIN_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        fetchCoinData: action.payload,
        coinData: action.payload,
        globalCoinData: state.globalCoinData,
        hasError: false,
        errorMessage: null,
        refreshing: action.payload2
      })

    case FETCH_COIN_DATA_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        fetchCoinData: [],
        coinData: state.coinData,
        globalCoinData: state.globalCoinData,
        hasError: true,
        errorMessage: action.err,
        refreshing: action.payload2
      })

      case FETCHING_GLOBAL_COIN_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        fetchCoinData: state.fetchCoinData,
        coinData: state.coinData,
        globalCoinData: [],
        hasError: false,
        errorMessage: null,
        refreshing: false
      })
    
    case FETCH_GLOBAL_COIN_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        fetchCoinData: state.fetchCoinData,
        coinData: state.coinData,
        globalCoinData: action.payload,
        hasError: false,
        errorMessage: null,
        refreshing: false
      })

    case FETCH_GLOBAL_COIN_DATA_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        fetchCoinData: state.fetchCoinData,
        coinData: state.coinData,
        globalCoinData: [],
        hasError: true,
        errorMessage: action.err,
        refreshing: false
      })

    case 'TOGGLE_FAV':
      return Object.assign({}, state, {
        isFetching: false,
        coinData: action.payload2,
        hasError: false,
        errorMessage: null,
        refreshing: false
      })

    case 'SET_INITIAL_FAV_BOOL':
      return Object.assign({}, state, {
        isFetching: false,
        fetchCoinData: state.fetchCoinData,
        coinData: action.payload,
        globalCoinData: state.globalCoinData,
        hasError: false,
        errorMessage: null,
        refreshing: false
      })

    default:
      return state
  }

}
