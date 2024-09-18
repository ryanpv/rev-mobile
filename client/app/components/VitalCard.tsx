import { View, Text, FlatList, StyleSheet } from "react-native";
import testData from "../testData.json";

const VitalCard = () => {


  return (
    <View className="flex flex-row flex-wrap justify-center">
      { Object.entries(testData.latest_vital_signs).map(([key, value]) => (
        <View className="rounded-3xl border-2 border-blue-400 h-40 w-40 text-center justify-center items-center m-3 p-2">
          { typeof value === "object" ? (
            <View className="">
             <Text>{ key }: { value.systolic } / { value.diastolic }</Text>
            </View>
          ) : (
            <View className="">
              <Text>
                { key } : { value }
              </Text>
            </View>
          ) }
        </View>
      )) }
    </View>
  )
}

export default VitalCard