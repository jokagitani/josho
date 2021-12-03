import React from "react";
import { View, StyleSheet } from "react-native";
import DetailedMessage from "../../components/DetailedMessage";
import instructors from "../../assets/data/feed";
import { useRoute } from "@react-navigation/native";

const Chat = () => {
  const route = useRoute();
  const instructor = instructors.find(
    (instructor) => instructor.id === route.params.msgId
  );
  return (
    <View style={styles.container}>
      <DetailedMessage msg={instructor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default Chat;
