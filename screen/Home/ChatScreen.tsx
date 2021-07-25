import React, { useState, useCallback, useEffect } from "react";

import { GiftedChat } from "react-native-gifted-chat";
import { sendChat, sendInfo } from "../../resources";

import { BOT_USER } from "../../assets";
import styles from "./styles";

export default function ChatScren({ navigation, route }) {
  const { params } = route;

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: params.message,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "BioChat",
          avatar: BOT_USER,
        },
      },
    ]);
  }, []);

  const getChat = async () => {
    const response = await sendChat();
    if (response) {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [
          {
            _id: new Date().getTime().toString(),
            text: response.objModel[0].descripcion,
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
  };

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => {
      return GiftedChat.append(previousMessages, messages);
    });

    getChat();
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}
