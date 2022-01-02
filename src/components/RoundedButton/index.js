import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RoundedButton = ({ item, size }) => {
  const navigation = useNavigation();
  const goToPage = () => {
    navigation.navigate("Category", {
      categoryId: item.id,
    });
  };
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: (1 / size) ** 2 * 50000,
      }}
    >
      <Pressable
        style={[
          styles.roundButton,
          { width: size, backgroundColor: item.color },
        ]}
        onPress={goToPage}
      >
        <View style={{ height: size * 0.7, justifyContent: "center" }}>
          <Image
            style={[styles.image, { height: size * 0.5 }]}
            source={item.uri}
          />
        </View>
      </Pressable>
      <Text style={{ fontSize: 18, fontWeight: "300", letterSpacing: -1.2 }}>
        {item.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  roundButton: {
    backgroundColor: "white",
    borderRadius: 100,
    padding: 5,
    aspectRatio: 1 / 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    height: 40,
    aspectRatio: 1 / 1,
  },
});
export default RoundedButton;
