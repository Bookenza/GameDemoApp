import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
  
import DefaultStyles from '../constants/default-styles';

  const GameOverScreen = props => {

    return (

        <View style={styles.screen}>
           <Text style={DefaultStyles.title}>The Game is Over!</Text>
           <Image style={styles.image} source={require('../assets/gameover.png')}/>
	         <Text>Number of rounds: {props.roundsNumber}</Text>
	         <Text>Number was: {props.userNumber}</Text>
           <Button 
           title="NEW GAME" fontFamily= 'OpenSans-Bold' fontSize={18}
           onPress={props.onRestart}/>
            
        </View>

    );
 };


  const styles = StyleSheet.create({

    screen:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
    },
    
image:{
  resizeMode:'center',
  width:300,
  maxWidth:'80%',
  height:140,
  // width:'80%',
  // justifyContent:'center',
  // alignItems:'center',
}
});



  export default GameOverScreen;