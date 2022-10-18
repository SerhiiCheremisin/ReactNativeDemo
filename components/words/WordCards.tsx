import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable, ScrollView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { randomSorterFunction } from '../../services/commonFunctions';
import { RootState, AppDispatch } from '../../redux/reduxStore';
import { IWordListItem } from '../../types/reduxTypes';

import WordSingleCard from './WordSingleCard';

const WordCards = () => {

const dictionary = useSelector( (state:RootState) => state.wordsReducer.words);
const pace = useSelector( (state:RootState) => state.wordsReducer.pace);
const shuffled = useSelector( (state:RootState) => state.wordsReducer.shuffeledWords);

const [answers, setAnswers] = useState<IWordListItem[]>([]);

const answersHandler = ():void  => {
    const softerdArray:IWordListItem[] = [...dictionary].filter( el => el.word !== shuffled[pace]?.word);
    const randomlyShuffeledArray:IWordListItem[] = randomSorterFunction(softerdArray);
    const questionsArray:IWordListItem[] = randomSorterFunction([...randomlyShuffeledArray.slice(0,3), ...[shuffled[pace]]]);
    setAnswers(questionsArray);
}

useEffect(() => {
    answersHandler();
},[])

useEffect(() => {
    answersHandler();
}, [pace])

    return(
        <View style={styles.root}>
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