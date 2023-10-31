import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export const ReviewDetails = ({ navigation }) => {
  return (
    <View>
        <Text>ReviewDetails</Text>
        <Button title="Pop Back Out of Stack" onPress={()=> navigation.pop() } />
    </View>
  )
}

