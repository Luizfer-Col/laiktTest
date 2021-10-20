import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import experiencias from '../utils/Experiencias';


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

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: '7%',
    marginVertical: '1%',
    paddingHorizontal: '4%',
    paddingVertical: '4%',
    backgroundColor: '#653f90',
    borderRadius: 15,
    width: '86%',
    // alignContent:'flex-start',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: '16%',
    // marginTop: -15,
    marginBottom: 30,
    textAlign: 'center',
    color: 'white',
  },
  image: {
    width: 110,
    height: 150,
    borderRadius: 12,
  },
  texttitle: {
    color: 'white',
    fontSize: 14.5,
    fontWeight: 'bold',
    marginTop: -4,
  },
  parrafo: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
  },
});
