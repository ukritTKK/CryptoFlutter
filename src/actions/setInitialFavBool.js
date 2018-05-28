import {
  FETCHING_COIN_DATA
} from '../Utils/ActionTypes'

export default function setInitialFavBool() {

  return (dispatch, getState) => {

    let coinData = getState().root.fetchCoinData
    for (i in coinData) {
      coinData[i].is_favourite = false
    }


    dispatch({
      type: 'SET_INITIAL_FAV_BOOL',
      payload: coinData
    }) 
  }

}
