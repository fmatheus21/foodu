import { Stack } from "expo-router";
import { colors } from "@/styles/colors";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

export default function Layout() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: colors.white[100],
              padding: 10,
            },
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
