import * as React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const FoodDetails = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [count, setCount] = useState(1);

  const { itemsImage } = route.params;
  const { itemsName } = route.params;

  return (
    <View className=" flex-1 bg-white">
      <Image
        blurRadius={40}
        source={require("../../assets/IMG/background.png")}
        className="absolute top-0 left-0 w-full h-full"
      />

      <SafeAreaView className="flex-1">
        <View className="p-10 flex-row  justify-between">
          <TouchableOpacity
            className=" rounded-2xl bg-white"
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={30} stroke={40} color="black" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="heart" size={30} stroke={40} color="white" />
          </TouchableOpacity>
        </View>

        <View className="flex justify-center items-center">
          <Image className="h-48 w-48" source={itemsImage} />
          <Text className="text-3xl text-white"> {itemsName} </Text>
        </View>

        <View className="flex-1 items-center">
          <View className="flex-row items-center border-2 justify-center mt-10 p-1 w-32 bg-gray-100/80 rounded-2xl space-x-3">
            <Icon
              name="minus"
              size={24}
              color="black"
              onPress={() => setCount(count - 1)}
            />
            <Text className="text-xl font-seminold text-black">{count}</Text>

            <Icon
              name="plus"
              size={24}
              color="black"
              onPress={() => setCount(count + 1)}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default FoodDetails;
