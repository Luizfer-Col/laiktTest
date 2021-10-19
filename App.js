
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
import Beneficios from './components/Beneficios';
import Calculadora from './components/Calculadora';
import Experiencias from './components/Experiencias';
import Principal from './components/Principal';
import Card from './assets/card_member.png'



const App = () => {
 

  return (
    <>
    <ScrollView 
     alignItems='center'
    style={styles.maincontainer}>
     {/* <Text>App</Text> */}
        <View>
          <Principal image={Card}/>
          <Beneficios />
          <Calculadora />
          <Experiencias />




        </View>

    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  maincontainer:{
    // flex:1,
    backgroundColor:"#a47cd0",
    // width:500,
    // alignContent:'center'
   
  }
});

export default App;
