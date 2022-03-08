/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component}  from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';


import Header from './components/Header';
import StartGameScreen from './Screens/StartGameScreen';

function App()  {

  return (

 <View style={styles.screen}>
    <Header title="Guess a Number" />
    <StartGameScreen />

 </View>

  )
   
};

const styles = StyleSheet.create({

  screen:{
    flex:1,

  },


});

export default App;
