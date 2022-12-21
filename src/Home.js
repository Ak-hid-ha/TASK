import React, { useEffect, useState } from "react";
import {View,Text,StyleSheet,TouchableHighlight,ScrollView, FlatList,ActivityIndicator, ImageBackground,Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Searchbar } from "react-native-paper";
import axios from "axios";


const Home  = () => {

  const imgurl ='https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/SMLGiVKoP1nf9v3WMvL4Jy7t6w2PGERwrMlMX8S9.jpg'
  
  const [isloading,setIsloading] = useState(true)
const [data,setData]=useState([])
  const [searchQuery,setSearchQuery] =React.useState('');
  const onChangeSearch = query=>setSearchQuery(query);

  useEffect(()=>{
    axios.get('https://api.xentice.com/api/postadSelect')
    .then((response)=>{
      console.log(response,'is response*****')
      setData(response.data)
    })
    .catch((error)=>{
      console.log(error,"error****")
    })
    setIsloading(false)
},[])

  

  return(

  
  <View style={styles.container}>
    <View style={{flexDirection:'row'}}>
      <View style={{marginTop:5,paddingLeft:20}}>
      <Icon name="sort" size={50} color='blue'></Icon>
      </View>
      <Text style={{fontSize:40,color:'blue',marginLeft:20,fontFamily:'monospace'}}>xentice</Text>
    </View>
<View style={{marginTop:10,width:'95%',paddingLeft:25}}>
<Searchbar 
  placeholder='Search'
  onChangeText={onChangeSearch}
  value={searchQuery}/>
</View>
<View style={{flexDirection:'row'}}>
<View style={{marginTop:10,marginLeft:24}}>
  <TouchableHighlight style={styles.button}>
<Text style={{fontSize:16,color:'black',fontWeight:'bold'}}>Property</Text>
  </TouchableHighlight>
</View>
<View style={{marginTop:10,marginLeft:10}}>
  <TouchableHighlight style={styles.button}>
<Text style={{fontSize:16,color:'black',fontWeight:'bold'}}>Services</Text>
  </TouchableHighlight>
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
<ScrollView
>
<View style={{marginTop:20,paddingLeft:12}}>
  <Text style={{fontSize:18, fontWeight:'bold',color:'black'}}>Commercial Office</Text>
</View>


{ isloading ? <ActivityIndicator/>:
<FlatList 
horizontal={true}
data={data}
renderItem={({item})=>{
  return(
  <View style={{flexDirection:'row',marginTop:10}}>
    <View style={{marginLeft:10}}>

  <ImageBackground 
  style={styles.productbar}>
    <Image source={{uri:item?.imgurl}}
    size={{width:150,height:150,resizeMode:'contain',backgroundColor:'green'}}></Image>
</ImageBackground>


<ImageBackground 
  style={styles.productbar}>
    <Image source={{uri:item?.imgurl}}
    size={{width:150,height:150,resizeMode:'contain',backgroundColor:'green'}}></Image>
</ImageBackground>
  
  </View>
  </View>
  
  

)}}/>
  
  }
  </ScrollView>
</View>
  )}          


  const styles= StyleSheet.create({

    container:{
     flex:1
    },

  button:{
    borderWidth:1,
    width:100,
    height:40,
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'grey'
  },
  box:{
    width:72,
    height:70,
    borderRadius:8,
    borderWidth:1,
    alignItems:'center',
    borderColor:'grey'
  },
  productbar:{
height:200,
width:200,
elevation:6,
borderRadius:8,

  },
  imagebackground:{
    width:10,
    height:10,
    
  }
})

export default Home;