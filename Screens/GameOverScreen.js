import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
  
import DefaultStyles from '../constants/default-styles';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

  const GameOverScreen = props => {

    return (

        <View style={styles.screen}>
           <Text style={DefaultStyles.title}>The Game is Over!</Text>
           <Image style={styles.image} source={require('../assets/gameover.png')}/>
           {/* <Image style={styles.image} source={{uri:'https://cdn.pixabay.com/photo/2020/10/15/07/00/game-over-5656173_1280.jpg'}}/> */}
	         {/* <Text>Number of rounds: {props.roundsNumber}</Text>
	         <Text>Number was: {props.userNumber}</Text> */}
           <Text style={styles.descText}>
             Your phone needed <Text style={styles.highlights}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlights}>{props.userNumber}</Text>
            </Text>
             <MainButton fontFamily= 'OpenSans-Bold' fontSize={18}
           onPress={props.onRestart}>NEW GAME</MainButton>

           {/* <Button 
           title="NEW GAME" fontFamily= 'OpenSans-Bold' fontSize={18}
           onPress={props.onRestart}/> */}
            
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
  width:'80%',
  maxWidth:'80%',
  height:'30%',
  // width:'80%',
  // justifyContent:'center',
  // alignItems:'center',
},
highlights: {
  color:Colors.primary,
  fontSize:16,
  fontFamily:'OpenSans-Bold',
},
descText:{
  paddingVertical:30,
paddingHorizontal:10,
},




});



  export default GameOverScreen;