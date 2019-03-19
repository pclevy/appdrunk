import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, Image} from 'react-native';

export default class Presentation extends Component {
  render() {
    return (
      <View style={{
        //width: '98%',
        //height: '98%',
        flex: 1,
        //flexDirection: 'row',
        //flexDirection: 'column',
        //justifyContent: 'space-between',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff55',
        //borderColor: '#ff0000',
        //borderWidth: 2,
      }}>
        <Text style={{fontSize: 20, textAlign:'center'}}>Bem vindo ao{'\n'}React Native - 0.56!{'\n'}{'\n'}</Text>
        <View
          style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: '90%',
          height: 100,
          padding: 10,
          backgroundColor: 555,
          flex: 0.5,
          borderWidth: 1,
          }}>
          <Text style={{padding: 10, borderWidth:2}}>To get started, edit App.js</Text>
          <Text style={{padding: 10, borderWidth:2}}>versão 4</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{ }}>
            <Image source={require('../images/react-native-mini-logo.jpg')} />
          </View>
          <View style={{id:'bebum'}}>
            <Image source={require('../images/drunk3.gif')}/>
          </View>
        </View>
    
        
        <Button 
          title="Ir para Home"
          onPress={() => navigation.navigate('Home') }
          //onPress={() => {alert('Home');} }
          />


    </View>
    );
  }
}