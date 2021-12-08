import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import SearchResultTab from "./SearchResultTab";
const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Home"}
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"SearchResults"}
        component={SearchResultTab}
        options={{ title: "Search Results" }}
      />
    </Stack.Navigator>
  );
};

export default Router;
