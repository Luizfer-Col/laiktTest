import React from 'react';
import {ScrollView} from 'react-native';
import styles from './App.style';
import Member from './screens/Member';

const App = () => {
  return (
      <ScrollView 
      alignItems="center" 
      style={styles.maincontainer}>
        <Member />
      </ScrollView>
  );
};

export default App;
