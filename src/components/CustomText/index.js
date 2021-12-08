import React from "react";
import { Text } from "react-native";

const CustomText = (props) => {
  return (
    <Text
      style={{
        fontFamily: "Arial",
        letterSpacing: -1,
        fontWeight: "100",
        color: "grey",
        fontSize: props.size,
        marginLeft: props.left,
        marginBottom: props.bottom,
      }}
    >
      {props.children}
    </Text>
  );
};

export default CustomText;
