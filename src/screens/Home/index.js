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
import RoundedButton from "../../components/RoundedButton";

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
        <View style={{ alignItems: "center" }}>
          <View style={{ flexDirection: "column", marginBottom: 100 }}>
            <View style={{ flexDirection: "row", padding: 20 }}>
              <RoundedButton name={"basketball"} title={"basketball"} />
              <RoundedButton name={"football"} title={"football"} />
              <RoundedButton name={"tennisball"} title={"tennis"} />
              <RoundedButton name={"book"} title={"tuition"} />
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <RoundedButton name={"basketball"} title={"basketball"} />
              <RoundedButton name={"football"} title={"football"} />
              <RoundedButton name={"tennisball"} title={"tennis"} />
              <RoundedButton name={"book"} title={"tuition"} />
            </View>
          </View>

          <Pressable
            style={styles.button}
            onPress={() => console.warn("Explore btn clicked!")}
          >
            <Text style={styles.buttonText}>Explore Opportunities</Text>
          </Pressable>
        </View>
        {/* button */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 900,
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
    backgroundColor: "#CDEAF7",
    padding: 10,
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "200",
  },
  searchButton: {
    flexDirection: "row",
    backgroundColor: "#ececec",
    padding: 10,
    width: "80%",
    borderRadius: 40,
    marginLeft: "10%",
    top: "15%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});
export default HomeScreen;
