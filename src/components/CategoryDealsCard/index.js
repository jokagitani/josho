import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Dimensions,
} from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CategoryDealsCard = ({ item }) => {
  return (
    <Pressable onPress={() => console.warn(item.name)} style={styles.container}>
      <ImageBackground
        imageStyle={{ borderRadius: 10 }}
        style={styles.backgroundContainer}
        source={item.uri}
      >
        <Text style={styles.mainText}>{item.name}</Text>
        <Text style={styles.subText}>{item.catch}</Text>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth / 1.1,
    height: windowHeight / 4,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 2,
  },
  backgroundContainer: {
    width: windowWidth / 1.2,
    height: windowHeight / 5,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    fontSize: 36,
    fontWeight: "bold",
    letterSpacing: -2,
  },
  subText: { fontSize: 22, fontWeight: "400", letterSpacing: -1 },
});
export default CategoryDealsCard;
