import React , {useState, useRef, useEffect} from 'react';
import {StyleSheet,Button, View, Text, Alert, ScrollView, Dimensions} from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import DefaultStyles from '../constants/default-styles';
import MainButton from '../components/MainButton';


const generateRandomBetween = (min, max, exlude) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    const rndNum = Math.floor(Math.random() * (max- min)) + min;
    if (rndNum === exlude) {
        return generateRandomBetween(min,max, exlude);
    } else {
        return rndNum;
    }
}

const renderListItem = (value, numOfRund) => (
<View key={value} style={styles.listItem}>
<Text>#{numOfRund}</Text>
<Text>{value}</Text>
</View>);

  const GameScreen = props => {

    const initialGuess =  generateRandomBetween(1, 100, props.userChoice)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    // const [rounds, setRounds] = useState(0);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const {userChoice, onGameOver} = props;

    useEffect(() => {
        if (currentGuess === props.userChoice) {
            props.onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if (
            (direction === 'lower' && currentGuess < props.userChoice) || 
            (direction === 'greater' && currentGuess > props.userChoice)
        ) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong....', [
                {text:'Sorry!', style:'cancel'}
            ]);
            return;
        }

        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1 ;
        }
           
        const nextNumber = generateRandomBetween(currentLow.current,  currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        // setRounds(currRounds => currRounds + 1)
        setPastGuesses(currPastGuesses => [nextNumber, ...currPastGuesses]);
    };

    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this,'lower')}/>
                <Button title="GREATER" onPress={nextGuessHandler.bind(this,'greater')}/>
                {/* <MainButton onPress={nextGuessHandler.bind(this,'lower')}>LOWER</MainButton>
                <MainButton onPress={nextGuessHandler.bind(this,'greater')}>GREATER</MainButton> */}
            </Card>
            <View style={styles.list}>
            <ScrollView>
                {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length-index))}
            </ScrollView>
            </View>
        </View>
    );
 };


  const styles = StyleSheet.create({

    screen:{
       flex:1,
       padding:10,
       alignItems:'center',
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:Dimensions.get('window').height > 600 ? 20 : 5,
        width:300,
        maxWidth:'80%'
    },
    list:{        
        width:'80%',
    },
    listItem:{
        borderColor:'#ccc',
        borderWidth:1,
        padding:15,
        marginVertical:5,
        backgroundColor:'white',
        flexDirection:'row',
        borderRadius:5,
        justifyContent:'space-around',
        // width:'80%',

    },
});



  export default GameScreen;