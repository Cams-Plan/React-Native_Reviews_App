import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../../assets/styles/global';

const ReviewDetails = ({ navigation, route }) => {

    const { title, rating, body } = route.params

  return (
    <View style={globalStyles.container} >
        <Text style={globalStyles.headerText} >{title}</Text>
        <Text style={styles.ReviewsRating} >{`Rating: ${rating}/5`}</Text>
        <Text style={styles.ReviewsBody} >{body}</Text>

        {/* <Button title="Pop Back Out of Stack" onPress={()=> navigation.pop() } /> */}
    </View>
  )
}

const styles = StyleSheet.create({
    ReviewsRating: {
        textAlign: "center",
        fontFamily: 'Nunito-Regular',
        fontSize: 17,
        marginBottom: 20
    },
    ReviewsBody: {
        textAlign: "center",
        fontFamily: 'Nunito-Regular',
        fontSize: 20,
    },
})

export default ReviewDetails;
