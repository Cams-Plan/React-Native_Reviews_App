import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} >
        <View style={styles.button} >
            <Text style={styles.buttonText} >{ text }</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#c9743a',
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Nunito-SemiBold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})
