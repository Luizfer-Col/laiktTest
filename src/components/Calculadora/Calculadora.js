import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { styles } from './Calculadora.style';

const Calculadora = () => {
  const [cantidad, setCantidad] = useState('');
  const [ahorro, setAhorro] = useState(0);

  const calcularAhorro = num => {
    const ahorrado = Math.ceil(num * 12 * 0.15);
    setAhorro(ahorrado);
  };
  const { height, width } = useWindowDimensions();
console.log(height, "h");
console.log(width, "w");

  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 24,
          marginHorizontal: '20%',
          color: 'white',
        }}>
        Calcula tu ahorro con la membresía
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 16,
          marginVertical: 10,
          color: 'white',
        }}>
        ¿Cuánto gastas al mes en tu peludo?
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        textAlign="center"
        onChangeText={texto => setCantidad(texto)}
        value={cantidad}
      />
      <TouchableOpacity onPress={() => calcularAhorro(cantidad)}>
        <View style={styles.button}>
          <Text style={styles.texto}>Calcular</Text>
        </View>
      </TouchableOpacity>
      <Text
        style={{
          marginTop: 30,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 16,
          marginVertical: 10,
          color: 'white',
        }}>
        Te ahorras
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 24,
          color: '#ffc200',
        }}>
        $<Text>{ahorro}</Text>
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 16,
          marginVertical: 10,
          color: 'white',
        }}>
        al año
      </Text>
    </View>
  );
};

export default Calculadora;

