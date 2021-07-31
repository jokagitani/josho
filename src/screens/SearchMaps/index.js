import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import instructors from "../../assets/data/feed";
import CustomMarker from "../../components/Marker";

const SearchMaps = () => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <MapView
        style={{ width: "100%", height: "100%" }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 1.3521,
          longitude: 103.8198,
          latitudeDelta: 0.2,
          longitudeDelta: 0.5,
        }}
      >
        {instructors.map((instructor) => (
          <CustomMarker
            isSelected={instructor.id === selectedId}
            coordinate={instructor.coordinate}
            rate={instructor.rate}
            text={instructor.text}
            onPress={() => setSelectedId(instructor.id)}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

export default SearchMaps;
