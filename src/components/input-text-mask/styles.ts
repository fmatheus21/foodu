import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  /* container: {
    width: "100%",
    height: 50,
    backgroundColor: colors.gray[100],
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: colors.gray[500],
    borderColor: colors.gray[800],
    fontSize: 16,
  },*/
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
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
});
