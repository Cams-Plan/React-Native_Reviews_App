import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//Styles and Presentation
import * as Font from 'expo-font';
import { globalStyles } from './assets/styles/global';
// Navigation
import 'react-native-gesture-handler'
import Navigation from './navigation';


export default function App() {

  const [fontsLoaded] = Font.useFonts({
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf')
  });

  if (!fontsLoaded){
    return null
  }
  return (
    <Navigation/>
  );
}
