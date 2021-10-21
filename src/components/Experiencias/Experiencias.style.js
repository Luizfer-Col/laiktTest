import { StyleSheet } from "react-native";
import { deviceWidth } from "../../App.style";

const font = size =>(
  deviceWidth>360?size:size-1
)

export const styles = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'row',
      marginHorizontal: '7%',
      marginVertical: '1%',
      paddingHorizontal: '4%',
      paddingVertical: '4%',
      backgroundColor: '#653f90',
      borderRadius: 15,
      width: '86%',
    },
    title: {
      fontSize: font(30),
      fontWeight: 'bold',
      marginHorizontal: '16%',
      marginBottom: 30,
      textAlign: 'center',
      color: 'white',
    },
    image: {
      width: 110,
      height: 150,
      borderRadius: 12,
    },
    texttitle: {
      color: 'white',
      fontSize: font(14.5),
      fontWeight: 'bold',
      marginTop: -4,
    },
    parrafo: {
      color: 'white',
      fontSize: font(12),
      marginTop: 5,
    },
  });
  