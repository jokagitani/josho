import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CategoryCard = ({ item }) => {
  const navigation = useNavigation();
  const goToPage = () => {
    navigation.navigate("Genre", {
      genre: item.name,
    });
  };
  return (
    <Pressable onPress={goToPage} style={styles.catContainer}>
      <View style={[styles.coloredContainer, { backgroundColor: item.color }]}>
        <Image style={{ height: 40, width: 40 }} source={item.uri} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            flex: 3,
            fontSize: 20,
            fontWeight: "bold",
            letterSpacing: -1,
          }}
        >
          {item.name}
        </Text>
        <View style={{ flex: 1, alignItems: "center", marginBottom: 2 }}>
          <EvilIcons size={28} name={"arrow-right"} color={"grey"} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  catContainer: {
    width: windowWidth / 2.2,
    height: 85,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 15,
    padding: 10,
  },
  coloredContainer: {
    height: 40,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
export default CategoryCard;
