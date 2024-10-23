import { Text } from "react-native";
import { styles } from "./styles";

type Props = {
  desccription: string;
  style?: object;
};

export function Description({ desccription, style }: Props) {
  return <Text style={[styles.description, style]}>{desccription}</Text>;
}
