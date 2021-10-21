import React from 'react';
import {ScrollView} from 'react-native';
import styles from './App.style';
import Members from './screens/Members';

const App = () => {
  return (
      <ScrollView 
      alignItems="center" 
      style={styles.maincontainer}>
        <Members />
      </ScrollView>
  );
};

export default App;
