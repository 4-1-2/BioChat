import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  ActivityIndicator,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import ImageEditor from "@react-native-community/image-editor";

import { sendInfo } from "../../../resources";
import styles from "../../styles";

import { EXAMPLE, LOGO_HOR, DEFAULT } from "../../../assets";

declare type ImagePickerResult =
  | {
      cancelled: true;
    }
  | ({
      cancelled: false;
    } & ImageInfo);

declare type ImageInfo = {
  uri: string;
  width: number;
  height: number;
  type?: "image" | "video";
  exif?: {
    [key: string]: any;
  };
  base64?: string;
};

export default function DiagnosisScreen({ navigation, route }) {
  const { params } = route;
  const [image, setImage] = useState(null);
  const [base64, setBase64] = useState("");
  const [loading, setLoading] = useState(false);

  const dimensions = Dimensions.get("window");

  const resizeImage = async (uri, width, height) => {
    // let resizedUri = await new Promise((resolve, reject) => {
    console.log("hola");
    await ImageEditor.cropImage(uri, {
      offset: { x: 0, y: 0 },
      size: { width: 256, height: 256 },
      displaySize: { width: 256, height: 256 },
      resizeMode: "contain",
    }).then((url) => {
      console.log("Cropped image uri", url);
    });
  };
  const showImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      base64: true,
    });

    if (!result.cancelled) {
      const { uri, base64, width, height } = result as ImageInfo;
      // resizeImage(uri, width, height);
      console.log(width);
      setImage(uri);
      setBase64(base64);
    }
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      base64: true,
    });

    if (!result.cancelled) {
      const { uri, base64 } = result as ImageInfo;
      setImage(uri);
      setBase64(base64);
    }
  };

  const sendData = async () => {
    setLoading(true);
    const response = await sendInfo({ img: base64 });
    setLoading(false);
    if (response.plant) {
      const data = {
        plant: response.plant,
        diagnosis: response.disease,
        question: response.suggested_question,
      };
      navigation.navigate("ReportScreen", { data, image: image });
    } else {
      alert("Ocurrió un error.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#545454" }}>
          Choose or take image:
        </Text>
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
          style={[styles.button, { backgroundColor: "#545454", height: 45 }]}
        >
          <Text style={[styles.buttonText, styles.textSecondary]}>
            Take a photo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={showImagePicker}
          style={[styles.button, { backgroundColor: "#545454", height: 45 }]}
        >
          <Text style={[styles.buttonText, styles.textSecondary]}>
            Choose image
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerSend}>
        {loading && (
          <ActivityIndicator
            animating={loading}
            color="#80b918"
            size="large"
            style={styles.activityIndicator}
          />
        )}
        {image && !loading && (
          <TouchableOpacity
            onPress={sendData}
            style={[styles.button, styles.buttonPrimary]}
          >
            <Text style={[styles.buttonText, styles.textPrimary]}>Send</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
