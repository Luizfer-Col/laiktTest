import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
// import Hueso from '../assets/"Group 2533"'

const Beneficios = ({image}) => {
  return (
    <View style={styles.containerbeneficios}>
        <View style={styles.beneficios}>
        <Text style={styles.labelbeneficio}>Beneficios los 365 dias del año</Text>
      <View style={styles.listado}>
        <Image source={image} style={styles.hueso} />
        <Text style={styles.content}>
          <Text style={{color: '#ffc200', fontWeight: 'bold'}}>15%</Text> de
          descuento en todos los productos{' '}
        </Text>
      </View>
      <View style={styles.listado}>
        <Image source={image} style={styles.hueso} />
        <Text style={styles.content}>
          {' '}
          Domicilio{' '}
          <Text style={{color: '#ffc200', fontWeight: 'bold'}}>gratis</Text>
          <Text style={{fontSize: 12}}> * a partir de $120.000</Text>
        </Text>
      </View>

        </View>

        <Text>Sit cupidatat dolore eiusmod id est. Laborum nulla voluptate labore et. Est adipisicing incididunt proident magna esse irure aliquip incididunt enim do aute. Reprehenderit sunt nostrud velit consectetur cupidatat officia deserunt sit duis. Duis incididunt irure proident excepteur officia aute. Sit adipisicing incididunt in consectetur id enim in cillum sunt dolor culpa ipsum minim. Labore ex aliqua deserunt Lorem tempor nisi reprehenderit ipsum commodo ut.</Text>
      
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
    marginHorizontal: '5%',
    marginTop: -25,
  },
  beneficios:{
      borderWidth: 1,
      borderStyle: 'dotted',
      borderTopColor:'#653f90',
      borderRightColor:'#653f90',
      borderLeftColor:'#653f90',
      borderBottomColor:'yellow',
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
    width: '100%',
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
