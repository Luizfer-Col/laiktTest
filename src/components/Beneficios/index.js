import React from 'react';
import { View } from 'react-native';
import Acordeon from './Acordeon';
import Adquirir from './Adquirir';
import BeneficiosPrincipales from './BeneficiosPrincipales';
import styles from './index.style';

const Beneficios = () => {
  return (
    <View style={styles.containerbeneficios}>
      <View style={styles.beneficios}>
        <BeneficiosPrincipales />
        <Acordeon />
      </View>
      <Adquirir />
    </View>
  );
};

export default Beneficios;

