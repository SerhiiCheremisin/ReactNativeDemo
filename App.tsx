import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Provider } from 'react-redux';
import  reduxStore from './redux/reduxStore';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Todo from './screens/Todo';
import WordGame from './screens/WordGame';
import IrregularWords from './screens/IrregularWords';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <Provider store={reduxStore}>
      <NavigationContainer>
      <StatusBar style='light'/>
        <Tab.Navigator screenOptions={({route}) => ({
          headerShown: false,
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'red',
        })} >
          <Tab.Screen name="Todo" component={Todo} options={{ tabBarIcon: () => {
             return(
              <View style={styles.tabItem}>
              <Image
              source={require('./assets/icons/todo.png')}
              resizeMode = 'contain'
              style= {styles.image}
              />
              </View>
             ) 
          } }}/>
          <Tab.Screen name="Game" component={WordGame} options={{tabBarIcon : () => {
              return(
                <View style={styles.tabItem}>
                 <Image
                   source={require('./assets/icons/game.png')}
                   resizeMode = 'contain'
                   style= {styles.image}
                      />
                 </View>
                         ) 
          }}} />
           <Tab.Screen name="Irregulars" component={IrregularWords} options={{tabBarIcon : () => {
              return(
                <View style={styles.tabItem}>
                 <Image
                   source={require('./assets/icons/irregular.png')}
                   resizeMode = 'contain'
                   style= {styles.image}
                      />
           </View>
                    ) 
          }}} />
          
        </Tab.Navigator>
      </NavigationContainer>
     </Provider>
  );
}


const styles = StyleSheet.create({
   tabItem: {
    width: 70,
    height: 35,
   },
   image: {
    width: 35,
    height: 35,
    marginLeft: 20,
   }
});
