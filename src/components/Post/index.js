import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Post = (props) => {
  const post = props.post;
  const navigation = useNavigation();
  const goToPage = () => {
    navigation.navigate("Instructor", { postId: post.id });
  };

  return (
    <Pressable
      style={[{ width: props.width }, styles.container]}
      onPress={goToPage}
    >
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
            uri: post.uri[0],
          }}
        />

        <View style={{ width: 200, flexDirection: "column", marginLeft: 20 }}>
          <Text style={styles.name}>
            {post.username}
            <Text style={{ fontSize: 12 }}> {post.age} </Text>
          </Text>
          <Text style={{ fontSize: 12 }}>from ${post.rate}/hour</Text>
          <Text style={styles.description}>{post.text}</Text>
        </View>
      </View>
    </Pressable>
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
    width: 50,
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

export default Post;
