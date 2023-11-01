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
            <Text style={{...globalStyles.headerText, textAlign: "left"}} >{title}</Text>
            <Text style={styles.ReviewsBody} >{body}</Text>
            <View style={styles.ratingContainer} >
                <Text style={styles.ReviewsRating} >{`Gamezone Rating:`}</Text>
                {starComparisonList.map((item, index)=> item <=rating ? <MaterialIcons name="star" size={24} color="#c9743add" key={index}/> : <MaterialIcons name="star-outline" size={24} color="#c9743add" key={index}/>)}
            </View>
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
        marginTop: 5,
        // textAlign: "center",
        fontFamily: 'Nunito-Regular',
        fontSize: 20,
    },
    ratingContainer: {
        borderTopWidth: 1.5,
        borderTopColor: "#00000015" ,
        paddingTop: 10,
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 5,
        alignItems: "center"
    }
})

export default ReviewDetails;
