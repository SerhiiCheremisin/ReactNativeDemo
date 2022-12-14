import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable, ScrollView, FlatList, useWindowDimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { randomSorterFunction } from '../../services/commonFunctions';
import { RootState, AppDispatch } from '../../redux/reduxStore';
import { IWordListItem } from '../../types/reduxTypes';

import WordSingleCard from './WordSingleCard';

interface WordCardsProps {
    current : IWordListItem
}

const WordCards = ( {current} : WordCardsProps ) => {

const dictionary = useSelector( (state:RootState) => state.wordsReducer.words);
const pace = useSelector( (state:RootState) => state.wordsReducer.pace);

const { height, width } = useWindowDimensions();

const [answers, setAnswers] = useState<IWordListItem[]>([]);

const ansverHandler = ():void => {
    const softerdArray:IWordListItem[] = [...dictionary].filter( el => el.word !== current?.word);
    const randomlyShuffeledArray:IWordListItem[] = randomSorterFunction(softerdArray);
    const questionsArray:IWordListItem[] = randomSorterFunction([...randomlyShuffeledArray.slice(0,3), ...[current]]);
    setAnswers(questionsArray);
}

useEffect(() => {
    ansverHandler();
},[])

useEffect(() => {
    ansverHandler();
}, [pace])

const customDirection = width >= 400 ? 
 {
    flexDirection: 'row'
 } 
:
 {
    flexDirection: 'column'
 }

    return(
        <View style={[ styles.root, customDirection ]}>
        {answers.length !== 0 && answers.map( (card:IWordListItem) => {
            return <WordSingleCard key = {card?.word} card={card}/>
        })}
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default WordCards;