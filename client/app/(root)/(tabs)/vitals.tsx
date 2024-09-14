import { useState } from "react";
import {
  View,
  Text,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CameraFunction from "@/app/features/Camera";
import CustomButton from "@/app/components/CustomButton";
import Foundation from '@expo/vector-icons/Foundation';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Vitals = () => {
  const [cameraOn, setCameraOn] =
    useState(false);

  const toggleCamera = () => {
    setCameraOn(!cameraOn);
  };

  return (
    <SafeAreaView>
      <StatusBar hidden={ cameraOn } />
      <View className="h-full">

        <View className="h-5/6">
          { cameraOn ? (
            null
          ) : (
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
                  onPress={ toggleCamera }
                  title="Take Vitals"
                  IconLeft={ () => (
                    <View className="mx-2 px-1 py-0.5 border-2 border-white rounded">
                      <Foundation name="mountains" size={24} color="white" />
                    </View>
                  )}
                />
              </View>

            </View>
          )}
          
          {/* CAMERA COMPONENT  */}
          { cameraOn && (
            <CameraFunction toggleCamera={ toggleCamera } />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Vitals;
