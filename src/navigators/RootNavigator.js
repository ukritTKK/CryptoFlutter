import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

// import Home from '../components/Home'
import HomeContainer from '../containers/HomeContainer'
// import FavouriteList from '../components/Fav'
import FavContainer from '../containers/FavContainer'

let tabBarComponent = () => {
  return (
    <View style={styles.tabBarContainer}>
      <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
        {/* <TouchableWithoutFeedback onPress={onPressTabHome}>
          <Icon name='view-headline' size={25} color={homeIconColor} />
        </TouchableWithoutFeedback> */}
      </View>
      <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
        {/* <TouchableWithoutFeedback onPress={onPressTabStar}>
          <Icon name='star-border' size={25} color={starIconColor}/>
        </TouchableWithoutFeedback> */}
      </View>
    </View>
  )
}

export default TabNavigator(
  {
    Home: { 
      screen : HomeContainer
    },
    Fav: {
      screen : FavContainer
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `view-headline`
        } else if (routeName === 'Fav') {
          iconName = `star-border`
        }
        return <Icon name={iconName} size={25} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: '#E0F7FA',
      inactiveTintColor: '#B2EBF2',
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: '#26C6DA'
      }
    },
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true
  }
)

let styles = StyleSheet.create({
  tabBarContainer: {
    flex: 0.1,
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#4DD0E1'
  }
})