import React from 'react';
import {Alert, Button, Image, Text, TouchableOpacity, View} from 'react-native';
import Card from '../../assets/card_member.png';
import Arrow from '../../assets/arrow_down.png';
import {styles} from './Header.style';
import {transform} from '@babel/core';

const showAlert = () =>
  Alert.alert('Desarrollado por', 'Luis Colorado', [{text: 'OK'}], {
    cancelable: true,
  });
const Header = () => {
  return (
    <View>
      <View style={styles.containerarrow}>
        <TouchableOpacity onPress={() => showAlert()}>
          <Image source={Arrow} style={styles.arrow} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.labelTitle}>
          <Text style={styles.labelLaika}>LAIKA</Text>
          <Text style={styles.labelMembers}> Member</Text>
        </View>
        <Text style={styles.textTitle}>
          Conviértete en miembro, recibe beneficios exclusivos y dale lo mejor a
          tu mascota.
        </Text>
        <Image resizeMode="contain" style={styles.card} source={Card} />
      </View>
    </View>
  );
};

export default Header;
