import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Button, FlatList, useWindowDimensions } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { setTodos } from "../../redux/reducers/todoReducer";

import { RootState, AppDispatch } from "../../redux/reduxStore";

const TaskList = ():JSX.Element => {

  const todosList = useSelector( (state:RootState) => state.todoReducer.todos);
  const dispatch:AppDispatch = useDispatch();

  const { width, height } = useWindowDimensions();

  const deleteHandler = (taskId:string):void => {
    const newStateArray = [...todosList].filter(element => element.id !== taskId);
    dispatch(setTodos(newStateArray));
  }

  const listWidth = width >= 400 ? 800 : 400;

  return(
    <View style={[styles.taskWrapper, , {width: listWidth}]}>
    <FlatList
     data={todosList}
     keyExtractor={item => item.id}
     renderItem={(itemData) => {
        return (
            <View style={styles.taskItem}>
            <Text style={styles.text}>{itemData.item.task}</Text>
            <Button onPress={() => deleteHandler(itemData.item.id)} title="DELETE" /> 
            </View>
        )
     }}
     />
    </View>
)
}
const styles = StyleSheet.create({
   taskWrapper : {
    paddingTop: 10,
    paddingHorizontal: 10,
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