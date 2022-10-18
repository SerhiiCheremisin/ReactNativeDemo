import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView, Button, FlatList } from "react-native";
import { irregularList } from '../services/irregularList';

const IrregularWords = ():JSX.Element => {
    
    return(
        <ScrollView>
        <View style={styles.root}>
            <Text style={styles.header}>Irregular Slovenian words examples</Text>
            {
            irregularList.map(el => {
                return(
                    <View key={el.infinitiv} style={styles.irregularElement}>
                    <View><Text style={styles.text}>{el.infinitiv.toUpperCase()}</Text></View>
                    <View><Text style={styles.text}>{el.mutated.toUpperCase()}</Text></View>
                    <View><Text style={styles.text}>{el.means.toUpperCase()}</Text></View>
                    </View>
                )
            })
          }
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root : {
      paddingTop: 80,
      backgroundColor: 'grey',
      flex: 1,
      gap: 40,
    },
    irregularElement : { 
        borderBottomColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30,
        borderBottomWidth: 3
    },
    header : {
     fontSize: 25,
     textAlign: 'center',
     marginBottom: 15,
    },
    text: {
        fontSize: 15
    }
  })
  

export default IrregularWords;