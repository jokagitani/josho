import React from "react";
import { View, Text, FlatList } from "react-native";

const ThreeRow = ({ data }) => {
  const len = data.length;
  const numIteration = Math.floor(len / 3);

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      {data
        .filter((x) => data.indexOf(x) % 3 === 0)
        .map((x) => {
          const i = data.indexOf(x); //0, 3, 6
          const itr = len === i + numIteration ? numIteration : 3;

          return (
            <FlatList
              contentContainerStyle={{ flex: 1 }}
              data={data.slice(i, i + itr)}
              renderItem={({ item }) => (
                <View
                  style={{ height: 100, width: 400, backgroundColor: "grey" }}
                >
                  <Text>{item.name}</Text>
                </View>
              )}
              keyExtractor={(item) => data.indexOf(item)}
            />
          );
        })}
    </View>
  );
};

export default ThreeRow;
