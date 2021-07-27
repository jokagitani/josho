import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  Image,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

import data from "../../assets/data/feed";
const StarPage = () => {
  return (
    <View>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/ecosystem.jpg")}
      ></ImageBackground>
      <View style={styles.container}>
        <Text style={{ color: "grey", fontWeight: "bold", paddingLeft: 10 }}>
          5 DAYS LEFT
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            paddingLeft: 10,
            marginVertical: 5,
          }}
        >
          July Weekly Challenge
        </Text>
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 24 }}>
            {" "}
            5 <AntDesign name={"star"} size={24} color={"gold"} />
          </Text>
          <Text style={{ fontSize: 24, marginHorizontal: 10, color: "grey" }}>
            /
          </Text>
          <Text style={{ fontSize: 24, marginHorizontal: 10, color: "grey" }}>
            15 <AntDesign name={"star"} size={24} color={"gold"} />
          </Text>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.listContainer}>
              <Image
                style={styles.profileImage}
                source={{
                  uri: item.uri,
                }}
              ></Image>
              <Text>
                {item.star}
                <AntDesign name={"star"} size={24} color={"gold"} />
              </Text>
              <Text>{item.username}</Text>
              <Text>{item.age}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
  icon: {
    zIndex: 100,
  },
  textTop: {
    color: "#fff",
    fontSize: 32,
    fontStyle: "italic",
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowRadius: 20,
  },
  container: {
    display: "flex",
    padding: 20,
  },
  textContainer: {
    flexDirection: "row",
    padding: 20,
    fontWeight: "bold",
    alignItems: "center",
    borderBottomWidth: 5,
    borderBottomColor: "#ECECEC",
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  profileImage: {
    width: "20%",
    aspectRatio: 1 / 1,
    resizeMode: "contain",
    borderRadius: 200,
  },
});
export default StarPage;
