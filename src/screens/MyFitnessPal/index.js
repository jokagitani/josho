import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import data from "./data";
import { useNavigation } from "@react-navigation/native";

const FitnessPal = () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingTop: 50 }}>
      <View style={styles.header}>
        <Feather name={"arrow-left"} size={30}></Feather>
        <Text style={styles.headerText}>Breakfast</Text>
        <Entypo name={"plus"} size={30}></Entypo>
      </View>

      <View style={styles.search}>
        <TextInput style={styles.textInput}>
          <Feather name={"search"} size={20}></Feather>
          <Text style={styles.placeholder}> Seach for food</Text>
        </TextInput>
        <View style={styles.columns}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name={"scan1"} size={30}></AntDesign>
            <Text> SCAN MEAL</Text>
          </View>
          <Text style={{ color: "#ececec", fontSize: 24 }}>|</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name={"barcode"} size={30}></AntDesign>
            <Text> SCAN BARCODE</Text>
          </View>
        </View>
      </View>

      <View style={styles.columns}>
        <View style={styles.colChild}>
          <Text>ALL</Text>
        </View>
        <View style={styles.colSelected}>
          <Text style={{ color: "#357EC7" }}>RESTAURANT</Text>
        </View>
        <View style={styles.colChild}>
          <Text>RECIPE</Text>
        </View>
        <View style={styles.colChild}>
          <Text>MEALS</Text>
        </View>
        <View style={styles.colChild}>
          <Text>MYFOOD</Text>
        </View>
      </View>

      <View style={styles.scrollable}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold" }}>History</Text>
        </View>

        <View style={styles.filter}>
          <Text>
            <Ionicons name={"ios-filter"}></Ionicons>Most Recent
          </Text>
        </View>
      </View>
      <View style={styles.scrollableBody}>
        <View style={styles.scrollChild}>
          <Text style={{ width: "25%" }}>Food</Text>

          <Text style={{ width: "25%" }}>Calories</Text>

          <Text style={{ width: "25%" }}>Env Star</Text>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate("Star Page")}
              style={styles.scrollChild}
            >
              <Text
                style={{
                  width: "25%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.name}
              </Text>
              <Text style={{ color: "#ececec", fontSize: 24, margin: 10 }}>
                |
              </Text>
              <Text
                style={{
                  width: "25%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.calories}
              </Text>
              <Text
                style={{ color: "#ececec", fontSize: 24, marginHorizontal: 10 }}
              >
                |
              </Text>
              <Text
                style={{
                  width: "25%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.envStars}

                {<AntDesign name={"star"} size={15} color="gold"></AntDesign>}
              </Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  textInput: {
    backgroundColor: "#ececec",
    width: "100%",
    padding: 15,
    borderRadius: 2,
  },
  placeholder: {
    margin: 10,
  },
  columns: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
    justifyContent: "space-around",
    padding: 20,
  },
  colChild: {
    justifyContent: "center",
    alignItems: "center",
  },
  colSelected: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#357EC7",
    borderBottomWidth: 2,
  },
  scrollable: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  filter: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#ececec",
    padding: 10,
  },
  scrollableBody: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  scrollChild: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    padding: 20,
  },
});

export default FitnessPal;
