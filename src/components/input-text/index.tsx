import { TextInput, TextInputProps, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { useState } from "react";

type Props = TextInputProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
  secureTextEntry: boolean;
};

export function InputText({ icon, secureTextEntry, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={[styles.container, isFocused && styles.inputFocused]}>
      <MaterialIcons
        name={icon}
        size={24}
        color={isFocused ? colors.green[400] : colors.gray[400]}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={colors.gray[400]}
        secureTextEntry={secureTextEntry}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
    </View>
  );
}
