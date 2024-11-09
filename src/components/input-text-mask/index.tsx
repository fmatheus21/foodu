import { View } from "react-native";
import { TextInputMask, TextInputMaskProps } from "react-native-masked-text";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { useState } from "react";

type Props = TextInputMaskProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
  type: TextInputMaskProps["type"];
};

export function InputTextMask({ icon, type, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={[styles.container, isFocused && styles.inputFocused]}>
      <MaterialIcons
        name={icon}
        size={24}
        color={isFocused ? colors.green[400] : colors.gray[400]}
      />
      <TextInputMask
        type={type}
        {...rest}
        style={styles.input}
        placeholderTextColor={colors.gray[400]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}
