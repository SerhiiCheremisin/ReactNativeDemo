import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { setTodos } from '../redux/reducers/todoReducer';
import { useSelector, useDispatch } from 'react-redux';

import ModalTaskAdder from '../components/todo/ModalTaskAdder';
import TaskList from '../components/todo/TaskList';
import EmptyRespond from '../components/todo/EmptyResond';

import { commonWrapper } from '../services/commonStyles';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { setStorageValue, getStorageValue } from '../services/storageAPI';

import { RootState, AppDispatch } from '../redux/reduxStore';

const Todo = ():JSX.Element =>  {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const todosList = useSelector( (state:RootState) => state.todoReducer.todos)
  const dispatch:AppDispatch = useDispatch();

  useEffect(() => {
    setStorageValue('todoList', JSON.stringify(todosList))
  }, [todosList])

useEffect(() => {
  getStorageValue('todoList')
  .then( todos => dispatch(setTodos(JSON.parse(todos))))
  .catch( error => {
    console.log(error.error)
  })
 },[])

 useEffect(() => {
  getStorageValue('todoList')
  .then(todos => console.log(JSON.parse(todos)))
  .catch( error => {
    console.log(error.error)
 })
})

  const modalOpener = ():void => {
    setIsModalOpen(true);
  }

  return (
    <View style={[styles.root,  {backgroundColor: '#212121'}]}>
       {isModalOpen && <ModalTaskAdder modalStatus={isModalOpen} setModalInactive={setIsModalOpen}/>}
       <View style={styles.taskAdder}> 
         <Button onPress={modalOpener} title='Add a new task'/>
        </View>
      <View style={styles.mainContent}>
       {todosList.length === 0 ? <EmptyRespond/> : <TaskList/>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: commonWrapper, 
   taskAdder : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   mainContent: {
    backgroundColor: 'white',
    flex: 5,
  },
});

export default Todo;