import React from "react";
import { View, Text, FlatList } from "react-native";
import Post from "../../components/Post";
import feed from "../../assets/data/feed";
import { ScrollView } from "react-native-gesture-handler";
import PagerView from "react-native-pager-view";

const SearchResults = (props) => {
  return (
    <PagerView style={{ flex: 1 }} initialPage={0} showPageIndicator>
      <View key="1">
        <FlatList
          data={feed}
          renderItem={({ item }) => <Post post={item} width={"100%"} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View key="2">
        <Text>Second page</Text>
      </View>
    </PagerView>
  );
};

export default SearchResults;
