import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Adquirir = () => {
  return (
    <View>
      <View style={styles.container}>
          <View style={styles.containerizq} >

          <Text style={styles.textoizquierda}>Paga únicamente</Text>
        <Text  style={styles.textoprecio}>
          $69.900
          <Text style={{fontWeight: '200'}}>/año</Text>
        </Text>
          </View>

        <View style={styles.containerder}>
            <Text style={styles.textoderecha}>Lo que equivale a $5.260 el mes</Text>
        </View>
      </View>
      <TouchableOpacity >
        <View style={styles.button}>
          <Text style={styles.texto}>Adquirir membresía</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity >
        <View >
          <Text style={styles.terminos}>Aplican términos y condiciones</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Adquirir;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 10,
        alignItems: 'center'
    },
    containerizq:{

    },
    textoizquierda:{
 color:'white'
    },
    textoprecio:{
        color:'white',
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical:5

    },
    containerder:{
        backgroundColor:'#8a5dbc',
        borderRadius:12,
        paddingHorizontal:20,
        paddingVertical:10,
        width:120,
        height:50
    },
    textoderecha:{
        // flex:1,
        color:'white',
        fontSize: 11,
        width:'100%',
        fontWeight: 'bold'
        // marginVertical:
    },
    button: {
        resizeMode: 'contain',
        backgroundColor: '#ffc200',
        // marginVertical: 10,
        width: '98%',
        height: 50,
        borderStyle: 'solid',
        borderRadius: 14,
        //   backgroundColor: '#bf93f1',
        // marginHorizontal: '5%',
      },
      texto: {
        marginVertical: '4%',
        fontSize: 16,
        padding: 0,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'black'
      },
      terminos:{
          textAlign:'center',
          color: '#ffc200',
          fontSize: 10,
          marginTop:10
      }
});
