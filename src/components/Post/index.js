import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Post = (props) => {
  const post = props.post;

  return (
    <View style={styles.container}>
      {/* <View style={styles.postContainer}> */}
      {/* Image */}
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Image
          style={styles.image}
          source={{
            uri: post.uri,
          }}
        />
        {/*  */}
        {/* Rate */}
        <Text style={{ fontSize: 24, margin: 10 }}>from ${post.rate}/hour</Text>
      </View>

      {/* Tutor name */}
      <Text style={styles.name}>
        {post.username}
        <Text style={{ fontSize: 32 }}> {post.age} </Text>
      </Text>
      {/* Tutor description */}
      <Text style={styles.description}>{post.text}</Text>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 20,
    backgroundColor: "#AFDCEB",
    borderRadius: 20,
    display: "flex",
  },
  //   postContainer: {
  //     flex: 1,
  //     display: "flex",
  //     flexDirection: "row",
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  image: {
    width: "40%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 20,
  },
  name: {
    margin: 10,
    fontSize: 36,
    fontWeight: "bold",
    textShadowColor: "#AFDCEB",
    textShadowRadius: 10,
  },
  description: {
    margin: 10,
    fontSize: 24,
    textShadowColor: "#AFDCEB",
    textShadowRadius: 10,
  },
});

export default Post;
