import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header/Header';
import Beneficios from '../components/Beneficios/index';
import Calculadora from '../components/Calculadora/Calculadora';
import Experiencias from '../components/Experiencias/Experiencias';

const Members = () => {
  return (
    <View>
      <Header />
      <Beneficios />
      <Calculadora />
      <Experiencias />
    </View>
  );
};

export default Members;
