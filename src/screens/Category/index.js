import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Pressable,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import categories from "../../assets/data/categories";
import CustomText from "../../components/CustomText";
import CategoryCard from "../../components/CategoryCard";
import CategoryDealsCard from "../../components/CategoryDealsCard";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Category = () => {
  const route = useRoute();
  const cat = categories.find((x) => x.id === route.params.categoryId);
  const [selectedId, setSelectedId] = useState("");
  const FlatListExclusive = useRef();
  const viewConfig = useRef({ itemVisiblePercentThreshold: 10 });
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const selectedPost = viewableItems[0].item;
      setSelectedId(selectedPost.id);
    }
  });
  useEffect(() => {
    if (!selectedId || !FlatListExclusive) {
      return;
    }
    const index = cat.deals.findIndex((inst) => inst.id === selectedId);
    FlatListExclusive.current.scrollToIndex({ index });
  }, [selectedId]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{cat.name}</Text>
      </View>

      <View style={styles.topInstructors}>
        <FlatList
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
          scrollEnabled={false}
          numColumns={2}
          data={cat.genre}
          renderItem={({ item }) => <CategoryCard item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View>
        <CustomText left={20} size={20}>
          Exclusives
        </CustomText>
        <FlatList
          ref={FlatListExclusive}
          snapToInterval={windowWidth}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewableItemsChanged.current}
          data={cat.deals}
          renderItem={({ item }) => <CategoryDealsCard item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    marginBottom: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    letterSpacing: -1,
    marginVertical: 16,
    marginLeft: 20,
  },
  topInstructors: {
    height: 400,
    width: windowWidth,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardContainer: {
    flexDirection: "row",
    borderColor: "#ECECEC",
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
});
export default Category;
