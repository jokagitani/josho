import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

const Message = ({ msg }) => {
  const navigation = useNavigation();
  const goToPage = () => {
    navigation.navigate("Chat", {
      msgId: msg.instructor.id,
      title: msg.instructor.username,
      uri: msg.instructor.uri,
      text: msg.instructor.text,
    });
  };
  const lastMsg = msg.message[msg.message.length - 1];
  return (
    <Pressable style={styles.container} onPress={goToPage}>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Image
          style={styles.image}
          source={{
            uri: msg.instructor.uri,
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <View
            style={{ width: "60%", flexDirection: "column", marginLeft: 20 }}
          >
            <Text style={styles.name}>{msg.instructor.username}</Text>
            <Text style={styles.lastMsg}>{lastMsg.content}</Text>
          </View>
          <View style={{}}>
            <Text style={[styles.lastMsg, { fontSize: 12 }]}>
              {moment(lastMsg.createdAt).fromNow()}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 2,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    display: "flex",
  },

  image: {
    width: "20%",
    aspectRatio: 1 / 1,
    resizeMode: "cover",
    borderRadius: 100,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    textShadowColor: "#AFDCEB",
    textShadowRadius: 10,
  },
  lastMsg: {
    marginTop: 10,
    fontSize: 16,
    color: "grey",
    textShadowRadius: 10,
    letterSpacing: -1,
  },
});

export default Message;
