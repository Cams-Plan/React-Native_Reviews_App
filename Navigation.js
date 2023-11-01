import { createStackNavigator } from "@react-navigation/stack"; 
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer"
import 'react-native-gesture-handler'

import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Home, ReviewDetails, About } from './screens';
import { globalStyles } from "./assets/styles/global";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function LogoTitle({title}) {
    return (
        <View style={styles.header} >
            <Image
                style={{ width: 37, height: 37, marginRight: 12}}
                source={require('./assets/images/gameControl.png')}
            />
            <Text style={globalStyles.headerText}>{title}</Text>
        </View>
    );
  }

function DrawerGroup() {
    return (
      <Drawer.Navigator
        screenOptions={({ route })=> ({
        title: route.name == "Home" ? "Gamezone" : route.name,
        headerTitleAlign: "center"})}>
        <Drawer.Screen name="Home" component={Home} options={{headerTitle: (title)=> {return (<LogoTitle title={title.children} />)}}}/>
        <Drawer.Screen name="About" component={About} options={{headerTitle: (title)=> {return (<LogoTitle title={`${title.children} GameZone`} />)}}}/>
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

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center"
    }
})
