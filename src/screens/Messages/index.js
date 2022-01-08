import React from "react";
import { FlatList, ScrollView } from "react-native";
import Message from "../../components/Message";
import chat from "../../assets/data/chat";

const Messages = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <FlatList
        data={chat}
        renderItem={({ item }) => <Message msg={item} />}
        keyExtractor={(item) => item.instructor.id.toString()}
      />
    </ScrollView>
  );
};

export default Messages;
