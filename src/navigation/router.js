import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTab from "./homeTab";
import Instructor from "../screens/Instructor";
import Chat from "../screens/Chat";
import Messages from "../screens/Messages";
import CustomerReview from "../screens/CustomerReview/index.js";
import ChatIcon from "../components/ChatIcon";
import Category from "../screens/Category";
import Genre from "../screens/Genre";

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
          name={"Instructor"}
          component={Instructor}
          options={{ title: "Instructor" }}
        />
        <Stack.Screen
          name={"Category"}
          component={Category}
          options={{
            headerTitle: false,
          }}
        />
        <Stack.Screen
          name={"Genre"}
          component={Genre}
          options={{
            headerTitle: false,
          }}
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
