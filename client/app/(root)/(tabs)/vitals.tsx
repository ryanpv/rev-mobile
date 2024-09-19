import { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CameraFunction from "@/app/features/Camera";
import CustomButton from "@/app/components/CustomButton";
import Foundation from '@expo/vector-icons/Foundation';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { useNavigation } from "expo-router";
import VitalCard from "@/app/components/VitalCard";
import testData from "../../testData.json"

const Vitals = () => {
  const [cameraOn, setCameraOn] = useState(false);
  const navigation = useNavigation();
  const defaultTabBarStyle = {
    borderRadius: 25,
    padding: 10,
    paddingBottom: 10,
    overflow: "hidden",
    marginHorizontal: 20,
    marginBottom: 20,
    height: 76,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // flexDirection: "row",
    position: "absolute",
  };

  const toggleCamera = (bool: boolean) => {
    setCameraOn(bool);
    navigation.setOptions({ tabBarStyle: bool ? { display: 'none' } : defaultTabBarStyle });
  };

  return (
    <SafeAreaView className="">
        <StatusBar hidden={ cameraOn } />

        <View className="h-full">
            { cameraOn ? (
              <View className="h-5/6">
                <CameraFunction toggleCamera={ toggleCamera } />
              </View>
            ) : (
              <ScrollView>
                <View className="pb-60">
                  <View className="gap-y-10">
                    {/* USER NAME/ICON PLACEHOLDER  */}
                    <View className="flex flex-col items-center pt-10">
                      <View className="flex border-2 border-blue-500 bg-blue-500 h-20 w-20 justify-center items-center rounded-full">
                        <MaterialIcons name="person-outline" size={50} color="white" />
                      </View>
                      <Text className="text-center font-JakartaBold text-2xl mt-2">Your Vitals</Text>
                    </View>
                    {/* BUTTON TOGGLE CAMERA  */}
                    <View className="mx-8">
                      <CustomButton 
                        onPress={ () => toggleCamera(true) }
                        title="Take Vitals"
                        IconLeft={ () => (
                          <View className="mx-2 px-1 py-0.5 border-2 border-white rounded">
                            <Foundation name="mountains" size={24} color="white" />
                          </View>
                        )}
                      />
                    </View>
                  </View>

                  <View className="my-10">
                    <Text className="text-center">Latest Vitals: { testData.latest_vitals_taken }</Text>
                  </View>
      
                  <VitalCard testData={ testData } />
                </View>
              </ScrollView>
            )}
        </View>
    </SafeAreaView>
  );
};

export default Vitals;
