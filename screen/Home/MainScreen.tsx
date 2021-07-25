import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, Dimensions } from "react-native";

import * as ImagePicker from "expo-image-picker";

import { sendInfo } from "../../resources";
import styles from "./styles";
import { DEFAULT } from "../../assets";

export default function MainScren({ navigation, route }) {
  const { params } = route;
  const [image, setImage] = useState(null);
  const [base64, setBase64] = useState("");

  const dimensions = Dimensions.get("window");

  const showImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      base64: true,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setBase64(result.base64);
    }
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      base64: true,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setBase64(result.base64);
    }
  };

  const sendData = async () => {
    const data = { image: base64 };
    // TODO crash endpoint call
    //  const response = await sendInfo(data);
    const response = {
      plant: "Apple",
      diagnosis: "Fungus diseases in plants.",
      question: "Tell me about fungus diseases in plants",
    };
    // if (response) {
    navigation.navigate("Report", { data: response, image: image });
    // }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>BioChat</Text>
      </View>
      <View style={styles.containerImage}>
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: dimensions.width - 20,
              height: dimensions.width - 20,
            }}
          />
        )}
        {!image && (
          <Image
            source={DEFAULT}
            style={{
              width: dimensions.width - 20,
              height: dimensions.width - 20,
            }}
          />
        )}
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          onPress={openCamera}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Text style={[styles.buttonText, styles.textSecondary]}>Cámara</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={showImagePicker}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Text style={[styles.buttonText, styles.textSecondary]}>Galería</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerSend}>
        <TouchableOpacity
          onPress={sendData}
          style={[styles.button, styles.buttonPrimary]}
          disabled={!image}
        >
          <Text style={[styles.buttonText, styles.textPrimary]}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
