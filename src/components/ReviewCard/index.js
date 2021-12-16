import React from "react";
import { View, Text, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Star from "react-native-star-view";

const ReviewCard = ({ rev }) => {
  return (
    <View
      style={{
        width: "95%",
        height: "auto",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0.5,
          height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        alignSelf: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            style={{
              height: 30,
              width: 30,
              borderRadius: 100,
              marginRight: 10,
            }}
            source={rev.uri}
          />
          <Text style={{ fontSize: 16, fontWeight: "bold", letterSpacing: -1 }}>
            {rev.username}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text>{rev.star}</Text>
          <Ionicons name={"star"} size={16} color={"gold"} />
        </View>
      </View>
      <Star score={rev.star} />
      <Text style={{ fontWeight: "200", fontSize: 16 }}>{rev.content}</Text>
    </View>
  );
};

export default ReviewCard;
