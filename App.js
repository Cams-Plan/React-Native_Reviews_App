import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { globalStyles } from './assets/styles/global';
// Navigation
import { createStackNavigator } from "@react-navigation/stack"; 
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer"
import 'react-native-gesture-handler'

import { Home, ReviewDetails } from './screens';



const Stack = createStackNavigator()

export default function App() {

  const [fontsLoaded] = Font.useFonts({
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf')
  });

  if (!fontsLoaded){
    return null
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: "Gamezone"}} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={({ route })=> ({ title: `Review: '${route.params.title}'`, headerStyle: {backgroundColor: '#c9743add'}, headerTintColor: '#fff7f2' })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
