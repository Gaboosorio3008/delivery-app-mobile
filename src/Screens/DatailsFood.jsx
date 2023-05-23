import * as React from "react";
import { View, Text } from "react-native";

const FoodDetails = () => {
   
    return (
        <View className=" flex-1 bg-white">
        <Image
        blurRadius={40}
        source={require("../../assets/IMG/background.png")}
        className="absolute top-0 left-0 w-full h-full"
      />
        </View>

    )
  };
  
  export default FoodDetails;