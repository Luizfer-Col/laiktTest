import { StyleSheet } from "react-native";
import  s from '../../Style'


const styles = StyleSheet.create({
    labelbeneficio: {
      color: s.color.white,
      fontSize: 14,
      fontFamily: s.ff.SemiBold
    },
    content: {
      color: s.color.white,
      fontSize: 18,
      fontFamily: s.ff.SemiBold
    },
    porcentaje:{
      color: s.color.gold,
      fontFamily: s.ff.Bold
    },
    listado: {
      display: 'flex',
      flexDirection: 'row',
      marginVertical: 10,
    },
    hueso: {
      height: 15,
      width: 15,
      marginRight: '3%',
      marginTop: 5,
    },
  });

  export default styles