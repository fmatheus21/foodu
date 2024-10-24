import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
  },
  boxOne: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  boxTwo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  boxThree: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  description: {
    textAlign: "center",
    marginHorizontal: 30,
    marginBottom: 20,
  },
  pagination: {
    flexDirection: "row",
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: colors.green[400],
    width: 30,
  },
});
