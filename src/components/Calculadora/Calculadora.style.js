import { StyleSheet } from "react-native";
import s from '../../Style'



export const styles = StyleSheet.create({
    container: {
      marginVertical: 40,
    },
    title:{
        textAlign: 'center',
        fontFamily: s.ff.ExtraBold,
        fontSize: s.fs(30),
        marginHorizontal: '18%',
        color: s.color.white,
      },
      subtitle:{
        textAlign: 'center',
        fontFamily: s.ff.Bold,
        fontSize: s.fs(17),
        marginVertical: 10,
        color: 'white',
      },
    input: {
      marginTop: 20,
      marginBottom: 10,
      height: 50,
      width: '80%',
      borderRadius: 14,
      backgroundColor: s.color.plum,
      marginHorizontal: '10%',
      color: s.color.white,
      fontSize: s.fs(24),
      fontFamily: s.ff.Bold,
    },
    button: {
      backgroundColor: s.color.gold,
      width: '80%',
      marginHorizontal: '10%',
      height: 50,
      borderRadius: 14,
      paddingVertical: 16,
      marginBottom:22
    },
    textobutton: {
      fontSize: s.fs(17),
      fontFamily:s.ff.Bold,
      textAlign: 'center',
      color: s.color.darkslategray,
    },
    resultado: {
      margin: 5,
      textAlign: 'center',
      fontFamily: s.ff.Medium,
      fontSize: 19,
      color: 'white',
    },
    cifra:{
      textAlign: 'center',
      fontFamily: s.ff.Bold,
      fontSize: 36,
      color: '#ffc200',
    },
  });
  