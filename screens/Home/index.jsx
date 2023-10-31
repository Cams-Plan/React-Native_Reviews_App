import React, { useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../../assets/styles/global';

const Home = ({ navigation}) => {

    const reviewsList = [
        {title: 'Zelda, Breathe of Fresh Air', rating: 5, body: "lorem ipsum", key: '1'},
        {title: 'Gotta Catch Them All (again)', rating: 4, body: "lorem ipsum", key: '2'},
        {title: 'Not So "Final" Fantasy', rating: 3, body: "Lorem ipsum dolor sit amet. Et deleniti architecto id nostrum cumque et accusamus numquam aut saepe tenetur sit repudiandae molestiae sed odit Quis. Nam eveniet doloremque quo alias iusto et ipsum eligendi ut sint dicta. Ea nihil perferendis eos pariatur odit aut minima omnis? Est quaerat quisquam et alias enim eum veritatis labore id eaque iusto ab mollitia dolore. Sit officiis velit in fugit architecto qui adipisci pariatur non eaque amet id doloribus vero id dolore voluptatem? Et odit cupiditate eum nihil impedit quo natus sint?At voluptatem culpa qui autem doloremque ea numquam molestias sit itaque voluptates eum libero maiores. Rem corporis enim rem velit velit est soluta saepe rem corrupti repudiandae qui quos culpa qui corrupti Quis vel sunt velit.", key: '3'},

    ]

    const [reviews, setReviews] = useState(reviewsList)

  return (
    <View style={globalStyles.container} >
            <FlatList
            data={reviews}
            renderItem={({ item })=> (
                <TouchableOpacity onPress={()=> navigation.push('ReviewDetails', item)} >
                    <Text style={globalStyles.text} >{item.title}</Text>
                </TouchableOpacity>
            )} />

    </View>
  )
}

export default Home
