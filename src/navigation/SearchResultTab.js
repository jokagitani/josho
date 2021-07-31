import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchResults from "../screens/SearchResults";
import SearchMaps from "../screens/SearchMaps";

const Tab = createMaterialTopTabNavigator();
const SearchResultTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#000",
        indicatorStyle: {
          backgroundColor: "#000",
        },
      }}
    >
      <Tab.Screen name={"list"} component={SearchResults} />
      <Tab.Screen name={"map"} component={SearchMaps} />
    </Tab.Navigator>
  );
};

export default SearchResultTab;
