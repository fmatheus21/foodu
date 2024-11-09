import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.gray[100],
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: colors.gray[200],
  },
  input: {
    flex: 1,
    padding: 10,
    height: 50,
  },
  inputFocused: {
    backgroundColor: colors.green[90],
    borderColor: colors.green[400],
  },
  /*  container: {
    flexDirection: "row",
    alignItems: "center",
    borderStyle: "solid",
    borderColor: colors.green[700],
    backgroundColor: colors.gray[100],
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.gray[500],
  },
  inputFocused: {
    backgroundColor: colors.green[100],
  },*/
});
