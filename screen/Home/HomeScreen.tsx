// import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

import { BOT_GREEN } from "../../assets";
import styles from "./styles";

export default function HomeScren({ navigation }) {
  const onPressChat = () => {
    navigation.navigate("Chat", {
      message: "",
    });
  };

  const onPressDiagnosis = () => {
    navigation.navigate("Main", { open: true });
  };

  const onPressExperts = () => {
    navigation.navigate("Experts", { open: true });
  };

  return (
    <View style={styles.containerHome}>
      <View style={styles.imageContainer}>
        <Image source={BOT_GREEN} width={64} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={onPressChat}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Text style={[styles.buttonText, styles.textSecondary]}>BioChat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressDiagnosis}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Text style={[styles.buttonText, styles.textPrimary]}>Diagnosis</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressExperts}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Text style={[styles.buttonText, styles.textPrimary]}>Experts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
