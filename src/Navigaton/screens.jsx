import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import HomeScreen from "../Screens/HomeScreen";
import FoodDetails from "../Screens/DatailsFood"

export function Screen1({ navigation }) {
  return (
    <View className="flex-1">
    <HomeScreen />      
    </View> 

  );
}

export function Screen2({ navigation }) {
  return (
    <View className="flex-1">
    <FoodDetails />   
    </View> 

  );
}


