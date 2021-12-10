import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text, Pressable } from "react-native";
import DetailedMessage from "../../components/DetailedMessage";
import Message from "../../assets/data/chat";
import ChatInput from "../../components/ChatInput";
import { useRoute } from "@react-navigation/native";
import feed from "../../assets/data/feed";

const Chat = () => {
  const route = useRoute();
  const isNewMessage = () => {
    if (
      Message.filter((x) => x.instructor.id === route.params.msgId).length === 0
    ) {
      return [];
    } else {
      return Message.find((inst) => inst.instructor.id === route.params.msgId)
        .message;
    }
  };
  const message = isNewMessage();
  const [offer, useOffer] = useState(false);
  const [accept, useAccept] = useState(false);
  const onPressOffer = () => {
    useOffer(!offer);
    console.warn(offer);
  };
  const onPressAccept = () => {
    useAccept(!accept);
    console.warn(accept);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 70,
          marginTop: 1,
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 1,
            height: 2,
          },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: "40%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>{route.params.text}</Text>
        </View>
        <View style={{ flexDirection: "row", height: "50%" }}>
          <Pressable
            onPress={onPressOffer}
            style={{
              backgroundColor: "#97C1A9",
              height: "100%",
              width: 80,
              marginLeft: 10,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Offer</Text>
          </Pressable>
          <Pressable
            onPress={onPressOffer}
            style={{
              backgroundColor: "white",
              height: "100%",
              width: 80,
              marginLeft: 10,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              borderWidth: 0.5,
              borderColor: "grey",
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold" }}>Accept</Text>
          </Pressable>
        </View>
      </View>
      <FlatList
        data={message}
        renderItem={({ item }) => <DetailedMessage msg={item} />}
        keyExtractor={(item) => item.id.toString()}
        inverted
      />
      <ChatInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#CDEAF7",
  },
});

export default Chat;
