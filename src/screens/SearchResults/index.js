import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import Post from "../../components/Post";
import feed from "../../assets/data/feed";
import { TextInput } from "react-native-gesture-handler";

const SearchResults = (props) => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const searchFilter = (text) => {
    if (text.trim().length !== 0) {
      const newFiltered = [...feed].filter((x) => {
        return (
          x.username.toLowerCase().indexOf(text.toLowerCase()) === 0 ||
          x.genre.toLowerCase().indexOf(text.toLowerCase()) === 0 ||
          x.text.toLowerCase().indexOf(text.toLowerCase()) === 0
        );
      });
      setFiltered(newFiltered);
      setSearch(text);
    } else {
      setFiltered([...feed]);
      setSearch("");
    }
  };
  return (
    <View style={{ marginVertical: 10 }}>
      <View>
        <TextInput
          style={{
            width: "90%",
            height: 40,
            borderRadius: 10,
            padding: 10,
            backgroundColor: "#ECECEC",
            alignSelf: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1,
            marginBottom: 5,
          }}
          value={search}
          placeholder="Search your interest!"
          onChangeText={(text) => {
            searchFilter(text);
          }}
        />
      </View>

      <FlatList
        data={filtered}
        renderItem={({ item }) => <Post post={item} width={"100%"} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default SearchResults;
