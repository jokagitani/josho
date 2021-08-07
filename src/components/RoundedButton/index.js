import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const RoundedButton = ({ name, title }) => {
  return (
    <Pressable style={styles.roundButton}>
      <Ionicons name={name} size={40} color={"#CDEAF7"} />
      <Text style={{ fontSize: 12, color: "grey" }}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  roundButton: {
    backgroundColor: "white",

    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    width: "22%",
    aspectRatio: 1 / 1,
  },
});
export default RoundedButton;
