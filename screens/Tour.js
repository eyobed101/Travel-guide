import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AttractionImage, AvaterImage, FoodImage, HotelImage } from "../assets";
import SearchBar from "react-native-search-bar";
import MenuCont from "../components/MenuCont";

const Tour = () => {
  const navigation = useNavigation();

  const [type, setType] = useState("hotels")

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative mt-10">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[36px] text-[#0b646b] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[30px]">The beauty today</Text>
        </View>
        <View className="w-12 h-12 bg-gray-300 rounded-md items-center justify-center">
          <Image
            source={AvaterImage}
            className="w-full h-full object-cover shadow-lg"
          />
        </View>
      </View>
      <View>
        <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-md mt-4">
        <TextInput placeholder="Search" className="text-[15px] h-8"></TextInput>
        </View> 
        
      </View>

      <ScrollView>
      <View className="flex-row items-center justify-between px-8 mt-8">
        <MenuCont key={"hotels"} title="Hotels" imageSrc = {HotelImage} 
        type ={type}
        setType={setType}
        />
        <MenuCont key={"attractions"} title="Attractions" imageSrc = {AttractionImage} 
        type ={type}
        setType={setType}
        />
        <MenuCont key={"food"} title="Food" imageSrc = {FoodImage} 
        type ={type}
        setType={setType}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tour;
