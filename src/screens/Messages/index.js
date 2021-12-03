import React from "react";
import { FlatList, ScrollView } from "react-native";
import Message from "../../components/Message";
import feed from "../../assets/data/feed";

const Messages = (props) => {
  return (
    <ScrollView
      contentContainerStyle={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <FlatList
        data={feed}
        renderItem={({ item }) => <Message msg={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

export default Messages;
