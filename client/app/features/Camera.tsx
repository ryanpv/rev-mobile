import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

interface CameraFunctionProps {
  toggleCamera: (bool: boolean) => void;
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
    <View className="flex flex-1 justify-center">
      <CameraView facing={ facing } className="flex-1">
          <TouchableOpacity onPress={ () => toggleCamera(false) } className="self-start my-10 mx-8">
            <AntDesign name="arrowleft" size={36} color="white" />
          </TouchableOpacity>
        <View className="flex-1 flex-row bg-transparent m-10">
          <TouchableOpacity onPress={ toggleCameraFacing } className="flex-1 self-end items-center">
            <Ionicons name="camera-reverse-outline" size={50} color="white" />
            <Text className="font-JakartaBold text-2xl text-white">Switch Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};


export default CameraFunction;