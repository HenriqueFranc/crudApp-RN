import { NavigationContainer } from '@react-navigation/native'
import React,{useState,} from 'react'
import {SafeAreaView,Text} from 'react-native'
import style from './style/style'
import AddContact from './views/AddContact'
import ContactList from './views/ContactList'
import UpdateContact from './views/UpdateContact'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Contact_Info from './views/Contact_Info'
import { contextContact } from './contextContact'
import dataBase from './data'

function App() {
  const Stack = createNativeStackNavigator();
  // const Drawer = createDrawerNavigator()
  
  const [data, setData] = useState(dataBase)

  return (
    <contextContact.Provider value={{data,setData}}>
      <SafeAreaView style={style.app}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Contacts'>
            <Stack.Screen name='Contacts' component={ContactList} />
            <Stack.Screen name='Add_Contact' component={AddContact}/>
            <Stack.Screen name='Contact_Info' component={Contact_Info}/>
            <Stack.Screen name='UpdateContact' component={UpdateContact}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </contextContact.Provider>
  )
}

export default App