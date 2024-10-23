import { View, Image, ImageBackground } from "react-native";
import { useRouter } from "expo-router"; // Alterado para o hook useRouter
import { styles } from "./styles";

import { Button } from "@/components/button";
import { TitleOne } from "@/components/title-one";
import { Description } from "@/components/description";

export default function StepOne() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/background/one.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.boxOne}>
          <Image
            style={styles.image}
            source={require("@/assets/icon/snack.png")}
          />
        </View>

        <View style={styles.boxTwo}>
          <TitleOne title="Order for Food" />
          <Description
            desccription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
            style={styles.description}
          />
        </View>

        <View style={styles.boxThree}>
          <View style={styles.pagination}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>

          <Button title="Next" onPress={() => router.push("/step-two")} />
        </View>
      </ImageBackground>
    </View>
  );
}
