import {StyleSheet} from 'react-native';
import s from '../../Style';

export const styles = StyleSheet.create({
  containerarrow:{width:'10%', 
  margin:'4%',
},
  arrow:{
    transform: [{rotate: '90deg'}]
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  labelTitle: {
    display: 'flex',
    flexDirection: 'row',
  },
  labelLaika: {
    color: s.color.white,
    fontSize: s.fs(42),
    fontFamily: s.ff.ExtraBold,
    marginBottom: 9,
  },
  labelMembers: {
    color: s.color.gold,
    fontSize: s.fs(42),
    fontFamily: s.ff.ExtraBold,
    marginLeft: -5,
    marginBottom: 9,
  },
  textTitle: {
    fontSize: s.fs(17),
    color: s.color.white,
    textAlign: 'center',
    fontFamily: s.ff.Regular,
    lineHeight: 20,
  },
  card: {
    width: '88%',
    marginTop: -40,
    marginHorizontal: '6%',
  },
});
