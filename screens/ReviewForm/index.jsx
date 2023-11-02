import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { globalStyles } from '../../assets/styles/global'
import { Formik } from 'formik'

export default function ReviewForm({ addReview }) {
  return (
    
    <View style={globalStyles.container} >
      <Formik
        initialValues={{title: '', body: '', rating: ''}}
        validate={values => {
          const e = {};
          if (!values.title){
            e.title = 'Review Title Cannot Be Blank'
          } else if (!values.body) {
            e.body = 'Review Body Cannot Be Blank'
          } else if (values.rating > 5) {
            e.rating = "Ratings Must Be Between 1 & 5"
          }
          else if (!values.rating) {
            e.rating = "Ratings Cannot Be Blank"
          }
          return e
        }}
        onSubmit={(values, actions)=> { 
          actions.resetForm();
          addReview(values);
        }} >
          {(formikProps)=> (
            <View>
              <TextInput 
                style={globalStyles.input}
                placeholder='Review title'
                onChangeText={formikProps.handleChange('title')}
                value={formikProps.values.title} 
              />
              
              <TextInput 
                style={globalStyles.input}
                placeholder='Review body'
                onChangeText={formikProps.handleChange('body')}
                value={formikProps.values.body} 
              />
              <TextInput 
                style={globalStyles.input}
                keyboardType='numeric'
                placeholder='Rating (1-5)'
                onChangeText={formikProps.handleChange('rating')}
                value={formikProps.values.rating} 
              />
              <Text>{formikProps.errors.fields || formikProps.errors.rating || formikProps.errors.title}</Text>
              <Button title='submit' color='#c9743a' onPress={formikProps.handleSubmit} />
            </View>
          )}
      </Formik>
    </View>
  )
}
