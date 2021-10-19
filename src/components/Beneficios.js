import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
// import Hueso from '../assets/"Group 2533"'

const Beneficios = ({image}) => {
    return (
        <View style={styles.containerbeneficios}>
            <Text style={styles.hola}>
                Beneficios los 365 dias del año
            </Text>
            <View style={styles.listado}>
            <Image
            source={image}
            style={styles.hueso}
            />
            {/* <Text style={styles.content}>Reprehenderit est ipsum nisi laborum ad ea do laboris mollit aute non. </Text> */}

            </View>

        </View>
    )
}

export default Beneficios

const styles = StyleSheet.create({
    hola:{
color: 'white',
fontSize:14
    },
    containerbeneficios:{
        // display:'flex',
        backgroundColor: '#653f90',
        // paddingHorizontal:'5%',
        // paddingVertical:'10%',
        borderColor: '#ffc200',
        borderWidth:1,
        borderRadius: 18,
        marginHorizontal:'5%',
    },
    content:{
        // color:'white'
    },
    // listado:{
    //     display: 'flex',
    //     flexDirection: 'row',
    //     width:'100%'
    // },
    // listado:{
    //     padding:5
    // },
    hueso:{
        height:15,
        width:15,
        marginHorizontal:'1%'
    }
})
