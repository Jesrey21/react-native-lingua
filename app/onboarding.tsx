import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { images } from "@/constants/theme/images";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 px-6">

        {/* Logo row */}
        <View className="flex-row items-center mt-10 gap-2.5 justify-center">
          <Image
            source={images.mascotLogo}
            className="w-10 h-10"
            resizeMode="contain"
          />
          <Text className="font-family-poppins-semibold text-[25px] text-foreground tracking-tight ">
            muolingo
          </Text>
        </View>

        {/* Headline */}
        <View className="mt-8">
          <Text className="font-family-poppins-bold text-[34px] text-foreground">
            Your AI language
          </Text>
          <View className="flex-row">
            <Text className="font-family-poppins-medium text-[34px] text-lingua-purple">
              teacher
            </Text>
            <Text className="font-family-poppins-bold text-[34px] text-foreground">
              .
            </Text>
          </View>
        </View>

        {/* Subtitle */}
        <Text className="body-md text-muted mt-3 leading-[22px]">
          Real conversations, personalized{"\n"}lessons, anytime, anywhere.
        </Text>

        {/* Mascot + speech bubbles */}
        <View className="flex-1 items-center justify-center">
          {/* Hello! bubble — left */}
          <View
            className="absolute left-0 bg-[#EEF2FF] rounded-2xl px-4 py-2.5 z-10"
            style={{ top: "28%" }}
          >
            <Text className="font-poppins-semibold text-[15px] text-foreground">
              Hello!
            </Text>
          </View>

          {/* ¡Hola! bubble — top right */}
          <View
            className="absolute right-0 bg-[#EEF2FF] rounded-2xl px-4 py-2.5 z-10"
            style={{ top: "15%" }}
          >
            <Text className="font-poppins-semibold text-[15px] text-lingua-purple">
              ¡Hola!
            </Text>
          </View>

          {/* 你好! bubble — bottom right */}
          <View
            className="absolute right-2 bg-[#FEF2F2] rounded-2xl px-4 py-2.5 z-10"
             style={{ bottom: "22%" }}
          >
            <Text className="font-poppins-semibold text-[15px] text-[#E53935]">
              你好!
            </Text>
          </View>

          {/* Mascot illustration */}
          <Image
            source={images.mascot}
            className="w-120 h-120"
            resizeMode="contain"
          />
        </View>

        {/* Get Started button */}
        <TouchableOpacity
          className="btn btn-primary flex-row items-center justify-center mb-8"
          activeOpacity={0.85}
          onPress={() => router.push("/(auth)/sign-up")}
        >
          <Text className="btn-label mr-2">Get Started</Text>
          <Text className="btn-label text-[20px]">›</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
