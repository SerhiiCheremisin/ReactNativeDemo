import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Button } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { setTodos } from "../../redux/reducers/todoReducer";

import { ITodo } from '../../types/reduxTypes';
import { RootState, AppDispatch } from "../../redux/reduxStore";

interface IModalTaskAdderProps {
  setModalInactive: Function,
  modalStatus: boolean
}

const ModalTaskAdder = ( {setModalInactive, modalStatus } : IModalTaskAdderProps ): JSX.Element => {
    const [taskText, setTaskTest] = useState<string>('');
    const todosList = useSelector( (state:RootState) => state.todoReducer.todos);
    const dispatch: AppDispatch = useDispatch();

    const sloseModal= ():void => {
        setModalInactive(false);
    }

    const addNewTask = ():void => {
      if (taskText === '') {
        const newTask : ITodo = {
          id: uuidv4(),
          task: 'You should add something next time'
        }
        dispatch(setTodos([...todosList, newTask]));
        setModalInactive(false);
        return
      }
      const newTask:ITodo = {
        id: uuidv4(),
        task: taskText
      }
      dispatch(setTodos([...todosList, newTask]));
      setModalInactive(false);
    }

    const onChangeTaskHandler = (text:string):void => {
      setTaskTest(text);
    }
    
    return(
           <Modal visible={modalStatus} animationType='slide'>
            <View style={styles.modalWrapper} >
            <View style={styles.textInput} >
             <TextInput value={taskText} onChangeText={onChangeTaskHandler} placeholder="Add a new Task"/>
            </View>
            <View style={styles.buttonsRow}>
             <Button onPress={addNewTask} title="Add a new Task"/>
             <Button onPress={sloseModal} title="Cancel"/>
            </View>
            </View>
          </Modal>
    )
}
const styles = StyleSheet.create({
  modalWrapper : {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
  },
  textInput: {
    width: 300,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    marginBottom: 25,
    borderBottomWidth: 1,
  },
  buttonsRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
})
export default ModalTaskAdder;

