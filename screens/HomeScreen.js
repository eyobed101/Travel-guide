import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets';


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
        great photos be compact, lightweight, and able to withstand the .</Text>
      </View>

      <View className="w-[300px] h-[300px] rounded-full bg-[#014D9B] absolute bottom-36 -right-36"></View>
      <View className="w-[300px] h-[300px] rounded-full bg-[#AD8596] absolute -bottom-20 -left-36"></View>

          {/*Image container  */}
          <View className = "flex-1 relative items-center justify-center">
          <Image source={{uri: '../assets/mainHero.png'}} />
          </View>
    </SafeAreaView>
  )
}

export default HomeScreen