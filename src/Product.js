import React, { useState } from "react";
import { View,Text,StyleSheet,TouchableHighlight } from "react-native";
import { TextInput } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function Product(){
  const [focus,setfocus]=useState(false)
  

  return(
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
      <View style={{marginTop:5,paddingLeft:20}}>
      <Icon name="sort" size={50} color='blue'></Icon>
      </View>
      <Text style={{fontSize:40,color:'blue',marginLeft:20,fontFamily:'monospace'}}>xentice</Text>
    </View>
    <View style={{height:80,width:'100%',backgroundColor:'#E5E4E2',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
      
      <Text style={{fontWeight:'bold',
    fontSize:20}}>Property</Text>
    <View style={{marginTop:6}}>
    <Icon name="chevron-right" size={20}></Icon>
    </View>
    </View>


    <View style={{flexDirection:'row'}}>

<View style={{marginLeft:10,marginLeft:22,marginTop:15,height:70}}>
  <View style={styles.box}>
  <TouchableHighlight>
    <Icon name="dynamic-feed" size={30} ></Icon>
  </TouchableHighlight>
  <Text style={{fontSize:12,color:'black'}}>Industrial </Text>
  <Text style={{fontSize:12,color:'black'}}>land</Text>
  </View>
</View>
<View style={{marginLeft:10,marginLeft:22,marginTop:15,height:70}}>
  <View style={styles.box}>
  <TouchableHighlight>
    <Icon name="dynamic-feed" size={30} ></Icon>
  </TouchableHighlight>
  <Text style={{fontSize:12,color:'black'}}>Industrial </Text>
  <Text style={{fontSize:12,color:'black'}}>land</Text>
  </View>
</View>
<View style={{marginLeft:10,marginLeft:22,marginTop:15,height:70}}>
  <View style={styles.box}>
  <TouchableHighlight>
    <Icon name="dynamic-feed" size={30} ></Icon>
  </TouchableHighlight>
  <Text style={{fontSize:12,color:'black'}}>Industrial </Text>
  <Text style={{fontSize:12,color:'black'}}>land</Text>
  </View>
</View>
<View style={{marginLeft:10,marginLeft:22,marginTop:15,height:70}}>
  <View style={styles.box}>
  <TouchableHighlight>
    <Icon name="dynamic-feed" size={30} ></Icon>
  </TouchableHighlight>
  <Text style={{fontSize:12,color:'black'}}>Industrial </Text>
  <Text style={{fontSize:12,color:'black'}}>land</Text>
  </View>
</View>
</View>


<View style={{flexDirection:'row'}}>

<View style={{marginLeft:10,marginLeft:22,marginTop:15,height:70}}>
  <View style={styles.box}>
  <TouchableHighlight>
    <Icon name="dynamic-feed" size={30} ></Icon>
  </TouchableHighlight>
  <Text style={{fontSize:12,color:'black'}}>Industrial </Text>
  <Text style={{fontSize:12,color:'black'}}>land</Text>
  </View>
</View>
<View style={{marginLeft:10,marginLeft:22,marginTop:15,height:70}}>
  <View style={styles.box}>
  <TouchableHighlight>
    <Icon name="dynamic-feed" size={30} ></Icon>
  </TouchableHighlight>
  <Text style={{fontSize:12,color:'black'}}>Industrial </Text>
  <Text style={{fontSize:12,color:'black'}}>land</Text>
  </View>
</View>
<View style={{marginLeft:10,marginLeft:22,marginTop:15,height:70}}>
  <View style={styles.box}>
  <TouchableHighlight>
    <Icon name="dynamic-feed" size={30} ></Icon>
  </TouchableHighlight>
  <Text style={{fontSize:12,color:'black'}}>Industrial </Text>
  <Text style={{fontSize:12,color:'black'}}>land</Text>
  </View>
</View>
<View style={{marginLeft:10,marginLeft:22,marginTop:15,height:70}}>
  <View style={styles.box}>
  <TouchableHighlight>
    <Icon name="dynamic-feed" size={30} ></Icon>
  </TouchableHighlight>
  <Text style={{fontSize:12,color:'black'}}>Industrial </Text>
  <Text style={{fontSize:12,color:'black'}}>land</Text>
  </View>
</View>
</View>

<View style={{marginLeft:10,marginLeft:22,marginTop:15,height:70,alignItems:'center'}}>
  <View style={styles.box}>
  <TouchableHighlight>
    <Icon name="dynamic-feed" size={30} ></Icon>
  </TouchableHighlight>
  <Text style={{fontSize:12,color:'black'}}>Industrial </Text>
  <Text style={{fontSize:12,color:'black'}}>land</Text>
  </View>
  </View>

<TextInput style={styles.box1}
placeholder='Property Title'></TextInput>
<Text style={{fontWeight:'bold',marginLeft:28,marginTop:10}}>Transaction Type</Text>

<View style={{flexDirection:'row',marginLeft:15}}>
<View style={{flexDirection:'row',marginTop:10,marginLeft:10}}>
<TouchableHighlight>{ focus ?
  <Icon name="radio-button-unchecked" size={18} color={'blue'}></Icon>:
  <Icon name="radio-button-checked" size={18} color={'blue'}></Icon>
}
</TouchableHighlight>
<Text style={{marginLeft:5}}>Sell</Text>
</View>

<View style={{flexDirection:'row',marginTop:10,marginLeft:10}}>
<TouchableHighlight>{ focus ?
  <Icon name="radio-button-unchecked" size={18} color={'blue'}></Icon>:
  <Icon name="radio-button-checked" size={18} color={'blue'}></Icon>
}
</TouchableHighlight>
<Text style={{marginLeft:5}}>Rent</Text>
</View>

<View style={{flexDirection:'row',marginTop:10,marginLeft:10}}>
<TouchableHighlight>{ focus ?
  <Icon name="radio-button-unchecked" size={18} color={'blue'}></Icon>:
  <Icon name="radio-button-checked" size={18} color={'blue'}></Icon>
}
</TouchableHighlight>
<Text style={{marginLeft:5}}>Lease</Text>
</View>

</View>


<View style={{flexDirection:'row'}}>
<TextInput style={styles.box2}
placeholder='Price'></TextInput>
<TextInput style={styles.box3}
placeholder='/Hr'></TextInput>
</View>

<View style={{flexDirection:'row'}}>
<TextInput style={styles.box2}
placeholder='Buils Area'></TextInput>
<TextInput style={styles.box3}
placeholder='/Hr'></TextInput>
</View>

<View style={{flexDirection:'row'}}>
<TextInput style={styles.box2}
placeholder='Plot Area'></TextInput>
<TextInput style={styles.box3}
placeholder='/Hr'></TextInput>
</View>

<View style={{flexDirection:'row'}}>
<TextInput style={styles.box1}
placeholder='Seating Capacity'></TextInput>
</View>


    </View>

  )
}

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