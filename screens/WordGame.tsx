import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reduxStore';

//components
import Dictionary from '../components/words/Dictionary';
import Trivia from '../components/words/Trivia';
import Result from '../components/words/Result';

const WordGame = ():JSX.Element => {
   const isGameOn = useSelector( (state:RootState) => state.wordsReducer.isGameStarted);
   const pace = useSelector( (state:RootState) => state.wordsReducer.pace);
   
  if (!isGameOn) {
    return (
        <Dictionary/>
    )
  }
if (isGameOn && pace < 11) {
  return (
    <Trivia/>
)
}
 if(pace > 10) {
  return (
   <Result/>
  )
 }
    return(
    <View style={styles.root}>
     <Text>This is game page</Text>
    </View>
    )
}

const styles = StyleSheet.create({
  root : {
    paddingTop: 80,
    backgroundColor: 'grey',
    flex: 1,
  }
})

export default WordGame;