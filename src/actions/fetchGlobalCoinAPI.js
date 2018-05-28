import axios from 'axios'
import { COIN_GLOBAL_API_URL } from '../Utils/Constants'
import {
  FETCHING_GLOBAL_COIN_DATA,
  FETCH_GLOBAL_COIN_DATA_SUCCESS,
  FETCH_GLOBAL_COIN_DATA_FAIL
} from '../Utils/ActionTypes'

export default function fetchGlobalCoinAPI() {

  return dispatch => {
    dispatch({ type: FETCHING_GLOBAL_COIN_DATA })

    return axios.get(COIN_GLOBAL_API_URL)
      .then(res => {
        console.log('Fetch global SUCCESSED')
        dispatch({ 
          type: FETCH_GLOBAL_COIN_DATA_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        console.log('Fetch global FAILED')
        dispatch({
          type: FETCH_GLOBAL_COIN_DATA_FAIL,
          payload: err.data
        })
      })
  }
}
