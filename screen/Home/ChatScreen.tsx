import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Modal,
  Alert,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { GiftedChat } from "react-native-gifted-chat";
import { sendChat, sendInfo } from "../../resources";

import { BOT_USER } from "../../assets";
import styles from "./styles";

export default function ChatScren({ navigation, route }) {
  const { params } = route;

  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState(params.message || "");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (params.message && params.message.length > 0) {
      setMessages([
        {
          _id: 1,
          text: params.message,
          createdAt: new Date(),
          user: {
            _id: 1,
            name: "BioChat",
            avatar: BOT_USER,
          },
        },
      ]);
      getChat(params.message);
    } else {
      setMessages([
        {
          _id: new Date().getTime().toString(),
          text: "Hi, I am BioChat. How can I help you?",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "BioChat",
            avatar: BOT_USER,
          },
        },
      ]);
    }
  }, []);

  const getChat = async (message: string) => {
    const data = {
      question: message,
      chat_acumm: "",
    };
    const response = await sendChat(data);

    if (response) {
      if (response.answer.toLowerCase() === "unknown") {
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [
            {
              _id: new Date().getTime().toString(),
              text: response.answer,
              createdAt: new Date(),
              user: {
                _id: 2,
                name: "BioChat",
                avatar: BOT_USER,
              },
              quickReplies: {
                type: "radio", // or 'checkbox',
                keepIt: false,
                values: [
                  {
                    title: " Contact an expert",
                    value: "yes",
                  },
                ],
              },
            },
          ])
        );
      } else {
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [
            {
              _id: new Date().getTime().toString(),
              text: response.answer,
              createdAt: new Date(),
              user: {
                _id: 2,
                name: "BioChat",
                avatar: BOT_USER,
              },
            },
          ])
        );
      }
    }
  };

  const onSend = useCallback((messages = []) => {
    setQuestion(messages[0].text);
    setMessages((previousMessages) => {
      return GiftedChat.append(previousMessages, messages);
    });

    getChat(messages[0].text);
  }, []);

  const onQuickReply = (quickReply) => {
    let flag = false;
    if (quickReply[0].value == "yes") {
      flag = true;
    }

    // let message = quickReply[0].value;
    // let msg = {
    //   _id: new Date().getTime().toString(),
    //   text: message,
    //   createdAt: new Date(),
    //   user: {
    //     _id: 1,
    //   },
    // };
    // setMessages((previousMessages) => {
    //   return GiftedChat.append(previousMessages, [msg]);
    // });
    if (flag) {
      navigation.navigate("Profile", {
        data: {
          name: "Carla Aguirre Zegarra",
          phone: "1232345",
          distance: "Distance 5 km",
          direction: "Av. Sol 123 - Cusco",
          email: "correo@gmail.com",
          description:
            "Hello, for 5 years I have been dedicated to the care and production of organic food. At Organic Cusco we provide you with all the necessary information so that your flat has the appropriate ones.",
          descriptionAlternative:
            "Te ayudamos con las enfermedades y/o plagas que tu planata pueda tener, nuestras soluciones son ecoamigables.",
        },
      });
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: "transparent" }} />
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        onQuickReply={(quickReply) => onQuickReply(quickReply)}
        user={{
          _id: 1,
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
