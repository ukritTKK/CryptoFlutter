import React from 'react'
import { StyleSheet, View, Text, FlatList, ActivityIndicator,
  TouchableHighlight, TouchableWithoutFeedback } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import numeral from 'numeral'

class FavouriteList extends React.Component {

  render () {

    let Header = () => {
      return (
        <View>
          <Text>Favourite List</Text>
        </View>
      )
    }

    renderSeparator = () => {
      return (
        <View 
          style={{
            backgroundColor: '#ededed',
            height: 1,
            width: '90%',
            alignSelf: 'center'
          }}
        />
      )
    }

    renderEmptyList = () => {
      return (
        <View 
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 540,
            backgroundColor: '#dbdbdb'
          }}
        >
          <Text style={{flex: 1, fontSize: 20, fontWeight: 'bold', color: '#a8a8a8'}}>No favourited Crypto</Text>
        </View>
      )
    }

    renderListItem = (item) => {
      let pricechange24h_color = item.percent_change_24h >= 0 ? 'green': 'red'
      let star_shape = item.is_favourite === true ? 'star': 'star-border'
      let favourite_color = item.is_favourite === true ? '#fcc70a': '#cccccc'

      let market_cap = numeral(item.market_cap_usd).format('0,0.00')
      let price = numeral(item.price_usd).format('0,0.00')

      onStarPress = () => {
        this.props.toggleFavourite(item.id)
      }

      onRightArrowPress = () => {
        console.log('PRESSEDDDDDDDDDDDDDDDD')
      }

      return (
        <View style={styles.list_container_each}>
          <Text style={{flex: 0.2}}>#{item.rank}</Text>
          <View style={{flex: 0.6, flexDirection: 'column'}}>
            <Text style={{flex: 0.2, fontSize: 18, fontWeight: 'bold'}}>{item.name}</Text>
            <Text style={{flex: 0.2}}>{market_cap} USD</Text>
            <View style={{flex: 0.2, flexDirection: 'row'}}>
              <Icon style={{flex: 0.1, alignSelf: 'center'}} name={'attach-money'} size={16}/>
              <Text style={{flex: 0.9}}>{price} / 1 {item.symbol}</Text>
            </View>
            <View style={{flex: 0.2, flexDirection: 'row'}}>
              <Icon style={{flex: 0.1, alignSelf: 'center'}} name={'access-time'} size={16}/>
              <Text style={{flex: 0.9, color: pricechange24h_color}}>{item.percent_change_24h}%</Text>
            </View>
          </View>
          <View  style={{flex: 0.2, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
            <TouchableWithoutFeedback onPress={onStarPress} underlayColor={'#ffe37f'} delayPressIn={0}>
              <Icon name={star_shape} size={22} style={{color: favourite_color}}/>
            </TouchableWithoutFeedback>
          </View>
          <TouchableHighlight onPress={onRightArrowPress} underlayColor={'#e8e8e8'} style={{flex: 0.15, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
            <Icon name={'keyboard-arrow-right'} size={28} />
          </TouchableHighlight>
        </View>
      )
    }

    let styles = StyleSheet.create({
      list_container: {
        flex: 1.1,
        marginTop: 20
      },
      list_container_each: {
        flex: 1,
        margin: 5,
        flexDirection: 'row'
      }
    })

    return (
      <View style={ { flex: 1, flexDirection: 'column'} }>
        <Header style={{flex:0.1}}/>
        <View style={styles.list_container}>
          <FlatList
            style={{flex: 1, flexDirection: 'column'}}
            data={this.props.fav.favCoinData}
            keyExtractor={(item, index) => item.id}
            renderItem={ ( {item} ) => ( renderListItem(item) )
            }
            ItemSeparatorComponent={renderSeparator}
            ListEmptyComponent={renderEmptyList}
          />
        </View>
      </View>
    )

  }
}

export default FavouriteList
