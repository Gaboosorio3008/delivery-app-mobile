import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';


export default function CardsFood({ item, index }) {
  return (
    <Animatable.View
    delay={index*120}
    animation={'slideInRight'}
     className="bg-gray-500/80 w-56 h-72 my-5 mr-6 p-3 py-5 rounded-3xl">
      <View className=" flex-row justify-center">
        <Image source={item.image} className="w-32 h-32" />
      </View>

      <View className=" flex-1 px-3 py-2 space-y-2">
        <Text className=" text-white  text-xl font-medium tracking-wider">{item.name}</Text>
        <Text className="text-white">{item.ingredients}</Text>
      </View>

      <View className="flex-row justify-between items-center px-1">

        <Text className="text-2xl font-semibold text-white">${item.price}</Text>

        <TouchableOpacity className=" bg-white rounded-full p-3">
        <Ionicons name="fast-food-sharp" size={32} color="black" />

        </TouchableOpacity>

      </View>
    </Animatable.View>
  );
}

