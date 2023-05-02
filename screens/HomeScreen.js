import { View, Text, SafeAreaView, Touchable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets';
import {Image, TouchableOpacity} from 'react-native';
import * as Animatable from "react-native-animatable"

const HomeScreen = () => {
  const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
  return (
    
    <SafeAreaView className = "bg-white flex-1 relative">
      {/* first section */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black
         rounded-full items-center justify-center">
          <Text className="text-[#014D9B] font-semibold text-3xl">Go</Text>
        </View>
        <Text className="text-[#AD8596] font-semibold text-3xl">Travel</Text>
      </View>
      {/* second section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#014D9B] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#AD8596] text-[38px] font-bold">Good Moments</Text>
      
      <Text className="text-[#3C6072] text-base">The best camera for hiking and backpacking is a camera that will take 
        greates photos be compact, lightweight, and able to withstand the .</Text>
      </View>

      <View className="w-[200px] h-[200px] rounded-full bg-[#014D9B] absolute bottom-60 -right-20"></View>
      <View className="w-[200px] h-[200px] rounded-full bg-[#AD8596] absolute -bottom-10 -left-20"></View>

          {/*Image container  */}
          <View className = "flex-1 relative items-center justify-center">
          <Animatable.Image 
          animation={"fadeIn"}
          easing="ease-in-out"
          source={HeroImage}  className="mt-12 w-[280px] h-[400px] object-cover"/>
          
          <View className="absolute bottom-20 w-24 h-24  border-l-2 border-r-2 border-t-4  border-[#014D9B] rounded-[999px]  items-center justify-center">
          <TouchableOpacity>
            <Animatable.View 
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#014D9B]">
              <Text className="text-white text-[25px] font-bold">Go</Text>
            </Animatable.View>
            </TouchableOpacity>
          </View>
          
          </View>

          
    </SafeAreaView>
  )
}

export default HomeScreen