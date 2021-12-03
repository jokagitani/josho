import React, { useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";

const SearchButton = ({ color }) => {
  const [inputText, setInputText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity>
        <View style={{ paddingRight: 30 }}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Fontisto name="search" size={25} color={color} />
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(false);
          }}
        >
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <View style={styles.modalView}>
              <TextInput
                style={styles.modalText}
                placeholder="Search for your interest!"
                value={inputText}
                onChangeText={setInputText}
              ></TextInput>
              {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <AntDesign name="close" size={25} color={color} />
            </Pressable> */}
            </View>
          </TouchableOpacity>
        </Modal>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  modalView: {
    marginTop: 50,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default SearchButton;
