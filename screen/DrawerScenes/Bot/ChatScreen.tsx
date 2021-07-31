import React, { useState, useCallback, useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ReactNativeTooltipMenu from "react-native-tooltip-menu";
import PopoverTooltip from "react-native-popover-tooltip";

import { GiftedChat } from "react-native-gifted-chat";
import { sendChat, sendInfo } from "../../../resources";

import { BOT_USER } from "../../../assets";
import styles from "../styles";

export default function ChatScreen({ navigation, route }) {
  const { params } = route;

  const [messages, setMessages] = useState([]);
  const [suggested, setSuggested] = useState([
    { name: "Kimberly Aguirre", id: 1 },
    { name: "Kimberly Aguirre", id: 2 },
    { name: "Ver más", id: 0 },
  ]);
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
    console.log(response);
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

  const onSend = useCallback((msg = []) => {
    setQuestion(msg[0].text);
    setMessages((previousMessages) => {
      return GiftedChat.append(previousMessages, msg);
    });

    getChat(msg[0].text);
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

  const handlePressItem = (item: any) => {
    if (item.id > 0) {
      console.log(item);
    } else {
      navigation.navigate("Experts");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: "transparent" }} />
      <PopoverTooltip
        // ref="tooltip1"
        buttonComponent={
          <View
            style={{
              width: 200,
              height: 30,
              backgroundColor: "#80b918",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
            }}
          >
            <Text>Click me! Suggested experts.</Text>
          </View>
        }
        items={suggested.map((item: any) => {
          return {
            label: item.name,
            onPress: () => {
              handlePressItem(item);
            },
          };
        })}

        // animationType='timing'
        // using the default timing animation
      />
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        onQuickReply={(quickReply) => onQuickReply(quickReply)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
}
