
import React, {useReducer, useState}  from 'react';

import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
  } from 'react-native';
  

  import Card from '../components/Card';
  import Input from '../components/Input';
  import MainButton from '../components/MainButton';
  import NumberContainer from '../components/NumberContainer';
  import Colors from '../constants/colors';
  
  
const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {

        const choosenNumber =  parseInt(enteredValue);
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number has to be a number between 1 to 99.', [{text:'Okay', style:'destructive', onPress:resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(choosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if(confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                 <Text>You selected</Text>
                     <NumberContainer>{selectedNumber}</NumberContainer>
                     <MainButton onPress={() => props.onStartGame(selectedNumber)}>START GAME
                     </MainButton>
            </Card>
        )
    }

    return (
    
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <View style = {styles.screen}>
        <Text style = {styles.title}>Start a New Game!</Text>
        <Card style = {styles.inputContainer}>
            <Text>Select a Number</Text>
            <Input 
                style = {styles.input} 
                blurOnSubmit 
                autoCapitalize='none' 
                autoCorrect={false} 
                keyboardType="number-pad" 
                maxLength={2}
                onChangeText = {numberInputHandler}
                value = {enteredValue}
            />
            <View style = {styles.buttonContainer}>
                <View style = {styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.accent}/></View>
                <View style = {styles.button}><Button title="Confirm" onPress={confirmInputHandler}color={Colors.primary}/></View>
            </View>
        </Card>
        {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    );

};


const styles = StyleSheet.create({

    screen: {
        flex:1,
        padding:10,
        alignItems:'center',
    },
    title:{
        fontSize:20,
        marginVertical:15,
        fontFamily:'OpenSans-Bold'
    },

    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
    },

    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15,
    },

    button:{
      width:100,
    },

    buttonTitle:{
       fontFamily:'OpenSans-Bold',
        fontSize:20
      },
  
    input:{
        width:50,
        textAlign:'center'
      },

      summaryContainer:{
          marginTop:20,
          alignItems:'center',

      }

});


export default StartGameScreen;