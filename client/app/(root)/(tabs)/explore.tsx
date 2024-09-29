import { useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Explore = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.1.32:8000") // Ensure proper IP (changes with different networks)
        const data = await response.json()
        console.log("DATA: ", data)
      } catch (error) {
        console.log("ERRORRR: ", error)
      }
    };
    
    fetchData()
    
  }, [])
  return (
    <SafeAreaView>

    <View>
      <Text>Explore Page</Text>
    </View>
    </SafeAreaView>
  )
}


export default Explore;