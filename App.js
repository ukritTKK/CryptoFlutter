import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native'
import { Provider } from 'react-redux'
import RootNavigator from './src/navigators/RootNavigator.js'
import Store from './src/Store.js'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={ {flex: 1} }>
          <StatusBar barStyle='light-content' backgroundColor='#00ACC1' />
          <RootNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
