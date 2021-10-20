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

const Acordeon = ({arrow, image}) => {
  const [expanded, setExpanded] = useState(false);

  const otrosBeneficios = [
    {key: 'Regalo de bienvenida', img: image},
    {key: 'Bono de Netflix para maratonear', img: image},
    {key: 'Beneficios en restaurantes y tiendas', img: image},
    {key: 'Por cada pedido Laika donará a una fundación', img: image},
  ];

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  // const Item =

  return (
    <View>
      <TouchableOpacity onPress={() => toggleExpand()} style={styles.row}>
        <Text style={styles.labelbeneficio}>
          Ver otros beneficios <Image style={styles.hueso} source={arrow} />
        </Text>
      </TouchableOpacity>
      {expanded && <View>
          {otrosBeneficios.map(item => (
            <View style={styles.listado}>
              <Image style={styles.hueso} source={item.img} />
              <Text style={styles.content}>{item.key}</Text>
            </View>
          ))}
        </View>
      }
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
  hueso: {
    height: 15,
    width: 15,
    marginRight: '2%',
    // marginTop: 5,
  },
  labelbeneficio: {
    color: 'white',
    fontSize: 14,
  },
  listado: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    marginBottom: 18,
    // justifyContent:'flex-start'
  },
  content: {
    color: 'white',
    fontSize: 15,
  },
});
