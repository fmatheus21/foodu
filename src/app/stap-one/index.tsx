import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { Button } from "@/components/button";

export default function StapOne() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("@/assets/icon/snack.png")} />
      <Text style={styles.title}>Order for Food</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <View style={styles.pagination}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
      <Button
        title="Next"
        onPress={() => console.log("Botão Next acionado.")}
      />
    </View>
  );
}
