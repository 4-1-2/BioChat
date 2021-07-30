// import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { BOT_GREEN } from "../../assets";
import styles from "./styles";

export default function ExpertScren({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const data = [
    { id: "1", name: "Angelica Antarea", distance: "5 km" },
    { id: "2", name: "Angelica Antarea", distance: "2 km" },
    { id: "3", name: "Angelica Antarea", distance: "1 km" },
    { id: "4", name: "Angelica Antarea", distance: "3 km" },
    { id: "5", name: "Angelica Antarea", distance: "4 km" },
    { id: "6", name: "Angelica Antarea", distance: "5 km" },
    { id: "7", name: "Angelica Antarea", distance: "1.2 km" },
    { id: "8", name: "Angelica Antarea", distance: "3 km" },
    { id: "9", name: "Carla Antarea", distance: "7 km" },
  ];
  const [experts, setExperts] = useState(data);
  const [listFiltered, setListFiltered] = useState(data);

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity onPress={() => showProfile(item)}>
        <View key={item.id} style={{ minHeight: 70, padding: 50 }}>
          <Text>{item.name}</Text>
          <Text>{item.distance}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const showProfile = (item) => {
    navigation.navigate("Profile", {
      data: {
        name: item.name,
        phone: "1232345",
        distance: `Distance ${item.distance || ""}`,
        direction: "Av. Sol 123 - Cusco",
        email: "correo@gmail.com",
        description:
          "Hello, for 5 years I have been dedicated to the care and production of organic food. At Organic Cusco we provide you with all the necessary information so that your flat has the appropriate ones.",
        descriptionAlternative:
          "Te ayudamos con las enfermedades y/o plagas que tu planata pueda tener, nuestras soluciones son ecoamigables.",
      },
    });
  };

  const handleChange = (value: string) => {
    console.log(value);
    const filtered = experts.filter((item) =>
      item.name.toUpperCase().includes(value.toUpperCase())
    );
    setListFiltered(filtered);
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: "transparent" }} />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#ddd"
        onChangeText={handleChange}
        style={styles.searchInput}
      />
      <View style={{ flex: 1, backgroundColor: "#FFF" }}>
        {isLoading ? (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <ActivityIndicator size="large" color="#bad555" />
          </View>
        ) : null}
        <FlatList
          data={listFiltered}
          renderItem={renderItem}
          keyExtractor={(item, idx) => idx.toString()}
          ListEmptyComponent={() => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#bad555" }}>No expert found.</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
