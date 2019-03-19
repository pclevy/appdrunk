import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Presentation from './components/Presentation';

//import { createStackNavigator } from 'react-navigation';
//import { StackNavigator } from 'react-navigation';
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';

// export const StackNavigator = createStackNavigator({
//   Home: Page1,
//   About: Page2,
// });

//export const StackNavigator;

export default class App extends Component {
  componentDidMount(){
    //this.teste();
  }

  teste(){
    alert(Date.now());
  }

  render() {
    return (
      <View style={styles.container}>
        <Presentation/>
      </View>
  );
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
});

/* ****************** */
/*
import Page1 from './Page1';
import Page2 from './Page2';

import { createStackNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Home: Page1,
  About: Page2,
});

export default { StackNavigator };

*/
/* ****************** */
