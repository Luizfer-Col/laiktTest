import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

const Principal = ({image}) => {
    return (
        <View style={styles.container}>
            <View style={styles.labelTitle}>
            <Text style={styles.labelLaika }>LAIKA</Text>
            <Text style={styles.labelMembers}> Member</Text>

            </View>
            <Text 
            style={styles.textTitle}>
                Conviértete en miembro, recibe beneficios exclusivos y dale lo mejor a tu mascota.
            </Text>
            <Image 
            resizeMode='contain'
            style={styles.card}
            source={image}/>
        </View>
    )
}

export default Principal
let deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        paddingHorizontal:25,
        marginTop:60,
    },
    labelTitle:{
        display:'flex',
        flexDirection:'row',
    },
    labelLaika:{
        fontWeight:'bold',
        color:'#ffff',
        fontSize:40,
    },
    labelMembers:{
        fontWeight:'bold',
        color:'#ffc200',
        fontSize:40,
        marginLeft:-5

    },
    textTitle:{
        fontSize:18,
        color:'white',
        textAlign:'center'
    },
    card:{
        width: '92%',
        marginTop: -20,
        marginHorizontal:'2%',
    }
    
})
