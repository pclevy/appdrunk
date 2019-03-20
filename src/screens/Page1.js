// src/Page1.js

import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

//import {StackNavigator} from '../index.js';
export default class Page1 extends Component {
  static navigationOptions = {
    title: 'page1',
    headerRight:<View style={{flex:1, backgroundColor: 'black', height: 50}}><Text>HOME</Text></View>
  };
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
        <Button 
          title="Ir para About"
          onPress={() => this.props.navigation.navigate('About') }
        />
      </View>
    )
  }
};