import {Dimensions, StyleSheet} from 'react-native';

let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  maincontainer: {
    width: deviceWidth,
    backgroundColor: '#a47cd0',
  },
});

export default styles
