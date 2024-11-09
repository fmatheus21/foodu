// CreateAccount.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import Checkbox from "expo-checkbox";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useRouter } from "expo-router";
import { InputText } from "@/components/input-text";
import { InputTextMask } from "@/components/input-text-mask";
import { colors } from "@/styles/colors";

export default function CreateAccount() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

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
      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.backButton}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require("@/assets/icon/logo.png")} style={styles.logo} />
      </View>

      <Text style={styles.title}>Create New Account</Text>

      {/* Input de Telefone */}
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

      {/* Input de Email */}
      <InputText
        icon="email"
        placeholder="Email"
        keyboardType="email-address"
        secureTextEntry={false}
        onChangeText={(value) => setEmail(value)}
      />

      {/* Input Nome Completo */}
      <InputText
        icon="person"
        placeholder="Nome Completo"
        secureTextEntry={false}
        onChangeText={(value) => setFullName(value)}
      />

      {/* Checkbox "Remember Me" */}
      <View style={styles.checkboxContainer}>
        <Checkbox
          style={styles.checkbox}
          value={rememberMe}
          onValueChange={setRememberMe}
          color={rememberMe ? colors.green[400] : undefined}
        />
        <Text style={styles.checkboxLabel}>Remember me</Text>
      </View>

      {/* Botão de Cadastro */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign up</Text>
      </TouchableOpacity>

      {/* Opções de Login Social */}
      <Text style={styles.orText}>or continue with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialIconView}>
          <Image
            source={require("@/assets/icon/facebook.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIconView}>
          <Image
            source={require("@/assets/icon/google.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIconView}>
          <Image
            source={require("@/assets/icon/apple.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Link para Login */}
      <TouchableOpacity>
        <Text style={styles.signInText}>
          Already have an account?{" "}
          <Text style={styles.signInLink}>Sign in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
