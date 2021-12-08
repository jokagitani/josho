import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  FlatList,
} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";
import RoundedButton from "../../components/RoundedButton";
import { ScrollView } from "react-native-gesture-handler";
import categories from "../../assets/data/categories";
import feed from "../../assets/data/feed";
import Post from "../../components/Post";
import CustomText from "../../components/CustomText";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={require("../../assets/images/clouds.jpeg")}
        style={styles.image}
      >
        {/* search bar */}
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate("Interest")}
        >
          <Fontisto name="search" size={25} color={"#808080"} />
          <Text style={styles.buttonText}> What are you looking to learn?</Text>
        </Pressable>
        <View style={styles.backGroundView} />
        <View style={styles.iconView}>
          <FlatList
            contentContainerStyle={{
              flexDirection: "row",
              alignSelf: "center",
              marginBottom: 20,
            }}
            data={categories.slice(0, 4)}
            renderItem={({ item }) => <RoundedButton item={item} size={80} />}
            keyExtractor={(item) => item.id}
          />

          <FlatList
            contentContainerStyle={{
              flexDirection: "row",
              alignSelf: "center",
            }}
            data={categories.slice(4)}
            renderItem={({ item }) => <RoundedButton item={item} size={60} />}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={{ position: "absolute", top: "50%" }}>
          <CustomText left={10} size={20} bottom={10}>
            Reccomended for you
          </CustomText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {feed.map((inst) => {
              return <Post post={inst} width={300} />;
            })}
          </ScrollView>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignContent: "flex-start",
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
    alignSelf: "center",
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
  iconView: {
    flexDirection: "column",
    position: "absolute",
    top: "20%",
    alignItems: "center",
    alignSelf: "center",
  },
  backGroundView: {
    position: "absolute",
    top: "23%",
    height: 200,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "white",
    opacity: 0.7,
  },
  searchButton: {
    flexDirection: "row",
    backgroundColor: "#ececec",
    padding: 10,
    width: "80%",
    borderRadius: 40,
    marginLeft: "10%",
    top: "12%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});
export default HomeScreen;
