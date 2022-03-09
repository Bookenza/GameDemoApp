/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState}  from 'react';

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
import GameScreen from './Screens/GameScreen';

function App()  {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
      setUserNumber(selectedNumber);
      setGuessRounds(0)
  };

  const gameOverHandler =  numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler}/>;
  if (userNumber && guessRounds <= 0) {
    content = <GameScreen/> 
  } else if (guessRounds > 0) {
     console.log('game over', userNumber)
  }

  return (

 <View style={styles.screen}>
    <Header title="Guess a Number" />
    {content}

 </View>

  )
   
};

const styles = StyleSheet.create({

  screen:{
    flex:1,

  },


});

export default App;
