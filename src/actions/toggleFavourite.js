export default function addToFav(itemId) {


  return (dispatch, getState) => {

    let coinData = getState().root.coinData
    let favCoinData = getState().fav.favCoinData

    for (i in coinData) {
      if (coinData[i].id === itemId) {
        if (coinData[i].is_favourite === false) {
          coinData[i].is_favourite = true
          favCoinData.push(coinData[i])
        }
        else if (coinData[i].is_favourite === true) {
          coinData[i].is_favourite = false
          for (j in favCoinData) {
            if (favCoinData[j].id === itemId) {
              favCoinData.splice(j, 1)
            }
          }
        }
        break
      }
    }

    dispatch({
      type: 'TOGGLE_FAV',
      payload: favCoinData,
      payload2: coinData
    }) 
  }

}
