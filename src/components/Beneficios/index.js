import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Acordeon from './Acordeon';
import Adquirir from './Adquirir';
// import Hueso from '../assets/"Group 2533"'

const Beneficios = ({image1}) => {
  return (
    <View style={styles.containerbeneficios}>
      <View style={styles.beneficios}>
        <Text style={styles.labelbeneficio}>
          Beneficios los 365 dias del año
        </Text>
        <View style={styles.listado}>
          <Image source={image1} style={styles.hueso} />
          <Text style={styles.content}>
            <Text style={{color: '#ffc200', fontWeight: 'bold'}}>15%</Text> de
            descuento en todos los productos
          </Text>
        </View>
        <View style={styles.listado}>
          <Image source={image1} style={styles.hueso} />
          <Text style={styles.content}>
            Domicilio
            <Text style={{color: '#ffc200', fontWeight: 'bold'}}> gratis</Text>
            <Text style={{fontSize: 12}}> *a partir de $120.000</Text>
          </Text>
        </View>
        <Acordeon />
      </View>
      <Adquirir />
    </View>
  );
};

export default Beneficios;

const styles = StyleSheet.create({
  containerbeneficios: {
    // display:'flex',
    backgroundColor: '#653f90',
    paddingHorizontal: '5%',
    paddingVertical: '10%',
    borderColor: '#ffc200',
    borderWidth: 1,
    borderRadius: 18,
    marginHorizontal: '6%',
    marginTop: -25,
  },
  beneficios: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderTopColor: '#653f90',
    borderRightColor: '#653f90',
    borderLeftColor: '#653f90',
    borderBottomColor: 'yellow',
  },
  labelbeneficio: {
    color: 'white',
    fontSize: 14,
  },
  content: {
    color: 'white',
    fontSize: 18,
  },
  listado: {
    display: 'flex',
    flexDirection: 'row',
    // width: '100%',
    marginVertical: 10,
    // justifyContent:'flex-start'
  },
  // listado:{
  //     padding:5
  // },
  hueso: {
    height: 15,
    width: 15,
    marginRight: '2%',
    marginTop: 5,
  },
});
