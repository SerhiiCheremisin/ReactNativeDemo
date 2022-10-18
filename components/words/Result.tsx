import { StyleSheet, Text, View, Button, Pressable, ScrollView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setWords, setPace, setCorrect, setIncorrect, setGameStarted, setShuffled }  from '../../redux/reducers/wordsReducer';
import { AppDispatch, RootState } from '../../redux/reduxStore';

import { commonWrapper } from '../../services/commonStyles';



const Result = ():JSX.Element => {
    const correct = useSelector( (state:RootState) => state.wordsReducer.correctAnswers);
    const dispatch: AppDispatch = useDispatch();

    const resetHandler = ():void => {
        dispatch(setPace(0));
        dispatch(setCorrect(0));
        dispatch(setIncorrect(0));
        dispatch(setGameStarted(false));
    }
const respond = correct === 0 ? `You have 0% of right answers` : `You have ${correct}0% of right answers`;

    return(
        <View style={[styles.root, {backgroundColor: '#e8e1e9'}]}>
            <Text style={{fontSize: 25, marginBottom: 25}}>You have finished the trivia</Text>
            <Text style={{fontSize: 25, marginBottom: 25}}>{respond}</Text>
            <Button 
            onPress={resetHandler}
            title='Got it'/>
        </View>
    )
}

const styles = StyleSheet.create({
    root: commonWrapper
})

export default Result;