import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const Suggestion = ({ item }) => {
  return (
    <View style={styles.parent}>
      <View style={styles.item}>
        <Entypo name={"location-pin"} size={30} />
        <Text>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
export default Suggestion;
