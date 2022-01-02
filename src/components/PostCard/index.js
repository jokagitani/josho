import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import reviews from "../../assets/data/reviews";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const PostCard = ({ instructor }) => {
  const rev = reviews.find((x) => x.user === instructor.id);
  const numOfStar =
    rev.review.length === 0
      ? 0
      : rev.review.map((x) => x.star).reduce((y, z) => y + z) /
        rev.review.length;
  const qual = instructor.qualification.map((x) => {
    return (
      <View
        key={instructor.qualification.indexOf(x)}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <SimpleLineIcons name={"badge"} size={15} />
        <Text style={{ marginLeft: 10, letterSpacing: -1 }}>{x}</Text>
      </View>
    );
  });
  return (
    <View
      style={{
        height: 250,
        width: 220,
        backgroundColor: "#F3FAFF",
        marginHorizontal: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 15,
        padding: 10,
      }}
    >
      <Image
        style={{ height: 150, width: "100%", borderRadius: 10 }}
        source={{ uri: instructor.uri }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20, letterSpacing: -1 }}>
          {instructor.username}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: "300", fontSize: 20, letterSpacing: -1 }}>
            {numOfStar}
          </Text>
          <Ionicons name={"star"} size={16} color={"gold"} />
        </View>
      </View>
      <View
        style={{
          marginBottom: 10,
          width: "100%",
          padding: 5,
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          {qual}
        </View>
      </View>
    </View>
  );
};

export default PostCard;
