import { StyleSheet } from "react-native";
import  s from '../../Style'

export const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 56,
      paddingRight: 18,
      alignItems: 'center',
      alignContent: 'center',
    },
    parentHr: {
      height: 1,
      width: '100%',
    },
    flecha: {
      height: 25,
      width: 25,
      marginBottom: -8,
    },
    hueso: {
      height: 15,
      width: 15,
      marginRight: '3%',
    },
    labelbeneficio: {
      color: s.color.white,
      fontFamily: s.ff.SemiBold,
      fontSize: 14,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    listado: {
      display: 'flex',
      flexDirection: 'row',
      width: '80%',
      marginBottom: 18,
    },
    content: {
      color: s.color.white,
      fontFamily: s.ff.Regular,
      fontSize: 15,
      lineHeight: 18
    },
  });
  