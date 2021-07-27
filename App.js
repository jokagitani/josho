import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Post from "./src/components/Post";
import HomeScreen from "./src/screens/Home";
import feed from "./src/assets/data/feed";
import SearchResults from "./src/screens/SearchResults";
import Interest from "./src/screens/Interest";
import Details from "./src/screens/Details";
import FitnessPal from "./src/screens/MyFitnessPal";
import "react-native-gesture-handler";
import Router from "./src/navigation/router";

export default function App() {
  return (
    <>
      <Router />
      {/* <HomeScreen /> */}
      {/* <Post post={feed[0]} />
      <Post post={feed[1]} />
      <Post post={feed[2]} /> */}
      {/* <SearchResults /> */}
      {/* <Interest /> */}
      {/* <Details /> */}
      {/* <FitnessPal /> */}
    </>
  );
}
