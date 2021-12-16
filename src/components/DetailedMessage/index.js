import React from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";

const DetailedMessage = (props) => {
  const msg = props.msg;
  const isMyMessage = () => {
    return msg.user.id === "u1";
  };

  return (
    <View
      style={[
        styles.container,
        {
          marginLeft: isMyMessage() ? "20%" : 10,
          backgroundColor: isMyMessage() ? "#B5EAD7" : "white",
          marginRight: isMyMessage() ? 10 : "20%",
        },
      ]}
    >
      <Text style={styles.message}>{msg.content}</Text>

      <Text style={styles.time}>{moment(msg.createdAt).fromNow()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    // marginRight: "auto",
    // marginLeft: "auto",
    borderRadius: 10,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  message: {
    fontSize: 15,
    flex: 5,
  },
  time: {
    fontSize: 8,
    marginTop: "auto",
    alignSelf: "flex-start",
    color: "grey",
  },
});

export default DetailedMessage;
