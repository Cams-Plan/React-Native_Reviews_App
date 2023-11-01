import { createStackNavigator } from "@react-navigation/stack"; 
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer"
import 'react-native-gesture-handler'

import { View, Text } from 'react-native'
import React from 'react'
import { Home, ReviewDetails, About } from './screens';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerGroup() {
    return (
      <Drawer.Navigator
      screenOptions={({ route })=> ({
        title: route.name == "Home" ? "Gamezone" : route.name,
        headerTitleAlign: "center"
      })}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    );
  }
  
function HomeStackGroup() {
    return(
      <Stack.Navigator >
        <Stack.Screen name="HomeNav" component={DrawerGroup} options={{headerShown: false}}/>
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={({ route })=> ({ title: `Review: '${route.params.title}'`, headerStyle: {backgroundColor: '#c9743add'}, headerTintColor: '#fff7f2' })} />
      </Stack.Navigator>
    )
  }


export default function Navigation() {
  return (
    <NavigationContainer>
        <HomeStackGroup />
    </NavigationContainer>
  )
}
