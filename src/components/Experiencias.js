import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Experiencias = ({persona1, persona2, persona3}) => {
    return (
        <View >
            <Text style={styles.title}>Experiencias de LAIKA <Text style={{color:'#ffc200'}}>Members</Text> </Text>
            <View style={styles.container}>
                <Image 
                // resizeMode="contain"
                source={persona1}
                style={styles.image}
                />
               <View style={{flex:1, paddingHorizontal:1, marginLeft:10, }}>
               <Text style={styles.texttitle}>Me convertí en LaikaMember y todo se volvió más fácil.</Text>
                <Text>Con los beneficios de LaikaMember aseguro los mejores precios sumado de regalos que le encantan a mi perro y la comodidad de que todo llega a la puerta de mi casa.</Text>

               </View>

            </View>
        </View>
    )
}

export default Experiencias

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection: 'row',
        marginHorizontal:'8%',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        backgroundColor: '#653f90',
        borderRadius:15
    },
    title:{
        fontSize:24,
        fontWeight: 'bold',
        marginHorizontal: '15%',
        textAlign:'center'
    },
    image:{
        width:120,
        height:200,
        borderRadius:12
    },
    texttitle:{
        fontSize:18
    }
})
