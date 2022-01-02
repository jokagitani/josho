import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  ScrollView,
  RefreshControl,
} from "react-native";
import RoundedButton from "../../components/RoundedButton";
import categories from "../../assets/data/categories";
import feed from "../../assets/data/feed";
import CustomText from "../../components/CustomText";
import PostCarousel from "../../components/PostCarousel";
import PostCard from "../../components/PostCard";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const windowWidth = Dimensions.get("window").width;

  const sortedFeed = [...feed]
    .sort((a, b) => a.star - b.star)
    .slice(feed.length - 3);
  const [selectedId, setSelectedId] = useState("");
  const FlatListrfy = useRef();
  const viewConfig = useRef({ itemVisiblePercentThreshold: 40 });
  const onViewChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const selectedInstructor = viewableItems[0].item;
      setSelectedId(selectedInstructor.id);
    }
  });
  useEffect(() => {
    if (!selectedId || !FlatListrfy) {
      return;
    }
    const index = feed.findIndex((inst) => inst.id === selectedId);
    FlatListrfy.current.scrollToIndex({ index });
  }, [selectedId]);
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.backGroundView} />
      <View style={styles.iconView}>
        <FlatList
          contentContainerStyle={{
            marginBottom: 20,
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={categories.slice(0, 4)}
          renderItem={({ item }) => <RoundedButton item={item} size={70} />}
          keyExtractor={(item) => item.id}
        />

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories.slice(4)}
          renderItem={({ item }) => <RoundedButton item={item} size={60} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View
        style={{
          position: "absolute",
          top: "40%",
          paddingTop: 20,
          borderBottomWidth: 2,
          borderBottomColor: "#ECECEC",
        }}
      >
        <CustomText left={20} size={20}>
          reccomended for you
        </CustomText>

        <FlatList
          ref={FlatListrfy}
          snapToInterval={windowWidth}
          horizontal
          data={feed.slice(0, 5)}
          renderItem={({ item }) => <PostCarousel post={item} />}
          showsHorizontalScrollIndicator={false}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
      <View
        style={{
          position: "absolute",
          top: "62%",
          height: 400,
        }}
      >
        <CustomText left={10} size={20} bottom={10}>
          recently joined
        </CustomText>
        <FlatList
          horizontal
          data={sortedFeed.reverse()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <PostCard instructor={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 900,
    resizeMode: "cover",
    justifyContent: "center",
  },

  title: {
    fontSize: 70,
    fontWeight: "bold",
    color: "#ececec",
    width: "70%",
    textShadowColor: "#000",
    textShadowRadius: 3,
    marginTop: "40%",
    marginLeft: 30,
  },
  button: {
    backgroundColor: "#CDEAF7",
    padding: 10,
    width: "80%",
    borderRadius: 10,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "200",
  },
  iconView: {
    position: "absolute",
    top: "12%",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  backGroundView: {
    position: "absolute",
    top: "15%",
    height: 200,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#CFEBFD",
    opacity: 0.4,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 15,
  },
});
export default HomeScreen;
