import { View } from "react-native";
import { TextInputMask, TextInputMaskProps } from "react-native-masked-text";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

type Props = TextInputMaskProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
  type: TextInputMaskProps["type"];
};

export function InputTextMask({ icon, type, ...rest }: Props) {
  return (
    <>
      <View style={styles.inputContainer}>
        <MaterialIcons
          name={icon}
          size={24}
          color={colors.gray[300]}
          style={styles.icon}
        />
        <TextInputMask
          type={type}
          {...rest}
          style={styles.input}
          placeholderTextColor={colors.gray[400]}
        />
      </View>
    </>
  );
}
