import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* search bar */}
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate("Interest")}
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
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 700,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 70,
    fontWeight: "bold",
    color: "#ececec",
    width: "70%",
    textShadowColor: "#000",
    textShadowRadius: 3,
    marginTop: "40%",
    marginLeft: 30,
  },
  button: {
    backgroundColor: "#ececec",
    padding: 10,
    width: "70%",
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 25,
    marginTop: 50,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    textShadowColor: "blue",
    textShadowRadius: 100,
  },
  searchButton: {
    flexDirection: "row",
    backgroundColor: "#ececec",
    padding: 10,

    width: "80%",
    borderRadius: 40,
    marginLeft: "10%",
    top: "20%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 100,
  },
});
export default HomeScreen;
