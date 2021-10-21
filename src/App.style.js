import {Dimensions, StyleSheet} from 'react-native';
// import {  } from 'react-native';

export let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
console.log(deviceWidth, "dw");
console.log(deviceHeight, "dh");



const styles = StyleSheet.create({
  maincontainer: {
    width: deviceWidth,
    backgroundColor: '#a47cd0',
  },
});

export default styles
