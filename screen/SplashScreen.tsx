import { StackScreenProps } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { BOT_WHITE } from "../assets";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SplashScreen({ navigation }) {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      // TODO : Check if user_id is set or not
      // AsyncStorage.getItem("user_id").then((value) =>
      //   navigation.replace(value === null ? "Auth" : "DrawerNavigationRoutes")
      // );
      AsyncStorage.getItem("user_id").then((value) =>
        navigation.replace(
          value === null ? "DrawerNavigationRoutes" : "DrawerNavigationRoutes"
        )
      );
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#80b918", "#A5E887"]}
        style={{
          left: 0,
          right: 0,
          top: 0,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Image source={BOT_WHITE} width={64} />
        {/* <Text style={styles.title}>Agrobot</Text> */}
        <ActivityIndicator
          animating={animating}
          color="#FFFFFF"
          size="large"
          style={styles.activityIndicator}
        />
      </LinearGradient>
    </View>
  );
}
