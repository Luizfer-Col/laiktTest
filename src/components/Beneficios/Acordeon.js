import React, {useState} from 'react';
import {
  Image,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import otrosBeneficios from '../../utils/otrosBeneficios';
import arrow from '../../assets/arrow_down.png'
import { styles } from './Acordeon.style';


const Acordeon = () => {
  const [expanded, setExpanded] = useState(false);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };


  return (
    <View>

      <TouchableOpacity onPress={() => toggleExpand()} style={styles.row}>
        <Text style={styles.labelbeneficio}>
          Ver otros beneficios
          <View>
            {expanded ? (
              <Image
                source={arrow}
                style={(styles.flecha, {transform: [{rotate: '180deg'}]})}
              />
            ) : (
              <Image source={arrow} style={styles.flecha} />
            )}
          </View>
        </Text>
      </TouchableOpacity>

      {expanded && (
        <View>
          {otrosBeneficios.map((item, index) => (
            <View key={index} style={styles.listado}>
              <Image style={styles.hueso} source={item.img} />
              <Text style={styles.content}>{item.text}</Text>
            </View>
          ))}
        </View>
      )}

    </View>
  );
};

export default Acordeon;

