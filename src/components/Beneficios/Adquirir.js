import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Adquirir.style';
import  s from '../../Style'


const Adquirir = () => {
  return (
    <View>

      <View style={styles.container}>
        <View>
          <Text style={styles.textoizquierda}>Paga únicamente</Text>
          <Text style={styles.textoprecio}>
            $69.900
            <Text style={{fontFamily: s.ff.Thin}}>/año</Text>
          </Text>
        </View>

        <View style={styles.containerder}>
          <Text style={styles.textoderecha}>
            Lo que equivale a $5.260 el mes
          </Text>
        </View>
      </View>

      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.textobutton}>Adquirir membresía</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View>
          <Text style={styles.terminos}>Aplican términos y condiciones</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
};

export default Adquirir;


