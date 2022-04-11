import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    app:{ 
        flex:1,
        justifyContent: 'flex-start',
        alignItems:'stretch',
        backgroundColor: 'green',
    },
    formContainer:{ 
        flex:1,
        width:'100%',
        justifyContent: 'center',
        alignItems:'stretch',
        backgroundColor: 'white',
    },
    contactInfo:{ 
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'white',
        fontSize: 30,
    },
    textInfo:{ 
        fontSize: 20,
    },
    card:{
        margin: 5,
        backgroundColor:'#A15',
        padding: 10,
        borderRadius: 10,
    },

    input:{
        backgroundColor: 'white',
        borderWidth: 1 ,
        padding: 20,
        margin: 10,
    },
    buttonForm:{
        padding:10,
        alignItems: 'stretch',
        width:'40%',
        backgroundColor:'#A15',
    }
})

export default styles