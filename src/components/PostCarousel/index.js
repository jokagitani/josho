import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PostCarousel = (props) => {
  const post = props.post;
  const navigation = useNavigation();
  const goToPage = () => {
    navigation.navigate("Instructor", { postId: post.id });
  };
  return (
    <Pressable onPress={goToPage} style={styles.container}>
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
        <Text style={styles.name}>
          {post.username}
          <Text> {post.age} </Text>
        </Text>
        <Text>from ${post.rate} / hour</Text>

        <Text style={styles.description}>{post.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    width: 350,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 15,
  },
  image: {
    width: "100%",
    aspectRatio: 1 / 1,
    resizeMode: "cover",
    borderRadius: 100,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: -1,
  },
  description: {
    textShadowColor: "#AFDCEB",
    textShadowRadius: 10,
  },
});

export default PostCarousel;
