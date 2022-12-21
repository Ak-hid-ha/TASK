import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './src/Home'
import Location from './src/Location'
import Product from './src/Product'

const stack = createStackNavigator()

function Mystack(){
return(
  <stack.Navigator>
    <stack.Screen
    component={Home}
    name='Home'/>
    <stack.Screen
    component={Product}
    name='Product'/>
    <stack.Screen
    component={Location}
    name='Location'/>
  </stack.Navigator>
)

}
export default function App(){
  return(
    <NavigationContainer>
      <Mystack/>
    </NavigationContainer>
  )
}