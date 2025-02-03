import React from "react";
import {
  View,
  Text,
  Button,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import Animated, { FadeIn, FadeInUp, FadeOut } from "react-native-reanimated";

export default function LoginScreen() {
  return (
    <View className="bg-white h-full w-full">
      <ExpoStatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/background.png")}
      />

      {/* lights */}
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          className="h-[225] w-[90]"
          source={require("../assets/images/light.png")}
        />
        <Image
          className="h-[160] w-[65]"
          source={require("../assets/images/light.png")}
        />
      </View>

      {/* title and form */}
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        {/* Title */}
        <View className="flex items-center mx-4 space-y-4">
          <Text className="text-white font-bold tracking-wider text-5xl">
            Login
          </Text>
        </View>
        {/* Form */}
        <View className="flex items-center mx-4 space-y-4">
          <View className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </View>
          <View className="bg-black/5 p-5 rounded-2xl w-full my-3">
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </View>
          <View className="w-full">
            <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
              <Text className="text-xl font-bold text-white text-center">
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center">
            <Text>Don't have an account?</Text>
            <TouchableOpacity>
              <Text className="text-sky-600">Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
