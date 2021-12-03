import React from "react";
import { Image, View } from "react-native";

const ChatIcon = (props) => {
  const uri = props.uri;
  return (
    <View style={{ padding: 30 }}>
      <Image
        style={{ width: 40, height: 40, borderRadius: 50 }}
        source={{ uri }}
      />
    </View>
  );
};

export default ChatIcon;
