import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screen/Home/HomeScreen";
import MainScren from "./screen/Home/MainScreen";
import ChatScren from "./screen/Home/ChatScreen";
import ReportScren from "./screen/Home/ReportScreen";
import ProfileScren from "./screen/Home/Profile";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={MainScren} />

        <Stack.Screen name="Chat" component={ChatScren} />
        <Stack.Screen name="Report" component={ReportScren} />
        <Stack.Screen name="Profile" component={ProfileScren} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
