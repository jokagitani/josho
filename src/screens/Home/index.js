import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import RoundedButton from "../../components/RoundedButton";
import categories from "../../assets/data/categories";
import feed from "../../assets/data/feed";
import Post from "../../components/Post";
import CustomText from "../../components/CustomText";
import PagerView from "react-native-pager-view";
import Review from "../../components/Review";
import AutoCompleteInput from "react-native-autocomplete-input";

const HomeScreen = () => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;

  const sortedFeed = [...feed]
    .sort((a, b) => a.star - b.star)
    .slice(feed.length - 3);

  return (
    <TouchableWithoutFeedback contentContainerStyle={styles.container}>
      <ImageBackground
        source={require("../../assets/images/clouds.jpeg")}
        style={styles.image}
      >
        {/* <AutoCompleteInput
          data={filtered}
          value={search}
          style={styles.searchButton}
          onChangeText={(text) => {
            searchFilter(text);
          }}
          placeholder="Search your interest!"
          flatListProps={{
            keyExtractor: (_, idx) => idx,
            renderItem: (item) => (
              <View
                style={{
                  backgroundColor: "red",
                  opacity: 0.5,
                  width: 100,
                  height: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>{item.username}</Text>
              </View>
            ),
          }}
        /> */}
        {/* <TouchableOpacity
          style={{
            top: "8%",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            width: "100%",
            alignSelf: "center",
            backgroundColor: "black",
          }}
          onPress={() => {
            console.warn("modal visible");
            setModalVisible(!modalVisible);
          }}
        > */}

        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            console.warn("modal closed");
            setModalVisible(!modalVisible);
          }}
        >
          <TouchableOpacity
            style={{
              position: "absolute",
              top: "12%",
              width: "100%",
              height: 100,
              opacity: 0.9,
              backgroundColor: "white",
            }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          ></TouchableOpacity>
        </Modal> */}

        {/* search bar */}

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

        <View style={{ position: "absolute", top: "45%" }}>
          <CustomText left={10} size={20} bottom={10}>
            reccomended for you
          </CustomText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {feed.map((inst) => {
              return <Post key={inst.id} post={inst} width={300} />;
            })}
          </ScrollView>
        </View>
        <View
          style={{
            position: "absolute",
            top: "65%",
          }}
        >
          <CustomText left={10} size={20} bottom={10}>
            top reviews
          </CustomText>
          <PagerView
            style={{
              width: windowWidth - 10,
              height: 120,
              shadowColor: "#000",
              shadowOffset: {
                width: 1,
                height: 2,
              },
              shadowOpacity: 0.5,
              shadowRadius: 5,
            }}
            initialPage={0}
            showPageIndicator
          >
            <View
              key="1"
              style={{
                backgroundColor: "white",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                marginHorizontal: 10,
              }}
            >
              <Review instructor={sortedFeed[2]} />
            </View>

            <View
              key="2"
              style={{
                backgroundColor: "white",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 10,
              }}
            >
              <Review instructor={sortedFeed[1]} />
            </View>
            <View
              key="3"
              style={{
                backgroundColor: "white",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 10,
              }}
            >
              <Review instructor={sortedFeed[0]} />
            </View>
          </PagerView>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    top: "12%",
    alignItems: "center",
    alignSelf: "center",
  },
  backGroundView: {
    position: "absolute",
    top: "15%",
    height: 200,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "white",
    opacity: 0.7,
    borderRadius: 10,
  },
  // searchButton: {
  //   flexDirection: "row",
  //   backgroundColor: "#ececec",
  //   padding: 10,
  //   borderRadius: 40,
  //   position: "absolute",
  //   top: "12%",
  //   alignSelf: "center",
  //   width: "80%",
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.5,
  //   shadowRadius: 2,
  // },
});
export default HomeScreen;
