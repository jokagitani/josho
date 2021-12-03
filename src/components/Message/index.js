import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Message = (props) => {
  const msg = props.msg;
  const navigation = useNavigation();
  const goToPage = () => {
    navigation.navigate("Chat", {
      msgId: msg.id,
      title: msg.username,
      uri: msg.uri,
    });
  };

  return (
    <Pressable style={styles.container} onPress={goToPage}>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Image
          style={styles.image}
          source={{
            uri: msg.uri,
          }}
        />

        <View style={{ width: "70%", flexDirection: "column", marginLeft: 20 }}>
          <Text style={styles.name}>
            {msg.username}
            <Text style={{ fontSize: 12 }}> {msg.age} </Text>
          </Text>
          <Text style={styles.description}>{msg.text}</Text>
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
  description: {
    fontSize: 12,
    textShadowColor: "#AFDCEB",
    textShadowRadius: 10,
  },
});

export default Message;
