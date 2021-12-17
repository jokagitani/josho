import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
import instructors from "../../assets/data/feed";
import CustomMarker from "../../components/Marker";
import PostCarousel from "../../components/PostCarousel";

const SearchMaps = () => {
  const [selectedId, setSelectedId] = useState(0);
  const width = useWindowDimensions().width;
  const Flatlist = useRef();
  const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
  const onViewChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const selectedInstructor = viewableItems[0].item;
      setSelectedId(selectedInstructor.id);
    }
    console.warn(viewableItems);
  });
  const map = useRef();

  useEffect(() => {
    if (!selectedId || !Flatlist) {
      return;
    }
    const index = instructors.findIndex(
      (instructor) => instructor.id === selectedId
    );
    Flatlist.current.scrollToIndex({ index });

    const selectedInstructor = instructors[index];
    const region = {
      latitude: selectedInstructor.coordinate.latitude,
      longitude: selectedInstructor.coordinate.longitude,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    };
    map.current.animateToRegion(region);
  }, [selectedId]);

  return (
    <View style={styles.container}>
      <MapView
        ref={map}
        style={{ width: "100%", height: "100%" }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 1.3521,
          longitude: 103.8198,
          latitudeDelta: 0.5,
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
          ref={Flatlist}
          data={instructors}
          renderItem={({ item }) => <PostCarousel post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
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
