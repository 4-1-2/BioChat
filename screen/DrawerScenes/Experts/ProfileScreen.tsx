import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { USER_PROFILE, DISEASE, ORGANIC, FERTILIZATION } from "../../../assets";

import styles from "../styles";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export default function ProfileScren({ navigation, route }) {
  const { params } = route;
  const [index, setIndex] = React.useState(0);

  const dimensions = Dimensions.get("window");
  const isCarousel = React.useRef(null);
  const dataImage = [
    {
      title: "Eco-friendly solutions",
      body: "We offer eco-friendly solutions with the environment for the treatment of plant diseases, reducing the use of insecticides.",
      image: DISEASE,
    },
    {
      title: "Soil fertilization",
      body: "We provide you with information on natural fertilization processes.",
      image: FERTILIZATION,
    },
    {
      title: "Organic products",
      body: "We guide you through the process of growing your own organic products.",
      image: ORGANIC,
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.containerCarrusel} key={index}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.header}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    );
  };
  return (
    <View style={styles.containerProfile}>
      <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
        <View style={{ height: 90, paddingRight: 30 }}>
          <Image
            source={params.data.image ?? USER_PROFILE}
            style={{ width: 90, height: 90, borderRadius: 75 }}
          />
        </View>
        <View>
          <Text style={styles.subtitleProfile}>{params.data.name}</Text>
          <Text style={styles.paragraph}>{params.data.distance}</Text>
          <Text style={styles.paragraph}>{params.data.email}</Text>
          <Text style={styles.paragraph}>{params.data.direction}</Text>
          <Text style={styles.paragraph}>{params.data.phone}</Text>
        </View>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", paddingTop: 20 }}
      >
        <View style={{ flex: 1, height: 2, backgroundColor: "#D9D9D9" }} />
      </View>
      <View style={styles.paragraphContainer}>
        <Text style={[styles.paragraph, styles.description]}>
          {params.data.description}
        </Text>
        {/* <Text style={[styles.paragraph, styles.description]}>
          {params.data.descriptionAlternative}
        </Text> */}
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Carousel
          layout="tinder"
          layoutCardOffset={9}
          ref={isCarousel}
          data={dataImage}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={(index) => setIndex(index)}
          useScrollView={true}
        />
      </View>
    </View>
  );
}
