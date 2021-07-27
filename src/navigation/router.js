import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchResults from "../screens/SearchResults";
import Interest from "../screens/Interest";
import HomeTab from "./homeTab";
import Details from "../screens/Details/index";
import StarPage from "../screens/Page2";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={HomeTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"Interest"}
          component={Interest}
          options={{ title: "Find your Interest" }}
        />
        <Stack.Screen
          name={"Refine Search"}
          component={Details}
          options={{ title: "Refine your Search" }}
        />
        <Stack.Screen
          name={"Star Page"}
          component={StarPage}
          options={{ title: "Star Page" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
