import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DetailedPost from "../../components/DetailedPost";
import instructors from "../../assets/data/feed";
import { useRoute } from "@react-navigation/native";

const Instructor = () => {
  const route = useRoute();
  const instructor = instructors.find(
    (instructor) => instructor.id === route.params.postId
  );
  return (
    <View style={styles.container}>
      <DetailedPost post={instructor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default Instructor;
