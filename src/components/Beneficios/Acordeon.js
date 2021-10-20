import React, {useState} from 'react';
import {
  FlatList,
  Image,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import otrosBeneficios from '../../utils/otrosBeneficios';
import arrow from '../../assets/arrow_down.png'


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

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    // paddingLeft:25,
    paddingRight: 18,
    alignItems: 'center',
    // backgroundColor: Colors.CGRAY,
    alignContent: 'center',
  },
  parentHr: {
    height: 1,
    // color: Colors.WHITE,
    width: '100%',
  },
  child: {
    // backgroundColor: Colors.LIGHTGRAY,
    // padding:16,
  },
  flecha: {
    height: 25,
    width: 25,
    // marginRight: '2%',
    marginBottom: -8,
  },
  hueso: {
    height: 15,
    width: 15,
    marginRight: '2%',
    // marginTop: 5,
  },
  labelbeneficio: {
    color: 'white',
    fontSize: 14,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  listado: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    marginBottom: 18,
    // justifyContent:'flex-start'
    // transform: [{rotate: '180deg'}]
  },
  content: {
    color: 'white',
    fontSize: 15,
  },
});
