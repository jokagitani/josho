import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import instructors from "../../assets/data/feed";
import AntDesign from "react-native-vector-icons/AntDesign";

const instructor = instructors[0];

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: instructor.uri[0],
          }}
        />
        <View style={{ padding: 10 }}>
          <Text style={styles.username}>{instructor.username}</Text>
          <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.bodyText}>Edit Profile </Text>
            <AntDesign name={"right"} size={12} color={"grey"} />
          </Pressable>
        </View>
      </View>

      <ScrollView>
        <Pressable style={styles.bodyContainer}>
          <Text style={styles.bodyText}>Reviews</Text>
          <AntDesign name={"right"} size={12} color={"grey"} />
        </Pressable>
        <Pressable style={styles.bodyContainer}>
          <Text style={styles.bodyText}>Help Centre</Text>
          <AntDesign name={"right"} size={12} color={"grey"} />
        </Pressable>
        <Pressable style={styles.bodyContainer}>
          <Text style={styles.bodyText}>Settings</Text>
          <AntDesign name={"right"} size={12} color={"grey"} />
        </Pressable>
        <Pressable style={styles.bodyContainer}>
          <Text style={styles.bodyText}>Share</Text>
          <AntDesign name={"right"} size={12} color={"grey"} />
        </Pressable>
        <Pressable style={styles.bodyContainer}>
          <Text style={styles.bodyText}>Rewards</Text>
          <AntDesign name={"right"} size={12} color={"grey"} />
        </Pressable>
        <Pressable style={styles.bodyContainer}>
          <Text style={styles.bodyText}>Invite Friends</Text>
          <AntDesign name={"right"} size={12} color={"grey"} />
        </Pressable>
        <Pressable style={styles.bodyContainer}>
          <Text style={styles.bodyText}>Log Out</Text>
          <AntDesign name={"right"} size={12} color={"grey"} />
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    backgroundColor: "white",
  },
  imageContainer: {
    marginTop: 100,
    height: "40%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "50%",
    aspectRatio: 1 / 1,
    borderRadius: 100,
  },
  username: {
    fontSize: 36,
    fontWeight: "bold",
  },
  bodyContainer: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ececec",
  },
  bodyText: {
    color: "grey",
  },
});
export default Profile;
