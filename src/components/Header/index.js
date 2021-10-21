import React from 'react'
import {  Image, Text, View } from 'react-native'
import Card from '../../assets/card_member.png'
import { styles } from './index.style'

const Header = () => {
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
            source={Card}/>
        </View>
    )
}

export default Header

