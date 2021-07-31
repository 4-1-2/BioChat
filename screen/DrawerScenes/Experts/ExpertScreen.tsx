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

import {
  PROFILE1,
  PROFILE2,
  PROFILE3,
  PROFILE4,
  PROFILE5,
  PROFILE6,
  PROFILE7,
  PROFILE8,
  PROFILE9,
} from "../../../assets";
import styles from "../../styles";

export default function ExpertScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const data = [
    {
      id: "1",
      name: "Carlos Aguirre",
      distance: "5 km",
      image: PROFILE1,
      specialty: "Healthy plants",
    },
    {
      id: "2",
      name: "Antonia Caballero",
      distance: "2 km",
      image: PROFILE2,
      specialty: "Healthy plants",
    },
    {
      id: "3",
      name: "Jesus Matos",
      distance: "1 km",
      image: PROFILE3,
      specialty: "Healthy plants",
    },
    {
      id: "4",
      name: "Valeria Antares",
      distance: "3 km",
      image: PROFILE4,
      specialty: "Healthy plants",
    },
    {
      id: "5",
      name: "Camila Rodriguez",
      distance: "4 km",
      image: PROFILE5,
      specialty: "Healthy plants",
    },
    {
      id: "6",
      name: "Cristina Bolaño",
      distance: "5 km",
      image: PROFILE6,
      specialty: "Healthy plants",
    },
    {
      id: "7",
      name: "Carmen Aguilar",
      distance: "1.2 km",
      image: PROFILE7,
      specialty: "Healthy plants",
    },
    {
      id: "8",
      name: "Tomas Barreto",
      distance: "3 km",
      image: PROFILE8,
      specialty: "Healthy plants",
    },
    {
      id: "9",
      name: "Cecilia Navidad",
      distance: "7 km",
      image: PROFILE9,
      specialty: "Healthy plants",
    },
  ];
  const [experts, setExperts] = useState(data);
  const [listFiltered, setListFiltered] = useState(data);

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity onPress={() => showProfile(item)}>
        <View
          key={item.id}
          style={{
            minHeight: 70,
            margin: 5,
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              marginRight: 10,
              marginLeft: 10,
              backgroundColor: "#ffffff",
              justifyContent: "flex-start",
            }}
          >
            <Image
              source={item.image}
              style={{ borderRadius: 30, width: 60, height: 60 }}
            ></Image>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text>{item.name}</Text>
            <Text>{`Specialty: ${item.specialty}`}</Text>
            <Text>{`Distance: ${item.distance}`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const showProfile = (item) => {
    navigation.navigate("ProfileExpert", {
      data: {
        id: item.id,
        name: item.name,
        phone: "1232345",
        distance: `Distance ${item.distance || ""}`,
        image: PROFILE1,
        specialty: "Healthy plants",
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
