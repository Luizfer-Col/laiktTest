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
        // width:deviceWidth,
        alignItems:'center',
        paddingHorizontal:25,
        marginTop:60,
    },
    labelTitle:{
        display:'flex',
        flexDirection:'row',
        // margin:0,
        // justifyContent: 'center',
        // padding: 5
    },
    labelLaika:{
        fontWeight:'bold',
        color:'#ffff',
        fontSize:40,
        margin:0
    },
    labelMembers:{
        fontWeight:'bold',
        color:'#ffc200',
        fontSize:40,
        marginLeft:-5

    },
    textTitle:{
        fontSize:16,
        color:'white',
        textAlign:'center'
    },
    card:{
        width: '100%',
        marginTop: -30,
        marginHorizontal:'2%',
    }
    
})
