import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { images } from "@/constants/theme/images";
import VerificationModal from "@/components/VerificationModal";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      {/* Back arrow */}
      <TouchableOpacity
        onPress={() => router.back()}
        activeOpacity={0.7}
        style={styles.backBtn}
      >
        <Ionicons name="chevron-back" size={26} color="#0D132B" />
      </TouchableOpacity>

      <View className="flex-1 px-6">
        {/* Title */}
        <Text className="font-family-poppins-bold text-[28px] text-foreground mt-1">
          Create your account
        </Text>
        <Text style={styles.subtitle}>Start your language journey today ✨</Text>

        {/* Mascot */}
        <View className="items-center mt-3 mb-2">
          <Image
            source={images.mascotAuth}
            style={styles.mascot}
            resizeMode="contain"
          />
        </View>

        {/* Email input */}
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.inputText}
            placeholder="alex@gmail.com"
            placeholderTextColor="#C4C9D4"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        {/* Password input */}
        <View style={[styles.inputBox, { marginTop: 12 }]}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={[styles.inputText, { flex: 1 }]}
              placeholder="••••••••"
              placeholderTextColor="#C4C9D4"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword((v) => !v)}
              style={styles.eyeBtn}
              activeOpacity={0.7}
            >
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={20}
                color="#9CA3AF"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign Up button */}
        <TouchableOpacity
          className="btn btn-primary w-full mt-6"
          activeOpacity={0.85}
          onPress={() => setShowModal(true)}
        >
          <Text className="btn-label">Sign Up</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center my-5">
          <View className="flex-1 h-px bg-border" />
          <Text className="body-sm text-muted mx-3">or continue with</Text>
          <View className="flex-1 h-px bg-border" />
        </View>

        {/* Social buttons */}
        <SocialButton icon="google" label="Continue with Google" color="#EA4335" />
        <SocialButton icon="facebook-f" label="Continue with Facebook" color="#1877F2" />
        <SocialButton icon="apple" label="Continue with Apple" color="#000000" />

        {/* Log in link */}
        <View className="flex-row justify-center mt-5 mb-4">
          <Text className="body-md text-muted">Already have an account? </Text>
          <TouchableOpacity onPress={() => router.replace("/(auth)/sign-in")} activeOpacity={0.7}>
            <Text className="body-md text-lingua-purple font-family-poppins-semibold">
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <VerificationModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        email={email}
      />
    </SafeAreaView>
  );
}

function SocialButton({
  icon,
  label,
  color,
}: {
  icon: string;
  label: string;
  color: string;
}) {
  return (
    <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
      <FontAwesome5 name={icon} size={19} color={color} brand />
      <Text style={styles.socialLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
    alignSelf: "flex-start",
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#4D8BFF",
    marginTop: 4,
  },
  mascot: {
    width: 140,
    height: 140,
  },
  inputBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  inputLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#9CA3AF",
    marginBottom: 2,
  },
  inputText: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#0D132B",
    padding: 0,
  },
  eyeBtn: {
    padding: 4,
  },
  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
  },
  socialLabel: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    color: "#0D132B",
    marginLeft: 16,
  },
});
