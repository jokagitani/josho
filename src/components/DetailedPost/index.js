import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/core";
import { Rating } from "react-native-ratings";
import PagerView from "react-native-pager-view";

const Post = (props) => {
  const post = props.post;
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  const goToPage = () => {
    navigation.setParams({ title: post.username });
    navigation.navigate("Chat", {
      msgId: post.id,
      title: post.username,
      uri: post.uri,
    });
  };
  const goToStarRating = () => {
    navigation.navigate("CustomerReview", {
      userId: post.id,
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <PagerView
            style={{
              width: windowWidth,
              aspectRatio: 1 / 1,
            }}
            initialPage={0}
            showPageIndicator
          >
            <View
              key="1"
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={styles.image}
                source={{
                  uri: post.uri,
                }}
              />
            </View>

            <View
              key="2"
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={styles.image}
                source={{
                  uri: post.uri,
                }}
              />
            </View>
            <View
              key="3"
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={styles.image}
                source={{
                  uri: post.uri,
                }}
              />
            </View>
          </PagerView>
        </View>

        <View
          style={{
            margin: 20,
            padding: 10,
            justifyContent: "space-around",
            borderBottomWidth: 3,
            borderBottomColor: "#ececec",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <Text style={styles.name}>{post.username}</Text>
            <Text style={styles.age}>{post.age}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column", width: "40%" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Entypo name={"briefcase"} size={12} color={"grey"} />
                <Text style={styles.description}>{post.genre}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name={"md-pricetag"} size={12} color={"grey"} />
                <Text style={styles.rate}>${post.rate} / hour</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Pressable
                  onPress={goToStarRating}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Ionicons name={"star"} size={16} color={"gold"} />

                  <Text style={styles.rate}>{post.star}</Text>
                </Pressable>
              </View>
            </View>
            <View
              style={{
                width: "60%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Pressable style={styles.enquireButton} onPress={goToPage}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "300",
                  }}
                >
                  Start Chat
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            padding: 10,
            justifyContent: "space-around",
          }}
        >
          <Text style={styles.longDescription}>{post.description}</Text>
        </View>
        <Rating
          showRating
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 10 }}
          fractions={1}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },

  image: {
    width: "100%",
    aspectRatio: 1 / 1,
    resizeMode: "cover",
    //borderRadius: 20,
  },
  name: {
    fontSize: 36,
    fontWeight: "bold",
  },
  age: { fontSize: 24, marginLeft: 10 },
  description: {
    color: "grey",
    marginLeft: 10,
    fontSize: 24,
  },
  rate: {
    fontSize: 24,
    color: "grey",
    marginLeft: 10,
  },
  longDescription: {
    fontSize: 16,
    lineHeight: 24,
  },
  enquireButton: {
    backgroundColor: "#CDEAF7",
    padding: 12,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,

    elevation: 13,
  },
});

export default Post;
