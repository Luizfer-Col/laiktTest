import React from 'react';
import { View } from 'react-native';
import Dash from 'react-native-dash';
import Acordeon from './Acordeon';
import Adquirir from './Adquirir';
import BeneficiosPrincipales from './BeneficiosPrincipales';
import styles from './index.style';
import s from '../../Style'

const Beneficios = () => {
  return (
    <View 
    style={styles.containerbeneficios}>
      <View style={styles.beneficios}>
        <BeneficiosPrincipales />
        <Acordeon />
        <Dash 
        dashColor={s.color.gold}
        dashLength={5}
        dashGap={4}
        dashThickness={2}
        style={styles.dash}/>
      </View>
      <Adquirir />
    </View>
  );
};

export default Beneficios;

