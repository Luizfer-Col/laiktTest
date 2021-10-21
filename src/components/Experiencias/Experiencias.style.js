import { StyleSheet } from "react-native";
import { deviceWidth } from "../../App.style";
import s from '../../Style'

export const styles = StyleSheet.create({
    title: {
      fontSize: s.fs(30),
      marginHorizontal: '16%',
      marginBottom: 15,
      textAlign: 'center',
      color: s.color.white,
      fontFamily: s.ff.ExtraBold,
      lineHeight: 40      
    },
    container: {
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'row',
      marginHorizontal: '7%',
      marginVertical: '1%',
      paddingLeft: '4%',
      paddingRight: '3%',
      paddingVertical: '4%',
      backgroundColor: '#653f90',
      borderRadius: 15,
      width: '86%',
    },
    image: {
      width: 100,
      height: 140,
      borderRadius: 12,
    },
    textos:{
      flex: 1, 
      marginLeft: 10
    },
    texttitle: {
      color: s.color.white,
      fontSize: s.fs(15),
      fontFamily: s.ff.Bold,
      lineHeight:16
    },
    parrafo: {
      color: s.color.white,
      fontSize: s.fs(14),
      marginTop: 5,
      fontFamily: s.ff.Regular
    },
  });
  