import React from "react";
import { useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import feed from "../../assets/data/feed";
import { useNavigation } from "@react-navigation/native";

const Genre = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const title = route.params.genre;
  const gen = feed.filter((x) => x.genre === title);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          contentContainerStyle={{
            justifyContent: "center",
          }}
          numColumns={2}
          data={gen}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                navigation.navigate("Instructor", { postId: item.id });
              }}
              style={styles.pressable}
            >
              <Image style={styles.image} source={{ uri: item.uri }} />
              <View style={styles.textContainer}>
                <Text style={styles.username}>{item.username}</Text>
                <Text style={styles.description}>{item.text}</Text>
              </View>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    marginBottom: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    letterSpacing: -1,
    marginVertical: 16,
    marginLeft: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 180,
    width: 180,
    alignSelf: "center",
    borderRadius: 10,
  },
  pressable: { height: 150, width: 200, marginBottom: 100 },
  textContainer: {
    alignItems: "flex-start",
    marginLeft: 10,
    marginTop: 5,
  },
  username: { fontSize: 18, letterSpacing: 2 },
  description: { fontSize: 12, letterSpacing: -1, color: "grey" },
});
export default Genre;
