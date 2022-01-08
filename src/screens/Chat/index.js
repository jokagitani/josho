import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Pressable,
  SafeAreaView,
} from "react-native";
import DetailedMessage from "../../components/DetailedMessage";
import Message from "../../assets/data/chat";
import ChatInput from "../../components/ChatInput";
import { useRoute } from "@react-navigation/native";

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

  const message = [...isNewMessage()].reverse();
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
      <SafeAreaView style={styles.floatingContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{route.params.text}</Text>
        </View>

        <Pressable
          onPress={onPressOffer}
          style={[
            styles.greenButton,
            { backgroundColor: offer ? "grey" : "#97C1A9" },
          ]}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Offer</Text>
        </Pressable>
        <Pressable
          onPress={onPressAccept}
          style={[
            styles.whiteButton,
            { backgroundColor: accept ? "#ECECEC" : "white" },
          ]}
        >
          <Text style={{ color: "black", fontWeight: "bold" }}>Accept</Text>
        </Pressable>
      </SafeAreaView>
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
  text: {
    color: "grey",
    fontSize: 20,
    fontWeight: "200",
    flexWrap: "wrap",
  },
  floatingContainer: {
    width: "100%",
    height: "auto",
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
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
  },
  textContainer: {
    height: "auto",
    width: 200,
    justifyContent: "center",
    marginHorizontal: 10,
    flexDirection: "row",
  },
  greenButton: {
    height: 40,
    width: 80,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  whiteButton: {
    height: 40,
    width: 80,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  },
});

export default Chat;
