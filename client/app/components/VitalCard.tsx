import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

interface TestData {
  latest_vitals_taken: string; // ISO date string
  latest_vital_signs: {
    blood_pressure: {
      systolic: number;
      diastolic: number;
    };
    heart_rate: number;
    respiratory_rate: number;
    blood_oxygen: number;
  };
  longest_streak: number;
  current_streak: number;
}

type PartialVitals = Partial<TestData>

interface VitalCardProps {
  testData: PartialVitals;
};

const VitalCard: React.FC<VitalCardProps> = ({ testData }) => {

  if (!testData || !testData.latest_vital_signs) {
    return <Text>No vital signs logged</Text>
  }

  return (
    <View className="flex flex-row flex-wrap justify-center">
      { Object.entries(testData.latest_vital_signs).map(([key, value]) => (
        <View key={ key } className="rounded-3xl border-2 border-blue-400 h-40 w-40 text-center justify-center items-center m-3 p-2">
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