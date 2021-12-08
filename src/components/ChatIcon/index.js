import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, Pressable, View } from "react-native";

const ChatIcon = (props) => {
  const uri = props.uri;
  const id = props.postId;
  const navigation = useNavigation();
  const goToPage = () => {
    navigation.navigate("Instructor", { postId: id });
  };
  return (
    <Pressable style={{ padding: 30 }} onPress={goToPage}>
      <Image
        style={{ width: 40, height: 40, borderRadius: 50 }}
        source={{ uri }}
      />
    </Pressable>
  );
};

export default ChatIcon;
