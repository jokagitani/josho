import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import SearchResults from "../screens/SearchResults";

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
        component={SearchResults}
        options={{ title: "Search Results" }}
      />
    </Stack.Navigator>
  );
};

export default Router;
