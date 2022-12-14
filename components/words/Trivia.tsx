import { StyleSheet, Text, View, Button, Pressable, ScrollView, FlatList, useWindowDimensions } from 'react-native';
import { commonWrapper } from '../../services/commonStyles';
import { useSelector, useDispatch } from 'react-redux';
import { setGameStarted, setShuffled } from '../../redux/reducers/wordsReducer';
import { useEffect, useState } from 'react';
import { randomSorterFunction } from '../../services/commonFunctions';
import { RootState, AppDispatch } from '../../redux/reduxStore';

import WordCards from './WordCards';

const Trivia = ():JSX.Element => {
    const dictionary = useSelector( (state:RootState) => state.wordsReducer.words);
    const pace = useSelector( (state:RootState) => state.wordsReducer.pace);
    const shuffled = useSelector( (state:RootState) => state.wordsReducer.shuffeledWords);
    const isGameEnded = useSelector( (state:RootState) => state.wordsReducer.isGameStarted);

    const dispatch:AppDispatch = useDispatch();

    const { height, width } = useWindowDimensions();

    const shuffleThat = ():void => {
        const shuffle = randomSorterFunction(dictionary);
        dispatch(setShuffled(shuffle));
    }

    useEffect(() => {
        shuffleThat();
    }, [])

useEffect(() => {
    shuffleThat();
},[isGameEnded])

const customWidth = width >= 400 ? 10: 0; 

  const checkShuffle:string = shuffled !== undefined ? `Translate ${shuffled[pace]?.word} to English` : 'Something went wrong';

    return(
        <View style={[styles.root, {backgroundColor: 'teal', justifyContent: 'flex-start', paddingTop: customWidth}]}>
            <View style={{alignItems: 'center', marginBottom: 20}}>
            <Text style={{marginBottom: 10, fontSize: 25}}>Welcome to the trivia</Text>
            <Button onPress={() => dispatch(setGameStarted(false))} title='Cancel the trivia'/>
            </View>
           <View style={styles.triviaWrapper}>
           <Text style={{marginBottom: 10, fontSize: 25}}>{checkShuffle}</Text>
            {shuffled[pace] !== undefined && <WordCards current={shuffled[pace]}/>}
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root:commonWrapper,
    triviaWrapper: {

    },

})

export default Trivia;