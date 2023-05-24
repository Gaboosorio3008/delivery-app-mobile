import * as React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";

const FoodDetails = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [count, setCount] = useState(1);

  const { itemsImage } = route.params;
  const { itemsName } = route.params;
  const { itemsPrice } = route.params;
  const { itemsDescription } = route.params;

  const showAlert = () => {
    Alert.alert('¡Alerta!', 'Product added to you cart', [
      { text: 'Aceptar', onPress: () => navigation.navigate('Home') }
    ]);
  };

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

          <View className="bg-white flex min-h-72 w-80 rounded-2xl gap-4 justify-between my-5 px-2">
            <View className="flex-row gap-4">
              <Animatable.View
                delay={129}
                animation={"slideInDown"}
                className="flex items-center space-y-2"
              >
                <Image
                  source={require("../../assets/IMG/calories.png")}
                  className=" h-6 w-6"
                />

                <Text className="font-semibold"> 130 Cal</Text>
              </Animatable.View>
              <Animatable.View
                delay={129}
                animation={"slideInDown"}
                className="flex items-center space-y-2"
              >
                <Image
                  source={require("../../assets/IMG/clock.png")}
                  className=" h-6 w-6"
                />

                <Text className="font-semibold"> 45-60 min</Text>
              </Animatable.View>

              <Animatable.View
                delay={129}
                animation={"slideInDown"}
                className="flex items-center space-y-2"
              >
                <Image
                  source={require("../../assets/IMG/chat.png")}
                  className=" h-6 w-6"
                />

                <Text className="font-semibold"> Hello</Text>
              </Animatable.View>

              <Animatable.View
                delay={129}
                animation={"slideInDown"}
                className="flex items-center space-y-2"
              >
                <Image
                  source={require("../../assets/IMG/weight.png")}
                  className=" h-6 w-6"
                />

                <Text className="font-semibold"> 1kg </Text>
              </Animatable.View>
            </View>

            <View>
              <Animatable.Text
                delay={129}
                animation={"slideInUp"}
                className="flex items-center space-y-2"
              >
                <Text className=" font-bold text-lg"> Description </Text>
              </Animatable.Text>
            </View>

            <View>
              <Animatable.Text
                delay={129}
                animation={"slideInUp"}
                className="flex items-center space-y-2"
              >
                <Text className=" font-medium text-1xl text-gray-600">
                  {itemsDescription}
                </Text>
              </Animatable.Text>
            </View>

            <View className="flex-row justify-between items">
              <Animatable.Text
                delay={129}
                animation={"slideInUp"}
                className="flex items-center space-y-2"
              >
                <Text className=" font-medium text-3xl text-gray-600">
                  ${itemsPrice * count}
                </Text>
              </Animatable.Text>

              <Animatable.View delay={120} animation={"slideInUp"}>
                <TouchableOpacity
                  className=" bg-black rounded-full  mb-2"
                  onPress={showAlert}
                >
                  <Text className=" font-medium text-xl text-white p-1">
                    Add To Cart
                  </Text>
                </TouchableOpacity>
              </Animatable.View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default FoodDetails;
