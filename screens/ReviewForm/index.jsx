import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { globalStyles } from '../../assets/styles/global'
import { Formik } from 'formik'
import * as yup from "yup"
import { CustomButton } from "../../components"

const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(3),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is number 1-5', 'Rating Must Be 1-5', (val) => {
      return parseInt(val) > 0 && parseInt(val) < 6;
    })

})

export default function ReviewForm({ addReview }) {
  return (
    
    <View style={globalStyles.container} >
      <Formik
        initialValues={{title: '', body: '', rating: ''}}
        validationSchema={reviewSchema}
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
                onBlur={formikProps.handleBlur('title')}
              />
              <Text style={globalStyles.errorText} >{formikProps.touched.title && formikProps.errors.title }</Text>
              <TextInput 
                multiline={true}
                style={globalStyles.input}
                placeholder='Review body'
                onChangeText={formikProps.handleChange('body')}
                value={formikProps.values.body}
                onBlur={formikProps.handleBlur('body')}
              />
              <Text style={globalStyles.errorText} >{formikProps.touched.body && formikProps.errors.body}</Text>
              <TextInput 
                style={globalStyles.input}
                keyboardType='numeric'
                placeholder='Rating (1-5)'
                onChangeText={formikProps.handleChange('rating')}
                value={formikProps.values.rating}
                onBlur={formikProps.handleBlur('rating')}
              />
              <Text style={globalStyles.errorText} >{formikProps.touched.rating && formikProps.errors.rating}</Text>
              <CustomButton text={'submit'} onPress={formikProps.handleSubmit} />
            </View>
          )}
      </Formik>
    </View>
  )
}
