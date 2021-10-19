
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
 

  return (
    <>
    <View style={styles.maincontainer}>
     <Text>App</Text>

    </View>
    </>
  );
};

const styles = StyleSheet.create({
  maincontainer:{
    flex:1,
    backgroundColor:"#a47cd0"
  }
});

export default App;
