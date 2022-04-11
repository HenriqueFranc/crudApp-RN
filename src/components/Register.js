import { View, TextInput ,Text,Button} from 'react-native'
import React,{useState,useContext} from 'react'
import styles from '../style/style'
import { contextContact } from '../contextContact'
import { useNavigation } from '@react-navigation/native'

const Register = () => {
  
// Utilizado para ter a props nvaigation de qualquer tela
  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const {data,setData} = useContext(contextContact)


  const handleSubmit= ()=>{
    const id = Math.floor(Math.random()*1000)
    const person = {
      id: id,
      name: name,
      email: email
    }
    setData([...data,person])
    
    navigation.goBack()
  }

  return (
    <View style={styles.card}>
      <Text style={{fontSize:40, color: 'white', textAlign:'center'}}>Form Contact</Text>
      <Text style={{fontSize:20, color: 'white'}}>Name:</Text>
      <TextInput 
        style={styles.input}
        onChangeText={(text)=>setName(text)}
        value={name} 
        placeholder='Write your name...'
        
        />
      <Text style={{fontSize:20, color: 'white'}}>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text)=>setEmail(text)}
        value={email} 
        placeholder='Write your email...'
       
       />
       <View style={styles.buttonForm}>
        <Button color={'red'} title='Add' onPress={()=>handleSubmit()}/>
       </View>
    </View>
  )
}

export default Register