import React from 'react';
import {Image, Text, View} from 'react-native';
import experiencias from '../../utils/Experiencias';
import { styles } from './Experiencias.style';
import s from '../../Style'



const Experiencias = () => {
  return (
    <View>

      <Text style={styles.title}>
        Experiencias de LAIKA <Text style={{color: s.color.gold}}>Members</Text>
      </Text>

      {experiencias.map((item, index) => (
        <View style={styles.container} key={index}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.textos}>
            <Text style={styles.texttitle}>{item.title}</Text>
            <Text style={styles.parrafo}>{item.parrafo}</Text>
          </View>
        </View>
      ))}
      
    </View>
  );
};

export default Experiencias;

