import React, { useState } from "react";
import { View,Text,StyleSheet,TouchableHighlight } from "react-native";
import { TextInput } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function Location(){
  const [focus,setfocus]=useState(false)
  

  return(
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
      <View style={{marginTop:5,paddingLeft:20}}>
      <Icon name="sort" size={50} color='blue'></Icon>
      </View>
      <Text style={{fontSize:40,color:'blue',marginLeft:20,fontFamily:'monospace'}}>xentice</Text>
    </View>
    <View style={{height:80,width:'100%',backgroundColor:'#E5E4E2',justifyContent:'center',alignItems:'center'}}>
      
      <Text style={{fontWeight:'bold',
    fontSize:20}}>Location</Text>
    <View style={{flexDirection:'row'}}>
      <Text>Progress Details</Text>
    <View style={{marginTop:1}}>
    <Icon name="chevron-right" size={20}></Icon>
    </View>
    </View>
    </View>
    <TextInput style={styles.box1}
placeholder='India'></TextInput>

<TextInput style={styles.box1}
placeholder='City'
color='black'
backgroundColor={'white'}></TextInput>

<TextInput style={styles.box1}
placeholder='Locality'
color='black'
backgroundColor={'white'}></TextInput>

<TextInput style={styles.box1}
placeholder='Street'
color='black'
backgroundColor={'white'}></TextInput>



    </View>

)}
const styles=StyleSheet.create({
  container:{
    flex:1
  },
  box:{
    width:72,
    height:70,
    borderRadius:8,
    borderWidth:1,
    alignItems:'center',
    borderColor:'grey'
  },
  box1:{
    width:'85%',
    height:37,
    marginLeft:30,
    marginTop:10,
    borderRadius:8,
    borderWidth:1
  },
  box2:{
    height:37,
    width:'55%',
    marginLeft:30,
    marginTop:10,
    borderRadius:8,
    borderWidth:1
  },
  box3:{
    height:37,
    width:'25%',
    marginLeft:30,
    marginTop:10,
    borderRadius:8,
    borderWidth:1
  }
})