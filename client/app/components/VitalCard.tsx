import { View, Text, FlatList, StyleSheet } from "react-native";
import testData from "../testData.json";

const VitalCard = () => {


  return (
    <View className="flex flex-row flex-wrap justify-between h-full border-2 border-red-500">
      { Object.entries(testData.latest_vital_signs).map(([key, value]) => (
        <View className="border-2 border-blue-400 h-40 w-40 text-center justify-center items-center">
          { typeof value === "object" ? (
            <View>

            <Text>{ key }: { value.systolic } / { value.diastolic }</Text>
            </View>
            ) : (
              <View>

            <Text>
              { key } : { value }
            </Text>
              </View>
            ) }
        </View>
      )) }

    </View>
    // <View className="flex flex-col h-40 w-40 border-2 border-blue-400 rounded-xl">
    //   <Text>Latest Vitals</Text>
    // </View>
  )
}

export default VitalCard