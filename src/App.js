
import React from 'react';
import {
  Dimensions,
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
import Card from './assets/card_member.png';
import Hueso from './assets/hueso.png';
import ArrowD from './assets/arrow_down.png';
import Arrow from './assets/arrow.png';
import Persona1 from './assets/persona1.png';
import Persona2 from './assets/persona2.png';
import Persona3 from './assets/persona3.png';



const App = () => {
 

  return (
    <>
    <ScrollView 
     alignItems='center'
    style={styles.maincontainer}>
     {/* <Text>App</Text> */}
        <View>
          <Principal image={Card}/>
          <Beneficios image1={Hueso} image2={ArrowD} image3={Arrow}/>
          <Calculadora />
          <Experiencias persona1={Persona1} persona2={Persona2} persona3={Persona3}/>




        </View>

    </ScrollView>
    </>
  );
};
let deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  maincontainer:{
    width:deviceWidth,
    // flex:1,
    backgroundColor:"#a47cd0",
    // width:500,
    // alignContent:'center'
   
  }
});

export default App;
