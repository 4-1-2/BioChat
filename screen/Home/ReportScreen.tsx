import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import { BOT128 } from "../../assets";
import styles from "./styles";

export default function ReportScren({ navigation, route }) {
  const { params } = route;

  const [messages, setMessages] = useState([]);
  const onPress = async () => {
    console.log("chat");
    navigation.navigate("Chat", { message: params.data.question });
  };
  return (
    <View style={styles.containerChat}>
      <View style={styles.containerSubTitle}>
        <Text style={styles.title}>{params.data.plant}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          marginTop: 20,
        }}
      >
        <View style={{ height: 70, paddingRight: 10 }}>
          {params.image && (
            <Image
              source={{ uri: params.image }}
              style={{ width: 60, height: 60 }}
            />
          )}
        </View>
        <View style={styles.paragraphContainer}>
          <Text style={styles.subtitle}>Diagnosis:</Text>
          <Text style={styles.paragraph}>{params.data.diagnosis}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 2, backgroundColor: "#aacc00" }} />
      </View>
      <View style={styles.containerSend}>
        <TouchableOpacity
          onPress={onPress}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Text style={[styles.buttonText, styles.textPrimary]}>
            Start chat
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
