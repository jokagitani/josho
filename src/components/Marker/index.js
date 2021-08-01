import React from "react";
import { View, Text } from "react-native";
import { Marker } from "react-native-maps";

const CustomMarker = (props) => {
  const { coordinate, rate, text, onPress, isSelected } = props;

  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={{
          backgroundColor: isSelected ? "black" : "#fff",
          borderRadius: 10,
          padding: 10,
          width: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontWeight: "bold", color: isSelected ? "white" : "black" }}
        >
          ${rate}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: isSelected ? "white" : "black",
          }}
        >
          {text}
        </Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
