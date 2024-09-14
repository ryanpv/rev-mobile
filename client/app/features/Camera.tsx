import { CameraView, CameraType, useCameraPermissions} from "expo-camera";
import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

interface CameraFunctionProps {
  toggleCamera: () => void;
};

const CameraFunction = ({ toggleCamera }: CameraFunctionProps) => {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>Camera permissions are needed to enable usage.</Text>
        <Button onPress={ requestPermission } title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  return (
    <View className="flex flex-1 justify-center border-2 border-green-500 h-96">
      <CameraView facing={ facing } className="flex-1 h-full">
          <TouchableOpacity onPress={ toggleCamera } className="self-start m-5">
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
        <View className="flex-1 flex-row bg-transparent m-16">
          <TouchableOpacity onPress={ toggleCameraFacing } className="flex-1 self-end items-center">
            <Text className="font-JakartaBold text-2xl text-white">Switch Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};


export default CameraFunction;