import {Dimensions, StyleSheet} from 'react-native';
 import  s from './Style'

let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  maincontainer: {
    width: deviceWidth,
    backgroundColor: s.color.mediumpurple,
  },
});

export default styles
