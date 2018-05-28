import React from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList } from 'react-native'

import HomeComponent from '../components/Home'
import fetchCoinAPI from '../actions/fetchCoinAPI'
import fetchGlobalCoinAPI from '../actions/fetchGlobalCoinAPI'
import setEmpty_favCoinData from '../actions/setEmpty_favCoinData'
import getCoinData from '../actions/getCoinData'
import toggleFavourite from '../actions/toggleFavourite'
import setInitialFavBool from '../actions/setInitialFavBool'

class HomeContainer extends React.Component {
  
  componentDidMount () {
    this.props.fetchCoinAPI()
    this.props.fetchGlobalCoinAPI()
    setTimeout(() => {
      this.props.setInitialFavBool()
    }, 1500)
  }
  
  render () {
    let total_volume_24h = this.props.root.globalCoinData.total_24h_volume_usd

    return (
      <HomeComponent total_volume={total_volume_24h} {...this.props} />
    )
  }
}

function mapStateToProps(state) {
  return {
    root: state.root,
    fav: state.fav
  }
}

export default connect(mapStateToProps, {
  fetchCoinAPI,
  fetchGlobalCoinAPI,
  setEmpty_favCoinData,
  getCoinData,
  toggleFavourite,
  setInitialFavBool
})(HomeContainer)
