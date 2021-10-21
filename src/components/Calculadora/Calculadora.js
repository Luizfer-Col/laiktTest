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
        style={styles.title}>
        Calcula tu ahorro con la membresía
      </Text>
      <Text
        style={styles.subtitle}>
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
          <Text style={styles.textobutton}>Calcular</Text>
        </View>
      </TouchableOpacity>
      <Text
        style={styles.resultado}>
        Te ahorras
      </Text>
      <Text
        style={styles.cifra}>
        $<Text>{ahorro}</Text>
      </Text>
      <Text
        style={styles.resultado}>
        al año
      </Text>
    </View>
  );
};

export default Calculadora;

