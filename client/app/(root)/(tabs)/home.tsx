import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



const Home = () => {
  return (
    <SafeAreaView className="bg-general-500 h-96 border-2 border-red-500">
      <View>
        <Text>Home Page!</Text>
      </View>

    </SafeAreaView>
  )
}


export default Home;