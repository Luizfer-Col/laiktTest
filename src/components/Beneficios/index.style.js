import { StyleSheet } from "react-native";
import  s from '../../Style'

 const styles = StyleSheet.create({
    containerbeneficios: {
      backgroundColor: s.color.darkslateblue,
      paddingHorizontal: '5%',
      paddingVertical: '10%',
      borderColor: s.color.gold,
      borderWidth: 1,
      borderRadius: 18,
      marginHorizontal: '6%',
      marginTop: -25,
    },
    beneficios: {
      borderWidth: 1,
      borderStyle: 'dashed',
      borderTopColor: s.color.darkslateblue,
      borderRightColor: s.color.darkslateblue,
      borderLeftColor: s.color.darkslateblue,
      borderBottomColor: s.color.gold,
    }
  });
  
  export default styles