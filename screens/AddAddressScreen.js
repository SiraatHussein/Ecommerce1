import {
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { UserType } from "../UserContext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";

const AddAddressScreen = () => {
  const navigation = useNavigation();
  const [addresses, setAddresses] = useState([]);
  const { userId } = useContext(UserType);

  const fetchAddresses = async () => {
    try {
      const response = await axios.get(`http://172.20.10.7:8081/addresses/${userId}`);
      const { addresses } = response.data;
      setAddresses(addresses);
    } catch (error) {
      console.log("error", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchAddresses();
    }, [])
  );

  const [newAddress, setNewAddress] = useState(null);

  useEffect(() => {
    const fetchNewAddress = async () => {
      const savedAddress = await AsyncStorage.getItem("newAddress");
      if (savedAddress) {
        setNewAddress(JSON.parse(savedAddress));
      }
    };
    fetchNewAddress();
  }, []);

  return (
    <ScrollView showVerticalScrollIndicator={false} style={{ marginTop: 50 }}>
      <View
        style={{
          backgroundColor: "#262624",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: "white",
            borderRadius: 3,
            height: 38,
            flex: 1,
          }}
        >
          <AntDesign
            style={{ paddingLeft: 10 }}
            name="search1"
            size={22}
            color="black"
          />
          <TextInput placeholder="Search " />
        </Pressable>
       
        <Pressable onPress={() => navigation.navigate("Cart")}>
              <AntDesign
                name="shoppingcart"
                size={24}
                color="white"
                style={{ marginLeft: 20 }}
              />
            </Pressable>
      </View>

      <Pressable
          onPress={() => navigation.navigate("Add")}
          style={styles.addButton}
        >
          <Text>Add a New Address</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </Pressable>

      <View style={{ padding: 10, marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Your Addresses</Text>
        {addresses?.map((address, index) => (
          <View key={index} style={styles.addressContainer}>
            <Text>Name: {address.name}</Text>
            <Text>Mobile No: {address.mobileNo}</Text>
            <Text>House No: {address.houseNo}</Text>
            <Text>Street: {address.street}</Text>
            <Text>Postal Code: {address.postalCode}</Text>
          </View>
        ))}

        {newAddress && (
          <View style={styles.addressContainer}>
            <Text>New Address:</Text>
            <Text>Name: {newAddress.name}</Text>
            <Text>Mobile No: {newAddress.mobileNo}</Text>
            <Text>House No: {newAddress.houseNo}</Text>
            <Text>Street: {newAddress.street}</Text>
            <Text>Postal Code: {newAddress.postalCode}</Text>
          </View>
        )}

<View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 7,
                }}
              >
                <Pressable
                  style={{
                    backgroundColor: "#F5F5F5",
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderRadius: 5,
                    borderWidth: 0.9,
                    borderColor: "#D0D0D0",
                  }}
                >
                  <Text>Edit</Text>
                </Pressable>

                <Pressable
                  style={{
                    backgroundColor: "#F5F5F5",
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderRadius: 5,
                    borderWidth: 0.9,
                    borderColor: "#D0D0D0",
                  }}
                >
                  <Text>Remove</Text>
                </Pressable>

                <Pressable
                  style={{
                    backgroundColor: "#F5F5F5",
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderRadius: 5,
                    borderWidth: 0.9,
                    borderColor: "#D0D0D0",
                  }}
                >
                  <Text>Set as Default</Text>
                </Pressable>
              </View>
        
      </View>
    </ScrollView>
      
  );
};

const styles = StyleSheet.create({
  addressContainer: {
    borderWidth: 1,
    borderColor: "#DODODO",
    marginVertical: 10,
    padding: 10,
  },
  addButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#DODODO",
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingVertical: 7,
    paddingHorizontal: 5,
  },
});

export default AddAddressScreen;