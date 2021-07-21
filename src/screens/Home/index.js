import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      {/* search bar */}
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn("Search btn clicked!")}
      >
        <Fontisto name="search" size={25} color={"#808080"} />
        <Text style={styles.buttonText}> What are you looking to learn?</Text>
      </Pressable>
      <ImageBackground
        source={require("../../assets/images/clouds.jpeg")}
        style={styles.image}
      >
        {/* title */}
        <Text style={styles.title}>FIND YOUR LIMIT</Text>
        {/* button */}
        <Pressable
          style={styles.button}
          onPress={() => console.warn("Explore btn clicked!")}
        >
          <Text style={styles.buttonText}>Explore your opportunites here</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 70,
    fontWeight: "bold",
    color: "white",
    width: "70%",
    textShadowColor: "#AFDCEB",
    textShadowRadius: 40,
    marginTop: "40%",
    marginLeft: 30,
  },
  button: {
    backgroundColor: "#AFDCEB",
    padding: 10,
    width: 300,
    borderRadius: 10,
    marginLeft: 25,
    marginTop: 50,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "blue",
    textShadowRadius: 100,
  },
  searchButton: {
    flexDirection: "row",
    backgroundColor: "#AFDCEB",
    padding: 10,
    width: 300,
    borderRadius: 10,
    margin: 50,
    alignItems: "center",
    position: "absolute",
    top: 10,
    zIndex: 100,
  },
});
export default HomeScreen;
