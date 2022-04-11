import { TouchableOpacity, Text ,FlatList} from 'react-native'
import React ,{useContext,useEffect}from 'react'
import styles from '../style/style'
import { contextContact } from '../contextContact'
import { useNavigation } from '@react-navigation/native'


const People = () => {

  const navigation = useNavigation()

  const {data} = useContext(contextContact)

  useEffect(() => {
    
  }, [data])
 
  const renderItem = ({item})=>{
    
    const onPress = ()=>{
      navigation.navigate('Contact_Info',{id: item.id})
    }

    return(
      <TouchableOpacity onPress={onPress}  style={styles.card}>
        <Text style={{color:'white'}}>{item.name}</Text>
        <Text style={{color:'white'}}>{item.email}</Text>
      </TouchableOpacity>
    ) 
  } 

  return (
    <FlatList data={data} renderItem={renderItem} keyExtractor={item=>item.id}/>
  )
}

export default People