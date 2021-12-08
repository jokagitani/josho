import React from "react";
import { View, Text, FlatList } from "react-native";
import Post from "../../components/Post";
import feed from "../../assets/data/feed";
import { ScrollView } from "react-native-gesture-handler";

const SearchResults = (props) => {
  return (
    <FlatList
      data={feed}
      renderItem={({ item }) => <Post post={item} width={"100%"} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default SearchResults;
