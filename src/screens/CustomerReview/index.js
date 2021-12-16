import React from "react";
import { View, Text, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import feed from "../../assets/data/feed";
import ReviewCard from "../../components/ReviewCard";
import Star from "react-native-star-view";

const CustomerReview = () => {
  const route = useRoute();
  const reviews = feed.find((x) => x.id === route.params.userId);
  const numOfReview = reviews.review.length === 0 ? 0 : reviews.review.length;
  const numOfStar =
    reviews.review.length === 0
      ? 0
      : reviews.review.map((x) => x.star).reduce((y, z) => y + z);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        shadowColor: "#000",
      }}
    >
      <View
        style={{
          marginBottom: 10,
          width: "100%",
          backgroundColor: "white",
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          shadowColor: "#000",
          padding: 20,
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <Text style={{ fontSize: 40, letterSpacing: -1, marginRight: 10 }}>
              {numOfStar}
            </Text>
            <Text style={{ letterSpacing: -1 }}>out of 5</Text>
          </View>
          <Text>{numOfReview} Review</Text>
        </View>
        <Star score={numOfStar} />
      </View>

      <FlatList
        data={reviews.review}
        renderItem={({ item }) => <ReviewCard rev={item} />}
        keyExtractor={(item) => item.userId}
      />
    </View>
  );
};

export default CustomerReview;
