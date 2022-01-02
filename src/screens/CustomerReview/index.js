import React from "react";
import { View, Text, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import feed from "../../assets/data/feed";
import ReviewCard from "../../components/ReviewCard";
import Star from "react-native-star-view";
import reviews from "../../assets/data/reviews";

const CustomerReview = () => {
  const route = useRoute();
  const rev = reviews.find((x) => x.user === route.params.userId);
  const numOfReview = rev.review.length === 0 ? 0 : rev.review.length;
  const numOfStar =
    rev.review.length === 0
      ? 0
      : Math.round(rev.review.map((x) => x.star).reduce((y, z) => y + z) * 10) /
        (10 * rev.review.length);
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
        data={rev.review}
        renderItem={({ item }) => <ReviewCard rev={item} />}
        keyExtractor={(item) => item.userId}
      />
    </View>
  );
};

export default CustomerReview;
