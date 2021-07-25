// import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

import styles from "./styles";
import { BOT_GREEN } from "../../assets";

export default function HomeScren({ navigation }) {
  const onPressButton = () => {
    navigation.navigate("Main", { open: true });
  };
  return (
    <View style={styles.containerHome}>
      <View style={styles.imageContainer}>
        <Image source={BOT_GREEN} width={64} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={onPressButton}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Text style={[styles.buttonText, styles.textSecondary]}>Iniciar</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={onPressButton}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Text style={[styles.buttonText, styles.textPrimary]}>
            Contáctanos
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
