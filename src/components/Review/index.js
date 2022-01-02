import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Review = ({ instructor }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        style={styles.image}
        source={{
          uri: instructor.uri,
        }}
      />

      <View style={{ width: 150, flexDirection: "column", marginLeft: 10 }}>
        <Text style={styles.name}>
          {instructor.username}
          <Text style={{ fontSize: 12 }}> {instructor.age} </Text>
        </Text>

        <Text style={styles.description}>{instructor.text}</Text>
      </View>
      <View
        style={{
          width: 100,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "300" }}>
          {instructor.star}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginHorizontal: 10,
    marginVertical: 2,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  image: {
    width: 70,
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

export default Review;
