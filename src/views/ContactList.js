import { View, Text,Button} from 'react-native'
import React from 'react'
import People from '../components/People'
import styles from '../style/style'

const ContactList = (props) => {

  const {navigation} = props

  return (
    <View style={styles.app}>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
        <Text style={{fontSize: 30, padding: 10 ,color:'white'}}>Contact List</Text>
        <View>
          <Button 
            onPress={()=>navigation.navigate('Add_Contact')}
            title='Add Contact' />
        </View>
      </View>
      <People></People>
    </View>
  )
}

export default ContactList