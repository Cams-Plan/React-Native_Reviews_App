import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

const Home = ({ navigation}) => {
  return (
    <View>
        <Text>Home</Text>
        <Button title="Reviews" onPress={()=> navigation.navigate('Reviews') } />
    </View>
  )
}

export default Home
