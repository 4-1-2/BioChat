import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, Dimensions } from "react-native";

import * as ImagePicker from "expo-image-picker";
import ImageEditor from "@react-native-community/image-editor";

import { sendInfo } from "../../resources";
import styles from "./styles";
import { EXAMPLE, LOGO_HOR } from "../../assets";

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

export default function MainScren({ navigation, route }) {
  const { params } = route;
  const [image, setImage] = useState(null);
  const [base64, setBase64] = useState("");

  const dimensions = Dimensions.get("window");

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
      options: {
        maxWidth: 256,
        maxHeight: 256,
      },
    });

    if (!result.cancelled) {
      // let resizedUri = await new Promise((resolve, reject) => {
      //   ImageEditor.cropImage(
      //     result.uri,
      //     {
      //       offset: { x: 0, y: 0 },
      //       size: { width: result.width, height: result.height },
      //       displaySize: { width: 256, height: 256 },
      //       resizeMode: "contain",
      //     },
      //     (uri) => resolve(uri),
      //     () => reject()
      //   );
      // });
      // console.log(resizedUri);

      const { uri, base64 } = result as ImageInfo;
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
    const response = await sendInfo({ img: base64 });
    console.log(response);
    if (response.plant) {
      const data = {
        plant: response.plant,
        diagnosis: response.disease,
        question: response.suggested_question,
      };
      navigation.navigate("Report", { data, image: image });
    } else {
      alert("Ocurrió un error.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Image
          source={LOGO_HOR}
          style={{
            width: 140,
            height: 40,
          }}
        />
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
            source={EXAMPLE}
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
          <Text style={[styles.buttonText, styles.textSecondary]}>
            Take a photo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={showImagePicker}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Text style={[styles.buttonText, styles.textSecondary]}>
            Choose image
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerSend}>
        <TouchableOpacity
          onPress={sendData}
          style={[styles.button, styles.buttonPrimary]}
          disabled={!image}
        >
          <Text style={[styles.buttonText, styles.textPrimary]}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
