import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import React, { useEffect, useState } from "react";
import { Button, Text, TouchableOpacity, View, BackHandler } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

interface CameraFunctionProps {
  toggleCamera: (bool: boolean) => void;
};

const CameraFunction = ({ toggleCamera }: CameraFunctionProps) => {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    const backBtnHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      toggleCamera(false);
      return true;
    });

    return () => backBtnHandler.remove();
  }, []);
  

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
      <CameraView facing={ facing } className="h-full">
        <View className="flex-row justify-between">
          <TouchableOpacity onPress={ () => toggleCamera(false) } className="self-start my-10 mx-8">
            <AntDesign name="arrowleft" size={36} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={ toggleCameraFacing } className="self-end my-10 mx-8">
            <Ionicons name="camera-reverse-outline" size={36} color="white" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};


export default CameraFunction;