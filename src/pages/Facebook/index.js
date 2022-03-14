import React from 'react';
import { View, Text, Button, SafeAreaView, ScrollView, StyleSheet, StatusBar, TextInput, Image } from 'react-native';

//import styleContato from './styleContato.css.js'

export default function Facebook({navigation}) {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const logo = { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/512px-Facebook_New_Logo_%282015%29.svg.png?20191031020909" }
  return(
    <View style={{flexDirection: "row", paddingTop:12,paddingVertical:11 } }>
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ flex:2,padding:50, margin:1}}>
        
        <Image
        source={require('../Img/facebook.jpg')}
        style={{ width: 230, height: 60,}}
      /> 
 
        <View style={{paddingTop:52,}}>
        <TextInput
        
        title=""
        style={styles.input}
        value={Text}
        placeholder="Email or phone"
        />
        </View>
        <View style={{paddingTop:10,}}>
        <TextInput
        
        onChangeText={onChangeText}
        title=""
        style={styles.input}
        value={Text}
        placeholder="Password"
        />
        </View>
        <View style={{paddingTop:36}}>
        <Button
        color={"#000080"}
        title = "login"
        onPress = { () =>
          navigation.navigate('Perfil')}
        />
        </View>
        <Text style={{paddingTop:130, paddingLeft:50, color:'white'}}>Sing up for meta</Text>

      </View>
      </ScrollView> 
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    display:"flex"
  },

  scrollView: {
    backgroundColor: '#3b5998',
    marginHorizontal: 9,
  },
  text:{
    color:'black'
  },

  Texto:{
    color:"white"
  }, 
  input: {
    paddingEnd:12,
    
    borderWidth: 1,
    padding: 6  ,
    color:'black',
    backgroundColor: 'white',
    borderRadius: 3
  },
   
  Button:{
    
  }
  
});