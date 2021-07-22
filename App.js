import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Post from "./src/components/Post";
import HomeScreen from "./src/screens/Home";
import feed from "./src/assets/data/feed";
import SearchResults from "./src/screens/SearchResults";
import Interest from "./src/screens/Interest";

const post1 = feed[0];

export default function App() {
  return (
    <View style={styles.serachScreen}>
      {/* <HomeScreen /> */}
      {/* <Post post={feed[0]} />
      <Post post={feed[1]} />
      <Post post={feed[2]} /> */}
      {/* <SearchResults /> */}
      <Interest />
    </View>
  );
}

const styles = StyleSheet.create({
  serachScreen: {
    marginTop: 50,
    padding: 10,
  },
});
