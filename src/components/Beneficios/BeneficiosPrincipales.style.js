import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerbeneficios: {
      // display:'flex',
      backgroundColor: '#653f90',
      paddingHorizontal: '5%',
      paddingVertical: '10%',
      borderColor: '#ffc200',
      borderWidth: 1,
      borderRadius: 18,
      marginHorizontal: '6%',
      marginTop: -25,
    },
    beneficios: {
      borderWidth: 1,
      borderStyle: 'dashed',
      borderTopColor: '#653f90',
      borderRightColor: '#653f90',
      borderLeftColor: '#653f90',
      borderBottomColor: 'yellow',
    },
    labelbeneficio: {
      color: 'white',
      fontSize: 14,
    },
    content: {
      color: 'white',
      fontSize: 18,
    },
    listado: {
      display: 'flex',
      flexDirection: 'row',
      // width: '100%',
      marginVertical: 10,
      // justifyContent:'flex-start'
    },
    // listado:{
    //     padding:5
    // },
    hueso: {
      height: 15,
      width: 15,
      marginRight: '2%',
      marginTop: 5,
    },
  });

  export default styles