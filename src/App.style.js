import {Dimensions, StyleSheet} from 'react-native';
// import {  } from 'react-native';
 import  s from './Style'



export let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
console.log(deviceWidth, "dw");
console.log(deviceHeight, "dh");



const styles = StyleSheet.create({
  maincontainer: {
    width: deviceWidth,
    backgroundColor: s.color.mediumpurple,
  },
});

export default styles
