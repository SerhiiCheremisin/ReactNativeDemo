import { StyleSheet, Text, View, Button, Pressable, ScrollView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { setGameStarted } from '../../redux/reducers/wordsReducer';
import { RootState, AppDispatch } from '../../redux/reduxStore';


import { commonButton, buttonFontSize } from '../../services/commonStyles';

import ModalWordAdder from './ModalWordAdder';


const Dictionary = ():JSX.Element => {
   
    const dictionary = useSelector( (state:RootState) => state.wordsReducer.words);
    const dispatch:AppDispatch = useDispatch()

    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const modalHandler = (bool):void => {
        setIsModalOpen(bool);
    } 

    const triviaHandler = (bool):void  => {
      dispatch(setGameStarted(bool));
    }

    if (isModalOpen) {
        return <ModalWordAdder isVisible={isModalOpen} setModal = {modalHandler}/>
    }

    return(
        <View style={styles.dictionary}>
            <View style={styles.buttonWrapper}>
             <Pressable onPress={() => modalHandler(true)} style={styles.button}>
                <Text>Add a new word</Text>
              </Pressable>
             <Pressable style={styles.button} onPress={() => triviaHandler(true)}>
              <Text>Start a trivia</Text>
              </Pressable>
           </View> 
            <View style={styles.content}>
            <FlatList
           data={dictionary}
           keyExtractor={item => item.word}
           renderItem={(itemData) => {
           return(    
            <View style={styles.wordWrapper}>
            <Text style={styles.text}>{itemData.item.word}</Text>   
            <Text style={styles.text}>{itemData.item.translation}</Text> 
           </View>)
           }}
           />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dictionary : {
        flex: 1,
        paddingTop: 80,
        backgroundColor: 'black',
    },
    wordWrapper : {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 2,
        marginBottom: 10,
        backgroundColor: 'grey'
    },
    text:buttonFontSize,
    buttonWrapper : {
        marginBottom: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        backgroundColor: 'black'
    },
    button : commonButton,
    content: {
        flex: 5
    }
})

export default Dictionary;