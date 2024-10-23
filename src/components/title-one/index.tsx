import { Text } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
};

export function TitleOne({ title }: Props) {
  return <Text style={styles.title}>{title}</Text>;
}
