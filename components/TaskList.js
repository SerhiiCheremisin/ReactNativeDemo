import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Button, FlatList } from "react-native";

const TaskList = (props) => {

  const { tasks, setTasks } = props;

  const deleteHandler = (task) => {
    const newStateArray = [...tasks].filter(element => element.id !== task.id);
    setTasks(newStateArray);
  }

  return(
    <View style={styles.taskWrapper}>
    <FlatList
     data={tasks}
     keyExtractor={item => item.id}
     renderItem={(itemData) => {
        return (
            <View style={styles.taskItem}>
            <Text style={styles.text}>{itemData.item.task}</Text>
            <Button onPress={() => deleteHandler(itemData.item)} title="DELETE" /> 
            </View>
        )
     }}
     />
    </View>
)
}
const styles = StyleSheet.create({
   taskWrapper : {
    width: 400,
    paddingTop: 10,
   },
   taskItem : {
    flexDirection: 'row',
     backgroundColor: 'teal',
     borderRadius: 25,
     marginBottom: 10,
     minHeight: 50,
     padding: 15,
     justifyContent: 'space-between',
     alignItems: 'center',
   },
   text: {
    color: 'white'
   }
})

export default TaskList;