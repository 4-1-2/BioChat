import * as React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

import { LOGO_HOR } from "../../assets";
import styles from "./styles";

export default function HomeScren({ navigation }) {
  const onPressChat = () => {
    navigation.navigate("ChatHome", {
      message: "",
    });
  };

  return (
    <View style={styles.containerHome}>
      <View style={styles.imageContainer}>
        <Image
          source={LOGO_HOR}
          style={{
            width: 180,
            height: 50,
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={onPressChat}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Text style={[styles.buttonText, styles.textSecondary]}>
            Start BioChat
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
