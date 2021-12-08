import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
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
  const message = isNewMessage();

  return (
    <View style={styles.container}>
      <FlatList
        data={message.reverse()}
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
