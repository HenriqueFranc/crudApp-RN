import { View, Text,Button } from 'react-native'
import React,{useContext,useState} from 'react'
import { contextContact } from '../contextContact'
import { useEffect } from 'react/cjs/react.development'
import styles from '../style/style'

const Contact_Info = ({route, navigation}) => {

  const {id} = route.params

  const {data,setData} = useContext(contextContact)
  
  const [contact,setContact] = useState({})
  
  // Pushing de data contact from a server/database
  const fetchContact = ()=>{
    const result = data.filter((person)=> id == person.id)
    setContact(result[0])
  }

  const handleSubmit = ()=>{
    const result = data.filter((person)=> id !== person.id )
    setData(result)
    navigation.goBack()
  }
  useEffect(()=>{
    fetchContact()
    return ()=>{
      setContact({})
    }
  },[])

  return (
    <View style={styles.contactInfo}>
      <Text style={styles.textInfo}>Contact Info</Text>
      <Text style={styles.textInfo}>Name: {contact.name}</Text>
      <Text style={styles.textInfo}>Email: {contact.email}</Text>


      
      <View style={{flexDirection: 'row', margin: 50}}>
        <View style={{marginHorizontal: 20}}>
          <Button color={'red'} title='Delete Contact' onPress={()=>handleSubmit()}/>
        </View>
        <View style={{marginHorizontal: 20}}>
          <Button color={'green'} title='Update' onPress={()=>navigation.navigate('UpdateContact',{id:id})}/>
        </View>
        <View style={{marginHorizontal: 20}}>
          <Button color={'blue'} title='Return' onPress={()=>navigation.goBack()}/>
        </View>
      </View>
    </View>
  )
}

export default Contact_Info