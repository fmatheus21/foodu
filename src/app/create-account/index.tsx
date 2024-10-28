// CreateAccount.tsx
import { View, Image, Alert } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/button";
import { TitleOne } from "@/components/title-one";
import { useRouter } from "expo-router";
import { InputText } from "@/components/input-text";
import { useState } from "react";
import { InputTextMask } from "@/components/input-text-mask";

export default function CreateAccount() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  function handleSignUp() {
    if (!phone) {
      return Alert.alert("Aviso", "O telefone deve ser informado.");
    }
    if (!email) {
      return Alert.alert("Aviso", "O telefone deve ser informado.");
    }
    if (!fullName) {
      return Alert.alert("Aviso", "O telefone deve ser informado.");
    }
    router.push("/step-three");
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxOne}>
        <Image
          style={styles.image}
          source={require("@/assets/icon/logo.png")}
        />
        <TitleOne title="Create New Account" />
      </View>
      <View style={styles.boxTwo}>
        <InputTextMask
          type="cel-phone"
          options={{
            maskType: "BRL",
            withDDD: true,
            dddMask: "(99) ",
          }}
          icon="phone-iphone"
          placeholder="Telefone"
          keyboardType="numeric"
          onChangeText={(value) => setPhone(value)}
        />
        <InputText
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(value) => setEmail(value)}
        />
        <InputText
          icon="person"
          placeholder="Nome Completo"
          secureTextEntry={false}
          onChangeText={(value) => setFullName(value)}
        />
      </View>

      <View style={styles.boxThree}>
        <Button title="Sign Up" onPress={() => handleSignUp()} />
      </View>
    </View>
  );
}
