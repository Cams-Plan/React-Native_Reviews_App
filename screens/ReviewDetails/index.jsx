import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export const ReviewDetails = ({ navigation }) => {
  return (
    <View>
        <Text>ReviewDetails</Text>
        <Button title="Review Nav" onPress={()=> navigation.navigate('Home') } />
    </View>
  )
}

