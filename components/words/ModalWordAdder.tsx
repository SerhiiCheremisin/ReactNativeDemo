import { StyleSheet, Text, View, Button, Pressable, Modal, SafeAreaView, TextInput, Alert, useWindowDimensions  } from 'react-native';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/reduxStore';
import { IWordListItem } from '../../types/reduxTypes';

import { setWords } from '../../redux/reducers/wordsReducer';

import { commonButton, commonWrapper, buttonFontSize } from '../../services/commonStyles';

interface IModalWordAdderProps {
    setModal : Function,
    isVisible: boolean
}

const ModalWordAdder = ( { setModal, isVisible }: IModalWordAdderProps) => {
  const dictionary = useSelector( (state:RootState) => state.wordsReducer.words);
  const dispatch:AppDispatch = useDispatch();
  const [sloWord, setSloWord] = useState<string>('');
  const [engWord, setEngWord] = useState<string>('');

  const { height, width } = useWindowDimensions();

  const widthModal = width>=400 ? 5 : 0

  const sloHandler = (text:string):void => {
    setSloWord(text);
  }

  const engHandler = (text:string): void => {
    setEngWord(text);
}

const heplButtonsHandler = (symbol:string):void => {
    const newState = `${sloWord}${symbol}`;
    setSloWord(newState)
}

const aderHandler = ():void => {
   if (sloWord === '' || engWord === '') {
    Alert.alert(
        'All fields should be filled',
        'Please fill all fields to add a new word'
    )
   }
   if (dictionary.some( item => item.word === sloWord.toLowerCase() ) 
   || dictionary.some( item => item.translation === engWord.toLowerCase() )) {
    Alert.alert(
        'Such word already exist',
        'Such word already exist in the dictionary, please. add new unique word'
    )
   }

   const newWord:IWordListItem = {
    word: sloWord,
    translation: engWord
   }
  dispatch(setWords( [...dictionary, ...[newWord]] ) );
  setModal(false);
}

    return(
        <Modal visible={isVisible} animationType='slide'>
            <View style={[styles.root, {backgroundColor: '#e1e9e8', paddingTop: widthModal}]}> 
            <Text style={styles.text}>Add a new word</Text>
            <SafeAreaView>
               <TextInput 
               style={styles.input} 
               placeholder="Word in SLO"
               onChangeText={sloHandler}
               value={sloWord}
               /> 
                  <TextInput 
               style={styles.input} 
               placeholder="Word in ENG"
               value={engWord}
               onChangeText={engHandler}
               /> 
            </SafeAreaView>
            <View style={styles.helpButtons}>
            <Pressable
            style={[commonButton, styles.additionalButtonStyles]}
            onPress={ () => heplButtonsHandler('??') }><Text style={styles.text}>??</Text></Pressable>
            <Pressable
             style={[commonButton, styles.additionalButtonStyles]}
            onPress={ () => heplButtonsHandler('??') }><Text style={styles.text}>??</Text></Pressable>
            <Pressable
             style={[commonButton, styles.additionalButtonStyles]}
            onPress={ () => heplButtonsHandler('??') }><Text style={styles.text}>??</Text></Pressable>
            </View>
            <Pressable
            style={styles.button}
            onPress={ aderHandler }><Text>Add a new word</Text></Pressable>
            <Button
            onPress={ () => setModal(false) }
            title='Close modal'/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
   root: commonWrapper,
   input : {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200
   },
   button: commonButton,
   additionalButtonStyles : {
    width: 55, 
    height: 55, 
    backgroundColor: 'blue'
   },
   helpButtons : {
      width: 200,
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
text : buttonFontSize
    
})

export default ModalWordAdder;