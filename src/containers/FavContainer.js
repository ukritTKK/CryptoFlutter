import React from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList } from 'react-native'

import FavComponent from '../components/Fav'
import fetchCoinAPI from '../actions/fetchCoinAPI'
import setEmpty_favCoinData from '../actions/setEmpty_favCoinData'
import toggleFavourite from '../actions/toggleFavourite'

class FavContainer extends React.Component {
  
  componentDidMount () {
    // this.props.fetchCoinAPI()
    // this.props.setEmpty_favCoinData()
  }
  
  render () {

    return (
      <FavComponent {...this.props} />
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
  setEmpty_favCoinData,
  toggleFavourite
})(FavContainer)
