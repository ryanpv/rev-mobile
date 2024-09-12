import {
  View,
  Text,
  ScrollView,
  Image,
} from "react-native";
import {
  images,
  icons,
} from "../constants";
import InputField from "../components/InputField";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { Link } from "expo-router";
import OAuth from "../components/OAuth";

  const SignIn = () => {
    const [form, setForm] = useState({
      name: "",
      email: "",
      password: "",
    });

  const onSignInPress = () => {
    console.log(form);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image
            source={images.heartHealth}
            className="z-0 w-full h-[250px]"
          />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome!
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) =>
              setForm({
                ...form,
                email: value,
              })
            }
          />
          
          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) =>
              setForm({
                ...form,
                password: value,
              })
            }
          />

          <CustomButton title="Sign In" onPress={ onSignInPress } className="mt-6" />

          {/* OAuth  */}
          <OAuth />

          <Link href="/sign-up" className="text-lg text-center text-general-200 mt-10">
            <Text>Don't have an account?</Text>
            <Text className="text-primary-500">Sign up here</Text>
          </Link>
        </View>

        {/* Verification Modal  */}
      </View>
    </ScrollView>
  );
};

export default SignIn;
