// src/Page1.js

import React from 'react';
import { View, Button, Text } from 'react-native';

//import {StackNavigator} from '../index.js';

const Page1 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home</Text>
    <Button 
      title="Ir para About"
      onPress={() => navigation.navigate('Page2') }
    />
  </View>
);

Page1.navigationOptions = {
  title: 'Home',
}

export default Page1;