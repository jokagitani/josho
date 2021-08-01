import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import instructors from "../../assets/data/feed";
import CustomMarker from "../../components/Marker";
import PostCarousel from "../../components/PostCarousel";

const SearchMaps = () => {
  const [selectedId, setSelectedId] = useState(0);
  return (
    <View style={styles.container}>
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
      <View style={{ position: "absolute", bottom: 10 }}>
        <FlatList
          data={instructors}
          renderItem={({ item }) => <PostCarousel post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchMaps;
