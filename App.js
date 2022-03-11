/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState}  from 'react';
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';

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
import GameOverScreen from './Screens/GameOverScreen';

// const fetchFonts = () => {

//   return Font.loadAsync({
//     'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
//   });
// };


function App()  {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  // if (!dataLoaded) {
  //   return <AppLoading 
  //   // startAsync={fetchFonts} 
  //   onFinish={() => setDataLoaded(true)}
  //   onError={(err) => console.log(err)}
  // />  
  // }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
      setUserNumber(selectedNumber);
  };

  const gameOverHandler =  numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler}/>;
  // content = (
  //   <GameOverScreen 
  //   roundsNumber={1} 
  //   userNumber={1} 
  //   onRestart={configureNewGameHandler}
  //   />
  // );
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
    );
  } else if (guessRounds > 0) {
    // console.log('game over', userNumber)
    content = (
      <GameOverScreen 
      roundsNumber={guessRounds} 
      userNumber={userNumber} 
      onRestart={configureNewGameHandler}
      />
    );
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
