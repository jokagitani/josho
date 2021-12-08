import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const onPressSend = () => {
    console.warn(`sending ${message}`);
  };
  const onPressMic = () => {
    setMessage("");
    console.warn("Recording");
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Feather
        style={{ marginHorizontal: 10, marginTop: 5 }}
        name="image"
        size={20}
        color={"#808080"}
      />
      <TextInput
        style={styles.input}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        autoFocus={true}
        multiline
      />
      <Feather
        style={{ marginHorizontal: 10, marginTop: 5 }}
        name="send"
        size={20}
        color={"#808080"}
        onPress={onPressSend}
      />
      <Feather
        style={{ marginRight: 10, marginTop: 5 }}
        name="mic"
        size={20}
        color={"#808080"}
        onPress={onPressMic}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "8%",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 5,
  },
  input: {
    flex: 1,
    fontSize: 15,
    borderWidth: 2,
    borderColor: "#ececec",
    borderRadius: 20,
    padding: 5,
  },
});

export default ChatInput;
