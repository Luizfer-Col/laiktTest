import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './BeneficiosPrincipales.style';
import Hueso from '../../assets/hueso.png'

const Beneficios = () => {
  return (
    <View>
      <Text style={styles.labelbeneficio}>Beneficios los 365 dias del año</Text>
      <View style={styles.listado}>
        <Image source={Hueso} style={styles.hueso} />
        <Text style={styles.content}>
          <Text style={{color: '#ffc200', fontWeight: 'bold'}}>15%</Text> de
          descuento en todos los productos
        </Text>
      </View>
      <View style={styles.listado}>
        <Image source={Hueso} style={styles.hueso} />
        <Text style={styles.content}>
          Domicilio
          <Text style={{color: '#ffc200', fontWeight: 'bold'}}> gratis</Text>
          <Text style={{fontSize: 12}}> *a partir de $120.000</Text>
        </Text>
      </View>
    </View>
  );
};

export default Beneficios;
