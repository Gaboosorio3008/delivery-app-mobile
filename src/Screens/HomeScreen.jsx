import React, { useState } from "react";
import {
  View,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { categories, foodItems } from "../constants/Food";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from 'react-native-animatable';
import CardsFood from "../components/FoodCards.jsx";



const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState('');

  const categoriesFood = categories.map((category, index) => {
    const isActive = category === activeCategory;
    const textStyle = isActive ? { fontWeight: 900 } : { fontWeight: 'normal' };
    return (
      <Animatable.View
      delay={index*129} 
      animation={"slideInDown"}
      key={index}>

      
      <TouchableOpacity
        key={index}
        onPress={() => setActiveCategory(category)}
      >
        <Text style={[textStyle, { color: 'white', fontSize: 15, letterSpacing: 0.5, marginRight: 10 }]}>
          {category}
        </Text>
        {
          isActive? (

            <View  className="flex-row justify-center">

              <Image source={require('../../assets/IMG/line.png')} className=" h-4 w-5"/>

            </View>

          ) : null
        }
      </TouchableOpacity>
      </Animatable.View>
    );
  });

  const Card = foodItems.map((item, index) => (
    <CardsFood item={item} index={index} key={index}/>
    
  ));
  
  return (
    <View className="flex-1 relative">
      {/* Background */}
      <Image
        blurRadius={40}
        source={require("../../assets/IMG/background.png")}
        className="absolute top-0 left-0 w-full h-full"
      />
      <SafeAreaView className="flex-1 pt-12">
        {/* top Buttons */}
        <View className="flex-row justify-between items-center mx-4">
          <View className="bg-white shadow-md rounded-full p-3">
            <Ionicons name="menu" size={30} stroke={100} color="black" />
          </View>

          <View className=" rounded-2xl bg-white">
            <Image
              source={require("../../assets/IMG/avatar.png")}
              className=" w-12 h-12 rounded-2xl"
            />
          </View>
        </View>
        {/* Slogan */}
        <View className=" my-12 space-y-2">
          <Text className=" text-4xl mx-4 font-extrabold text-gray-800">
            Taste
          </Text>
          <Text className=" text-4xl mx-4 font-medium text-gray-800">
            Delivered!
          </Text>
        </View>

        <View className="mx-4 flex-row justify-between items-center space-x-3">
          {/* search */}
          <View className=" flex-row flex-1 p-5 bg-white rounded-2xl items-center">
            <Ionicons name="search" size={15} stroke={40} color="black" />
            <TextInput
              placeholder="Food"
              value="search"
              className="ml-2 text-gray-800"
            />
          </View>

          <View className="bg-white shadow-md rounded-full p-3">
            <Ionicons name="arrow-back" size={30} stroke={40} color="black" />
          </View>
        </View>

        <ScrollView
          className=" mt-6 max-h-20"
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >

          <Text> {categoriesFood} </Text>
          
        </ScrollView>

        <ScrollView
          className=" max-h-full"
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 5 }}
        >
        
        <View className="flex-row">
          {Card}
        </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
