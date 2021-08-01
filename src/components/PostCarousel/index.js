import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PostCarousel = (props) => {
  const post = props.post;

  return (
    <View style={styles.container}>
      <View style={{ width: "20%" }}>
        <Image
          style={styles.image}
          source={{
            uri: post.uri,
          }}
        />
      </View>
      <View
        style={{ width: "80%", padding: 10, justifyContent: "space-around" }}
      >
        <Text>from ${post.rate} / hour</Text>

        <Text style={styles.name}>
          {post.username}
          <Text> {post.age} </Text>
        </Text>

        <Text style={styles.description}>{post.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    width: 350,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 5,
    resizeMode: "cover",
    borderRadius: 20,
  },
  name: {
    fontWeight: "bold",
    textShadowColor: "#AFDCEB",
    textShadowRadius: 10,
  },
  description: {
    textShadowColor: "#AFDCEB",
    textShadowRadius: 10,
  },
});

export default PostCarousel;
