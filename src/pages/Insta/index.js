import React from 'react';
import { View, Text, Button, SafeAreaView, ScrollView, StyleSheet, StatusBar, TextInput, Image, ImageBackground } from 'react-native';

//import styleSobre from './styleSobre.css.js'

export default function Instagram({navigation}) {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const image = { uri: "https://i.pinimg.com/736x/ac/80/59/ac8059a26f62d2ae04d7b504052d163c.jpg" };
  return(
    <View style={{flexDirection: "row", paddingTop:12,paddingVertical:11  } }>
      
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={{ flex:2,padding:30, margin:1}}>
        
        <View style={{flexDirection:'row', justifyContent:'flex-end'}}> 
          <Image
          source={require('../Img/inte.png')}
          style={{ width: 25, height: 25, }}
          /> 
          <Text>    </Text>
          <Image
          source={require('../Img/conf.png')}
          style={{ width: 25, height: 25, paddingStart:8}}
          />  
        </View>

        <View style={{flexDirection:'row',justifyContent:'center', padding:7, paddingRight:22, paddingTop:30}}> 
          <Image
          source={require('../Img/cadeado.png')}
          style={{ width: 26, height: 26, padding:3}}
          />
        
        </View>

        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <Text style={{fontSize:11,padding:5, color:'white'}}>Enther the code sent to your numer
             ending in 8691 or use your Backuo Codes.</Text>
        </View>

        <View style={{paddingTop:22,}}>
          <Text style={{padding:10 , color:'white',fontSize:11, }}>   It may take few moments to recelve SMS</Text>
          <TextInput  title="" style={styles.input}   placeholder="Enter Two-Factor code" placeholderTextColor={"#C0C0C0"} />
          <Text style={{ paddingLeft:200, color:'white', fontSize:12}}>What is it?</Text>
        </View>

        <View style={{paddingTop:26,   }}>
          <TextInput title="" style={styles.input2}  placeholder="Login with instagram" />
          <Text style={{ paddingLeft:100, color:'white', fontSize:15, paddingTop:5}}>Back to Login</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'center', paddingTop:20, padding:2,}}>
          <TextInput title="" style={styles.input1}  placeholder="OR" placeholderTextColor={'white'}  />
        </View>

        <View style={{paddingTop:26,}}>
          <Button color={"#7F2750"}  title = "Repost without login" onPress = { () => navigation.navigate('Home')}/>
        </View>
        <View style={{padding:76,}}></View>

      </View>



     
      </ImageBackground>
      </ScrollView> 
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    display:"flex",
    
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  scrollView: {
    
    marginHorizontal: 9,
  },
  

  Texto:{
    color:"white"
  }, 
  input: {
    paddingEnd:22,
    paddingLeft:20,
    borderWidth: 2,
    padding: 13  ,
    color:'white',
    paddingTop:12,
    borderRadius: 6,
    borderColor:'#C0C0C0'
  },
   
  input1: {
    paddingEnd:12,
    paddingLeft:15,
    borderWidth: 1,
    padding: 10  ,
    borderRadius: 50,
    backgroundColor:'#7F2750',
    
  },
   
  input2: {
    paddingEnd:22,
    paddingLeft:50,
    
    padding: 10 ,
    color:'#D3D3D3',
    backgroundColor:"white",
    borderRadius: 1,
    borderColor:'#C0C0C0'
  },

});