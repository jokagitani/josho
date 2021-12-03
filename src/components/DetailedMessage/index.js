import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import ChatBubble from "../ChatBubble";

const DetailedMessage = (props) => {
  const msg = props.msg;

  return (
    <ScrollView contentContainerStyle={{ height: "100%" }}>
      <View style={styles.container}>
        <View
          style={{
            margin: 20,
            padding: 10,
            justifyContent: "space-around",
            borderBottomWidth: 3,
            borderBottomColor: "#ececec",
          }}
        >
          <ChatBubble />
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <Text style={styles.name}>{msg.username}</Text>
            <Text style={styles.age}>{msg.age}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column", width: "40%" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Entypo name={"briefcase"} size={12} color={"grey"} />
                <Text style={styles.description}>{msg.text}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name={"md-pricetag"} size={12} color={"grey"} />
                <Text style={styles.rate}>${msg.rate} / hour</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Ionicons name={"star"} size={16} color={"gold"} />

                  <Text style={styles.rate}>4.2</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "60%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Pressable
                style={styles.enquireButton}
                onPress={() => {
                  console.warn("hello");
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "300",
                  }}
                >
                  Start Chat
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            padding: 10,
            justifyContent: "space-around",
          }}
        >
          <Text style={styles.longDescription}>{msg.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: "100%",
    aspectRatio: 1 / 1,
    resizeMode: "cover",
    borderRadius: 20,
  },
  name: {
    fontSize: 36,
    fontWeight: "bold",
  },
  age: { fontSize: 24, marginLeft: 10 },
  description: {
    color: "grey",
    marginLeft: 10,
    fontSize: 24,
  },
  rate: {
    fontSize: 24,
    color: "grey",
    marginLeft: 10,
  },
  longDescription: {
    fontSize: 16,
    lineHeight: 24,
  },
  enquireButton: {
    backgroundColor: "#CDEAF7",
    padding: 12,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,

    elevation: 13,
  },
});

export default DetailedMessage;
