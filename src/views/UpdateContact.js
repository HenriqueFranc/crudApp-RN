import { View, TextInput ,Text,Button} from 'react-native'
import React,{useState,useContext} from 'react'
import { contextContact } from '../contextContact'
import styles from '../style/style'


const UpdateContact = ({route,navigation}) => {
    const {id} = route.params
    const [newname, setNewName] = useState('')
    const [newemail, setNewEmail] = useState('')
    const {data,setData} = useContext(contextContact)

    const handleSubmit= ()=>{
     
        const result = data.map((person)=>{
            if(person.id == id){
                person.name = newname
                person.email = newemail
            }
            return person
        })
        setData(result)
        navigation.navigate('Contacts')
        
      }

  return (
    <View style={styles.card}>
    <Text style={{fontSize:40, color: 'white', textAlign:'center'}}>Update Contact</Text>
    <Text style={{fontSize:20, color: 'white'}}>Name:</Text>
    <TextInput 
      style={styles.input}
      onChangeText={(text)=>setNewName(text)}
      value={newname} 
      placeholder='Write your name...'
      
      />
    <Text style={{fontSize:20, color: 'white'}}>Email:</Text>
    <TextInput
      style={styles.input}
      onChangeText={(text)=>setNewEmail(text)}
      value={newemail} 
      placeholder='Write your email...'
     
     />
     <View style={styles.buttonForm}>
      <Button color={'red'} title='Update' onPress={()=>handleSubmit()}/>
     </View>
  </View>
  )
}

export default UpdateContact