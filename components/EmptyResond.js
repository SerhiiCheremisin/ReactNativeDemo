import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Button, FlatList } from "react-native";

const EmptyRespond = () => {
    return(
        <View style={styles.content}>
            <Text style={styles.text}>There are no active tasks </Text>
        </View>
    )
}

export default EmptyRespond;

const styles = StyleSheet.create({
  content : {
    width: 400,
    alignItems: 'center',
    paddingTop: 30,
  },
  text : {
   fontSize: 30,
  }
})