import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green[400],
    width: "100%",
    height: 52,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.gray[100],
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
