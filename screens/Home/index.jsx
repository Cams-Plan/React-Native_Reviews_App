import React, { useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../../assets/styles/global';
import Card from '../../components/Card';

const Home = ({ navigation}) => {

    const reviewsList = [
        {
          title: 'Zelda, Breathe of Fresh Air', 
          rating: 5, 
          body: "This game was indeed a 'Breathe of Fresh Air'. The movement is crisp, the content is long but engaging, and more importantly, the game is FUN.\n\nEven when sections become a little long-winded, the rewards that follow the hard graft make it all worthwhile. A MUST BUY!", 
          key: '1'
        },
        {
          title: 'Gotta Catch Them All (again)', 
          rating: 4, 
          body: "I never get tired of catching them all, I've played this game three times for good measure.\n\nThe only thing holding it back is the quality of the post-game content. It felt quite rushed, but is an otherwise solid game.", 
          key: '2'
        },
        {
          title: 'Not So "Final" Fantasy', 
          rating: 3, 
          body: "This game is ironically as the title suggests 'not so final', as the levels and story dragged on at points.\n\nHowever, the short-mid-length sections had a great cadence that I wish the longer levels had more of.\n\nIf you're good with more tedius games, this might be the pick-up for you.", 
          key: '3'
        },
        {
          title: 'Syphon Unfiltered', 
          rating: 4, 
          body: "A great fan-made remake of the underrated PS1 classic 'Syphon Filter'.\n\nThe graphical improvements from the 90s are apparent from the beginning, and suprisingly still provide that nostalgic feel.\n\nThe weapon variety has improved along with the adition of customisability is a nice touch, especially for the fan-favourite tazor which is back and lethal as ever.\n\nI look forward to the map expansions in the near future, but until then, I highly recommend checking this one out.", 
          key: '4'
        },
        {
          title: 'Fate: You Can\'t Stay The Night', 
          rating: 4, 
          body: "I'm going to jump the gun a little bit here and say that this game is CULT CLASSIC MATERIAL.\n\nThis game is in its infancy but the combat, storytelling, and graphics are top-notch quality. The gripping story will have you immersed in every characters journey, which is perfect with the variety of character routes available.\n\nI for one cannot wait for the multiplayer integration next month! I highly suggest picking this game up now and perfecting your skills early in time for the multiplayer release.", 
          key: '5'
        },
        {
          title: 'The Credibles', 
          rating: 1,
          body: "I had high hopes for this game, but it missed the mark on so many levels. Particularly the story and combat, which is basically the main premise of the game.\n\nThe story missed key elements of the film. Instead opting to focus on insignificant story elements that fans really could've done without.\n\nThe combat is way too simple, to the point that it exacerbated the insignificance of the section I was on.\n\nThis game really isn't worth picking up, even as a 'pass the time' game.\nSave your money.", 
          key: '6'
        },
    ]

    const [reviews, setReviews] = useState(reviewsList)

  return (
    
    <View style={globalStyles.container} >
      <FlatList
      data={reviews}
      renderItem={({ item })=> (
        <TouchableOpacity onPress={()=> navigation.push('ReviewDetails', item)} >
          <Card>
            <Text style={globalStyles.text} >{item.title}</Text>
          </Card>
        </TouchableOpacity>
      )} />
    </View>
  )
}
const styles = StyleSheet.create({

})

export default Home
