import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyFitnessPal from "../screens/MyFitnessPal";
import SearchResults from "../screens/SearchResults";
import Message from "../screens/Messages";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Explore from "./Explore";
import Profile from "../screens/Profile";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const StackMessage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Messages" component={Message} options={{}} />
    </Stack.Navigator>
  );
};

const StackSearchResults = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Top Search" component={SearchResults} />
    </Stack.Navigator>
  );
};
const HomeTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#87cefa",
      }}
    >
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyFitnessPal"
        component={MyFitnessPal}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="fitness" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={StackSearchResults}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="grid-sharp" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={StackMessage}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
