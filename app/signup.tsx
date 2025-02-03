import React from "react";
import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function SignupScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl mb-4">Signup Screen</Text>
      <Button
        title="Sign Up"
        onPress={() => {
          /* Handle signup */
        }}
      />
      <Link href="/login" className="mt-4">
        <Text>Back to Login</Text>
      </Link>
    </View>
  );
}
