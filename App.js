import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ModalTaskAdder from './components/ModalTaskAdder';
import TaskList from './components/TaskList';
import EmptyRespond from './components/EmptyResond';

export default function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState ([]);
  useEffect(() => {
    console.log(tasks)
  })

  const modalOpener = () => {
    setIsModalOpen(true);
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light'/>
       {isModalOpen && <ModalTaskAdder setTasks={setTasks} modalStatus={isModalOpen} setModalInactive={setIsModalOpen}/>}
       <View style={styles.taskAdder}> 
         <Button onPress={modalOpener} title='Add a new task'/>
        </View>
      <View style={styles.mainContent}>
       {tasks.length === 0 ? <EmptyRespond/> : <TaskList tasks = {tasks} setTasks= {setTasks} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
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
