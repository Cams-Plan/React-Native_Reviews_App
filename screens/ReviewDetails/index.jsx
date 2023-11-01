import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../../assets/styles/global';
import Card from '../../components/Card';
import { MaterialIcons } from '@expo/vector-icons';

const ReviewDetails = ({ navigation, route }) => {

    const { title, rating, body } = route.params
    const starComparisonList = [1,2,3,4,5];

  return (
    <View style={globalStyles.container} >
        <Card>
            <Text style={globalStyles.headerText} >{title}</Text>
            <View style={styles.ratingContainer} >
                <Text style={styles.ReviewsRating} >{`Gamezone Rating:`}</Text>
                {starComparisonList.map((item, index)=> item <=rating ? <MaterialIcons name="star" size={24} color="#c9743add" key={index}/> : <MaterialIcons name="star-outline" size={24} color="#c9743add" key={index}/>)}
            </View>
            
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
        marginRight: 3,
        fontStyle: "italic",
    },
    ReviewsBody: {
        textAlign: "center",
        fontFamily: 'Nunito-Regular',
        fontSize: 20,
    },
    ratingContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
        alignItems: "center"
    }
})

export default ReviewDetails;
