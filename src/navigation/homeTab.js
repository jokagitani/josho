import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import MyFitnessPal from "../screens/MyFitnessPal";
import SearchResults from "../screens/SearchResults";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#87cefa",
      }}
    >
      <Tab.Screen
        name={"Explore"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"MyFitnessPal"}
        component={MyFitnessPal}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="fitness" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Search Results"}
        component={SearchResults}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="grid-sharp" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Messages"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={Home}
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
