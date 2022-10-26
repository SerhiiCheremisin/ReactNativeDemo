import { StyleSheet, Text, View, Button, Pressable, ScrollView, FlatList, useWindowDimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setPace, setCorrect, setIncorrect, setGameStarted, setShuffled }  from '../../redux/reducers/wordsReducer';
import { IWordListItem } from '../../types/reduxTypes';
import { RootState, AppDispatch } from '../../redux/reduxStore';

interface IWordSingleCardProps {
   card: IWordListItem
}

const WordSingleCard = ( { card } : IWordSingleCardProps ):JSX.Element => {

    const dispatch = useDispatch();
    
    const shuffled = useSelector( (state:RootState) => state.wordsReducer.shuffeledWords);
    const pace = useSelector( (state:RootState) => state.wordsReducer.pace);
    const correct = useSelector( (state:RootState) => state.wordsReducer.correctAnswers);
    const incorrect = useSelector( (state:RootState) => state.wordsReducer.incorrectAnswers);

    const { height, width } = useWindowDimensions();

    const cardArea = width >= 400 ? 
    {
      width: 200,
      height: 150,
    } 
     : 
    {
      width: 300,
      height: 100,
    };

    const respondLogic = (bool:boolean):void => {
       const correctCheck = () => {
        return bool ? dispatch(setCorrect(correct + 1)) : dispatch(setIncorrect(incorrect + 1));
       } 
       correctCheck(); 
       dispatch(setPace(pace + 1));
    }

    const answerHandler = () => {
        if (shuffled[pace].translation === card.translation) {
           return respondLogic(true);
        }
        return respondLogic(false);
    }

   return(
    <Pressable onPress={() => answerHandler()} style={[styles.root, cardArea]}>
        <Text style={{ fontSize: 30}}>{card?.translation.toLocaleLowerCase()}</Text>
    </Pressable>
   )
}

const styles = StyleSheet.create({
  root : {
     borderWidth: 2,
     justifyContent: 'center',
     alignItems: 'center',
     marginBottom: 20
  }
})

export default WordSingleCard;