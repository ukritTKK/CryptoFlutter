import axios from 'axios'
import { COIN_API_URL_10, COIN_API_URL_100 } from '../Utils/Constants'
import {
  FETCHING_COIN_DATA,
  FETCH_COIN_DATA_SUCCESS,
  FETCH_COIN_DATA_FAIL
} from '../Utils/ActionTypes'

export default function fetchCoinAPI() {

  return dispatch => {
    dispatch({
      type: FETCHING_COIN_DATA,
      payload2: true
    })

    return axios.get(COIN_API_URL_10)
      .then(res => {
        console.log('Fetch SUCCESSED')
        dispatch({ 
          type: FETCH_COIN_DATA_SUCCESS,
          payload: res.data,
          payload2: false
        })
      })
      .catch(err => {
        console.log('Fetch FAILED')
        dispatch({
          type: FETCH_COIN_DATA_FAIL,
          payload: err.data,
          payload2: false
        })
      })
  }
}
