import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OnBoarding = () => {
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <Text className="text-blue-500">Welcome to onboarding</Text>
    </SafeAreaView>
  )
}


export default OnBoarding;