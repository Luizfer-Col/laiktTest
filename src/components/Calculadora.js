import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Calculadora = () => {
  const [cantidad, setCantidad] = useState('');
  const [ahorro, setAhorro] = useState(0);
  const calcular = num => {
    // setCantidad(num)
    const ahorrado = Math.ceil(num * 12 * 0.15);
    setAhorro(ahorrado);
  };
  const valor = cantidad - 5;
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center', fontWeight:'bold', fontSize: 24, marginHorizontal:'20%'}}>Calcula tu ahorro con la membresía</Text>
      <Text style={{textAlign:'center', fontWeight:'bold', fontSize:16, marginVertical:10}}>¿Cuánto gastas al mes en tu peludo?</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        textAlign="center"
        onChangeText={texto => setCantidad(texto)}
        value={cantidad}
      />
      <TouchableOpacity onPress={() => calcular(cantidad)}>
        <View style={styles.button}>
          <Text style={styles.texto}>Calcular</Text>
        </View>
      </TouchableOpacity>
      <Text style={{marginTop:30, textAlign:'center', fontWeight:'bold', fontSize:16, marginVertical:10}}>Te ahorras</Text>
      <Text style={{textAlign:'center', fontWeight:'bold', fontSize:24, color:'#ffc200'}}>
        $<Text>{ahorro}</Text>
      </Text>
      <Text style={{textAlign:'center', fontWeight:'bold', fontSize:16, marginVertical:10}}>al año</Text>
    </View>
  );
};

export default Calculadora;

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    // textAlign:'center',
    // alignItems:'center'
  },
  input: {
    marginVertical: 10,
    height: 50,
    width: '80%',
    // borderColor: '#e1e1e1',
    // borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 14,
    backgroundColor: '#bf93f1',
    marginHorizontal: '10%',
    // alignContent:'center',
    // alignItems:'center',
    // justifyContent:'center',
    color: 'white',
    fontSize: 26,
    padding: 0,
    fontWeight: 'bold',
  },
  button: {
    resizeMode: 'contain',
    backgroundColor: '#ffc200',
    // marginVertical: 10,
    width: '80%',
    height: 50,
    borderStyle: 'solid',
    borderRadius: 14,
    //   backgroundColor: '#bf93f1',
    marginHorizontal: '10%',
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
});
