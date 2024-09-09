import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OnBoarding = () => {
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity 
        onPress={ () => {
          router.replace("/(auth)/sign-up")
        } }
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-blue-500 text-md font-JakartaBold">Welcome to onboarding</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}


export default OnBoarding;
