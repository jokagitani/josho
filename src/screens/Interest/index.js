import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import search from "../../assets/data/search";
import Entypo from "react-native-vector-icons/Entypo";

const Interest = () => {
  const [inputText, setInputText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search for your interest!"
        value={inputText}
        onChangeText={setInputText}
      />
      <FlatList
        data={search}
        renderItem={({ item }) => (
          <View style={styles.searchContainer}>
            <View style={styles.iconContainer}>
              <Entypo name={"triangle-right"} size={20} />
            </View>
            <Text style={styles.searchContent}>{item.type}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Interest;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
  },
  textInput: {
    fontSize: 16,
    fontWeight: "bold",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "#AFDCEB",
    padding: 20,
    marginBottom: 30,
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    paddingBottom: 10,
    alignItems: "center",
    borderBottomWidth: 3,
    borderColor: "#f5f5f5",
  },
  searchContent: {
    fontSize: 24,
  },
  iconContainer: {
    flex: 0,
    backgroundColor: "#f5f5f5",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
});
