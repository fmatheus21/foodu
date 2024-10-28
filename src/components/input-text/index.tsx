import { TextInput, TextInputProps, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

type Props = TextInputProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
};

export function InputText({ icon, ...rest }: Props) {
  return (
    <>
      <View style={styles.inputContainer}>
        <MaterialIcons
          name={icon}
          size={24}
          color={colors.gray[300]}
          style={styles.icon}
        />
        <TextInput
          style={[styles.input, !icon && { paddingHorizontal: 25 }]}
          {...rest}
          placeholderTextColor={colors.gray[400]}
        />
      </View>
    </>
  );
}
