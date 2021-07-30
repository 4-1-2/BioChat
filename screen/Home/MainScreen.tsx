import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, Dimensions } from "react-native";

import * as ImagePicker from "expo-image-picker";
import ImageEditor from "@react-native-community/image-editor";

import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { sendInfo } from "../../resources";
import ExpertScren from "./ExpertScreen";
import DiagnosisScren from "./DiagnosisScreen";
import ChatScren from "./ChatScreen";
import HomeScren from "./HomeScreen";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

function MenuDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScren}
        initialParams={{ params: "hola" }}
      />
      <Drawer.Screen name="Diagnosis" component={DiagnosisScren} />
      <Drawer.Screen name="Experts" component={ExpertScren} />
    </Drawer.Navigator>
  );
}

export default function MainScren({ navigation, route }) {
  const { params } = route;
  const dimensions = Dimensions.get("window");

  return (
    <NavigationContainer independent={true}>
      <MenuDrawer />
    </NavigationContainer>
  );
}
