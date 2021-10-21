import React from 'react';
import {Image, Text, View} from 'react-native';
import experiencias from '../../utils/Experiencias';
import { styles } from './Experiencias.style';


const Experiencias = () => {
  return (
    <View>

      <Text style={styles.title}>
        Experiencias de LAIKA <Text style={{color: '#ffc200'}}>Members</Text>{' '}
      </Text>

      {experiencias.map((item, index) => (
        <View style={styles.container} key={index}>
          <Image source={item.image} style={styles.image} />
          <View style={{flex: 1, paddingHorizontal: 1, marginLeft: 10}}>
            <Text style={styles.texttitle}>{item.title}</Text>
            <Text style={styles.parrafo}>{item.parrafo}</Text>
          </View>
        </View>
      ))}
      
    </View>
  );
};

export default Experiencias;

