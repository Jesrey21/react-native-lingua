import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import "../global.css";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background px-6">
      <Text className="h2 mb-2 text-center">Welcome to muolingo</Text>
      <Text className="h-1">
        Your AI language learning companion.
      </Text>

      <TouchableOpacity
        className="btn btn-primary w-full"
        activeOpacity={0.85}
        onPress={() => router.push("/onboarding")}
      >
        <Text className="btn-label">Open Onboarding</Text>
      </TouchableOpacity>
    </View>
  );
}
