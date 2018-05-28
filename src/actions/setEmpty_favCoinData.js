import axios from 'axios'
import { COIN_GLOBAL_API_URL } from '../Utils/Constants'
import {
  SET_EMPTY_FAV_COIN_DATA
} from '../Utils/ActionTypes'

export default function setEmpty_favCoinData() {

  return dispatch => {
    dispatch({ 
      type: SET_EMPTY_FAV_COIN_DATA,
      payload: []
    
    })
  }
}
