import {
  FETCHING_COIN_DATA
} from '../Utils/ActionTypes'

export default function getCoinData(itemId) {
  console.log('itemId: ' + itemId)


  return (dispatch, getState) => {

    let state = getState().root.coinData
    let returnCoinData
    for (i in state) {
      if (state[i].id === itemId) {
        returnCoinData = state[i]
      }
    }

    dispatch({
      type: 'GET_SINGLE_COIN_DATA',
      payload: returnCoinData
    }) 
  }

}
