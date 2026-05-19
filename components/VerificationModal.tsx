import { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";

interface Props {
  visible: boolean;
  onClose: () => void;
  email: string;
}

export default function VerificationModal({ visible, onClose, email }: Props) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    const digit = text.slice(-1);
    if (digit && !/^\d$/.test(digit)) return;

    const newCode = [...code];
    newCode[index] = digit;
    setCode(newCode);

    if (digit && index < 5) {
      inputs.current[index + 1]?.focus();
    }

    if (digit && index === 5 && newCode.every((d) => d !== "")) {
      setTimeout(() => router.replace("/"), 200);
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const reset = () => {
    setCode(["", "", "", "", "", ""]);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={reset}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.overlay}
      >
        <TouchableOpacity style={styles.backdrop} onPress={reset} activeOpacity={1} />
        <View style={styles.sheet}>
          <View style={styles.handle} />

          <Text style={styles.title}>Check your email</Text>
          <Text style={styles.subtitle}>
            {"We've sent a 6-digit code to"}{"\n"}
            <Text style={styles.emailHighlight}>{email || "your email"}</Text>
          </Text>

          <View style={styles.otpRow}>
            {code.map((digit, i) => (
              <TextInput
                key={i}
                ref={(ref) => {
                  inputs.current[i] = ref;
                }}
                style={[styles.otpBox, digit ? styles.otpBoxFilled : null]}
                value={digit}
                onChangeText={(val) => handleChange(val, i)}
                onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, i)}
                keyboardType="number-pad"
                maxLength={1}
                textAlign="center"
                autoFocus={i === 0}
                selectTextOnFocus
              />
            ))}
          </View>

          <TouchableOpacity onPress={reset} style={styles.resendRow}>
            <Text style={styles.resendText}>
              {"Didn't receive a code? "}
              <Text style={styles.resendLink}>Resend</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  sheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 52,
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#E5E7EB",
    alignSelf: "center",
    marginBottom: 24,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    color: "#0D132B",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 28,
  },
  emailHighlight: {
    fontFamily: "Poppins-SemiBold",
    color: "#0D132B",
  },
  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 24,
  },
  otpBox: {
    flex: 1,
    height: 58,
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    fontSize: 22,
    fontFamily: "Poppins-SemiBold",
    color: "#0D132B",
    backgroundColor: "#F6F7FB",
  },
  otpBoxFilled: {
    borderColor: "#6C4EF5",
    backgroundColor: "#EEF2FF",
  },
  resendRow: {
    alignItems: "center",
  },
  resendText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6B7280",
  },
  resendLink: {
    fontFamily: "Poppins-SemiBold",
    color: "#6C4EF5",
  },
});
