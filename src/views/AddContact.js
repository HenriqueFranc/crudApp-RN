import { View, Text } from 'react-native'
import React from 'react'
import Register from '../components/Register'
import styles from '../style/style'

const AddContact = (props) => {
  return (
    <View style={styles.formContainer}>
      <Register></Register>
    </View>
  )
}

export default AddContact