import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchResults from "../screens/SearchResults";
import Interest from "../screens/Interest";
import HomeTab from "./homeTab";
import Details from "../screens/Details";
import StarPage from "../screens/Page2";
import Instructor from "../screens/Instructor";
import Chat from "../screens/Chat";
import Messages from "../screens/Messages";
import CustomerReview from "../screens/CustomerReview/index.js";
import ChatIcon from "../components/ChatIcon";

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
        <Stack.Screen
          name={"Instructor"}
          component={Instructor}
          options={{ title: "Instructor" }}
        />
        <Stack.Screen
          name={"Chat"}
          component={Chat}
          options={({ route }) => ({
            headerTitle: route.params.title,
            headerRight: () => (
              <ChatIcon uri={route.params.uri} postId={route.params.msgId} />
            ),
          })}
        />
        <Stack.Screen
          name={"CustomerReview"}
          component={CustomerReview}
          options={{ title: "Customer Review" }}
        />
        <Stack.Screen name={"Messages"} component={Messages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
