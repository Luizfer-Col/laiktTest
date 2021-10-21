import { StyleSheet } from "react-native";
import  s from '../../Style'


export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      marginBottom: 10,
      alignItems: 'center',
    },
    textoizquierda: {
      color: s.color.white,
      fontFamily: s.ff.Bold,
      fontSize: s.fs(15)
    },
    textoprecio: {
      color: s.color.white,
      fontSize: s.fs(26),
      fontFamily: s.ff.Bold,
      marginVertical: 5,
    },
    containerder: {
      backgroundColor: '#8a5dbc',
      borderRadius: 12,
      paddingHorizontal: 20,
      paddingVertical: 7,
      width: 120,
      height: 40,
    },
    textoderecha: {
      color: 'white',
      fontSize: 11,
      fontFamily: s.ff.SemiBold,
      width: '100%',

    },
    button: {
      backgroundColor: s.color.gold,
      width: '98%',
      height: 50,
      borderRadius: 14,
      paddingVertical: 16,
    },
    textobutton: {
      fontSize: s.fs(17),
      fontFamily:s.ff.Bold,
      textAlign: 'center',
      color: s.color.darkslategray,
    },
    terminos: {
      textAlign: 'center',
      color: s.color.gold,
      fontFamily: s.ff.Bold,
      fontSize: s.fs(10),
      marginTop: 10,
    },
  });