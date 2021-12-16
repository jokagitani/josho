import React, { useState, useCallback } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
//import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Suggestion from "./Suggestion";

const Details = () => {
  const [textInput, setTextInput] = useState("");
  const [personalLevel, setPersonalLevel] = useState(0);
  const [mentorLevel, setMentorLevel] = useState(0);
  const navigation = useNavigation();

  return (
    <View
      style={{
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      {/* <GooglePlacesAutocomplete
        placeholder="Preferred Location"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: "AIzaSyD3PDLkwJAgnu5JgS4slO0JKPG4iBT5-Vc",
          language: "en",
          components: "country:sg",
        }}
        fetchDetails
        suppressDefaultStyles
        renderRow={(item) => <Suggestion item={item} />}
      /> */}

      <View style={styles.rowContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.text}>Personal Experience level</Text>
            <Text style={{ color: "#8d8d8d" }}>
              0: Beginner 1: Amateur 2: Intermediate
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable
              onPress={() => setPersonalLevel(Math.max(0, personalLevel - 1))}
              style={styles.button}
            >
              <Text>-</Text>
            </Pressable>

            <Text style={{ marginHorizontal: 10 }}>{personalLevel}</Text>

            <Pressable
              onPress={() => setPersonalLevel(Math.min(2, personalLevel + 1))}
              style={styles.button}
            >
              <Text>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.text}>Mentor Experience Level</Text>
            <Text style={{ color: "#8d8d8d" }}>
              0: Friend 1: Intermediate 2: Pro
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable
              onPress={() => setMentorLevel(Math.max(0, mentorLevel - 1))}
              style={styles.button}
            >
              <Text>-</Text>
            </Pressable>

            <Text style={{ marginHorizontal: 10 }}>{mentorLevel}</Text>

            <Pressable
              onPress={() => setMentorLevel(Math.min(2, mentorLevel + 1))}
              style={styles.button}
            >
              <Text>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.text}>Price Range</Text>
            <Text style={{ color: "#8d8d8d", width: "70%" }}>
              Prices may differ across experience level
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextInput style={styles.priceInput}></TextInput>
            <Text style={{ fontSize: 20 }}>-</Text>
            <TextInput style={styles.priceInput}></TextInput>
          </View>
        </View>
      </View>

      <Pressable
        style={{
          marginBottom: "10%",
          backgroundColor: "#cee8f0",
          alignItems: "center",
          justifyContent: "center",
          height: "5%",
          marginHorizontal: 10,
          borderRadius: 50,
          borderWidth: 1,
          borderColor: "#ececec",
        }}
        onPress={() =>
          navigation.navigate("Home", {
            screen: "Explore",
            params: {
              screen: "SearchResults",
            },
          })
        }
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Search</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    paddingVertical: 50,
    paddingHorizontal: 10,
    borderBottomWidth: 3,
    borderColor: "#f5f5f5",
  },
  textInput: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#ececec",
    margin: 20,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 20,
  },
  button: {
    borderWidth: 1,
    width: 30,
    borderRadius: 30,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
  },
  priceInput: {
    backgroundColor: "#f5f5f5",
    marginHorizontal: 5,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
});

export default Details;
