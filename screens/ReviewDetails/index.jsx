import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../../assets/styles/global';
import Card from '../../components/Card';

const ReviewDetails = ({ navigation, route }) => {

    const { title, rating, body } = route.params

  return (
    <View style={globalStyles.container} >
        <Card>
            <Text style={globalStyles.headerText} >{title}</Text>
            <Text style={styles.ReviewsRating} >{`Rating: ${rating}/5`}</Text>
            <Text style={styles.ReviewsBody} >{body}</Text>
        </Card>
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
