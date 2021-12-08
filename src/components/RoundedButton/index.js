import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import CustomText from "../../components/CustomText";

const RoundedButton = ({ item, size }) => {
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
      >
        <View style={{ height: size * 0.6 }}>
          <Image
            style={[styles.image, { height: size * 0.6 }]}
            source={item.uri}
          />
        </View>
      </Pressable>
      <CustomText size={size / 4}>{item.name}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  roundButton: {
    backgroundColor: "white",
    borderRadius: 100,
    padding: 10,
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
