import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserType } from "../UserContext";

const AddressScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const { userId, setUserId } = useContext(UserType);

  const handleAddAddress = async () => {
    const address = {
      name,
      mobileNo,
      street,
      houseNo,
      postalCode,
    };

    try {
      // Add the address to AsyncStorage
      await AsyncStorage.setItem("newAddress", JSON.stringify(address));

      // Display success message
      Alert.alert("Success", "Address added successfully");

      // Reset input fields
      setName("");
      setMobileNo("");
      setHouseNo("");
      setStreet("");
      setPostalCode("");

      setTimeout(() => {
        navigation.goBack();
      }, 200);
    } catch (error) {
      Alert.alert("Error", "Failed to add address");
      console.log("error", error);
    }
  };

  return (
    <ScrollView style={{ marginTop: 50 }}>
<View style={{ height: 50, backgroundColor: "#262624" }} />

  <View style={{ padding: 10 }}>
    <Text style={{ fontSize: 17, fontWeight: "bold" }}>
      Add a New Address
    </Text>

    <TextInput
      placeholderTextColor={"black"}
      placeholder="Ghana"
      style={{
        padding: 10,
        borderColor: "#DODODO",
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 5,
      }}
    />

    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 15, fontweight: "bold" }}>
        Full Name(First and Last Name)
      </Text>

      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        style={{
          padding: 10,
          borderColor: "#DODODO",
          borderWidth: 1,
          marginTop: 10,
          borderRadius: 5,
        }}
        placeholder="Enter your Name"
      />
    </View>

    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 15, fontweight: "bold" }}>
        Mobile Number
      </Text>

      <TextInput
        value={mobileNo}
        onChangeText={(text) => setMobileNo(text)}
        style={{
          padding: 10,
          borderColor: "#DODODO",
          borderWidth: 1,
          marginTop: 10,
          borderRadius: 5,
        }}
        placeholder="Mobile No"
      />
    </View>

    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 15, fontweight: "bold" }}>
        House No, Building, Company
      </Text>

      <TextInput
        value={houseNo}
        onChangeText={(text) => setHouseNo(text)}
        style={{
          padding: 10,
          borderColor: "#DODODO",
          borderWidth: 1,
          marginTop: 10,
          borderRadius: 5,
        }}
        placeholder=""
      />
    </View>

    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 15, fontweight: "bold" }}>Street</Text>

      <TextInput
        value={street}
        onChangeText={(text) => setStreet(text)}
        style={{
          padding: 10,
          borderColor: "#DODODO",
          borderWidth: 1,
          marginTop: 10,
          borderRadius: 5,
        }}
        placeholder=""
      />
    </View>

    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 15, fontweight: "bold" }}>Postal Code</Text>

      <TextInput
        value={postalCode}
        onChangeText={(text) => setPostalCode(text)}
        style={{
          padding: 10,
          borderColor: "#DODODO",
          borderWidth: 1,
          marginTop: 10,
          borderRadius: 5,
        }}
        placeholder=""
      />
    </View>

    <Pressable
      onPress={handleAddAddress}
      style={{
        backgroundColor: "#FFC72C",
        padding: 19,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <Text style={{ fontWeight: "bold" }}>Add Address</Text>
    </Pressable>
  </View>
</ScrollView>
);
};

export default AddressScreen;

const styles = StyleSheet.create({});