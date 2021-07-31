import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import NavigationDrawerHeader from "./Components/NavigationDrawerHeader";
import CustomSidebarMenu from "./Components/CustomSidebarMenu";
// Import Screens
import HomeScreen from "./DrawerScenes/HomeScreen";
import ExpertScreen from "./DrawerScenes/Experts/ExpertScreen";
import ProfileScreen from "./DrawerScenes/Experts/ProfileScreen";

import DiagnosisScreen from "./DrawerScenes/Diagnosis/DiagnosisScreen";
import ReportScren from "./DrawerScenes/Diagnosis/ReportScreen";
import ChatScren from "./DrawerScenes/Bot/ChatScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function homeScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#80b918",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen name="ChatHome" component={ChatScren} />
    </Stack.Navigator>
  );
}

const diagnosisScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="DiagnosisHome"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#80b918",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="DiagnosisHome"
        component={DiagnosisScreen}
        options={{
          title: "Diagnosis",
        }}
      />
      <Stack.Screen
        name="ReportScreen"
        component={ReportScren}
        options={{
          title: "Report",
        }}
      />
      <Stack.Screen name="ChatScreen" component={ChatScren} />
      <Stack.Screen
        name="ProfileDiagnosis"
        component={ProfileScreen}
        options={{
          title: "Profile",
        }}
      />
    </Stack.Navigator>
  );
};

const expertScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="ExpertHome"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#80b918",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="ExpertHome"
        component={ExpertScreen}
        options={{
          title: "Experts",
        }}
      />
      <Stack.Screen
        name="ProfileExpert"
        component={ProfileScreen}
        options={{
          title: "Profile",
        }}
      />
    </Stack.Navigator>
  );
};

export default function DrawerNavigatorRoutes(props) {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#cee1f2",
        itemStyle: { marginVertical: 5, backgroundColor: "white" },
        labelStyle: {
          color: "#545454",
        },
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={CustomSidebarMenu}
    >
      <Drawer.Screen
        name="homeScreenStack"
        options={{ drawerLabel: "Home" }}
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="diagnosisScreenStack"
        options={{ drawerLabel: "Diagnosis" }}
        component={diagnosisScreenStack}
      />
      <Drawer.Screen
        name="expertsScreenStack"
        options={{ drawerLabel: "Experts" }}
        component={expertScreenStack}
      />
    </Drawer.Navigator>
  );
}
