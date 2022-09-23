import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Button } from "react-native";

const ModalTaskAdder = (props) => {
    const {setModalInactive, modalStatus, setTasks} = props;
    const [taskText, setTaskTest] = useState('');

    const sloseModal= () => {
        setModalInactive(false);
    }

    const addNewTask = () => {
      if (taskText === '') {
        const newTask = {
          id: uuidv4(),
          task: 'You should add something next time'
        }
        setTasks(current => [...current, newTask]);
        setModalInactive(false);
        return
      }
      const newTask = {
        id: uuidv4(),
        task: taskText
      }
      setTasks(current => [...current, newTask]);
      setModalInactive(false);
    }

    const onChangeTaskHandler = (text) => {
      setTaskTest(text);
    }
    
    return(
           <Modal visible={modalStatus} animated='slide'>
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

