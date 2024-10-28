// styles.ts
import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white[100],
  },
  boxOne: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  boxTwo: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
  },
  boxThree: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: colors.gray[100],
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: "#ffffff",
    fontSize: 16,
  },
});
