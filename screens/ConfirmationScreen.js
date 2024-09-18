import React, { useState, useEffect, useContext} from "react";
import { ScrollView, Text, View, Pressable, StyleSheet } from "react-native";
import { FontAwesome5, Entypo, MaterialIcons  } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { cleanCart } from "../redux/CartReducer";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { UserType } from "../UserContext";
import axios from "axios";

const ConfirmationScreen = () => {
  const steps = [
    { title: "Address", content: "Address Form" },
    { title: "Delivery", content: "Delivery Options" },
    { title: "Payment", content: "Payment Details" },
    { title: "Place Order", content: "Order Summary" },
  ];
  
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(0);
 

  const fetchNewAddress = async () => {
    const savedAddress = await AsyncStorage.getItem("newAddress");
    if (savedAddress) {
      setNewAddress(JSON.parse(savedAddress));
    }
  };
  const { userId, setUserId } = useContext(UserType);
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    ?.map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);


  useEffect(() => {
    fetchNewAddress();
  }, []);
  const dispatch = useDispatch();
  const [option, setOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [newAddress, setNewAddress] = useState(null);
  const handlePlaceOrder = async () => {
    try {
      const orderData = {
        userId: userId,
        cartItems: cart,
        totalPrice: total,
        shippingAddress: newAddress,
        paymentMethod: selectedOption,
      };

      const response = await axios.post(
        "http://172.20.10.7:8081/orders",
        orderData
      );
      if (response.status === 200) {
        navigation.navigate("Order");
        dispatch(cleanCart());
        console.log("order created successfully", response.data);
      } else {
        console.log("error creating order", response.data);
      }
    } catch (error) {
      console.log("errror", error);
    }
  };
  
  return (
    <ScrollView style={{ marginTop: 55 }}>
      <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 40 }}>

      <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
            justifyContent: "space-between",
          }}
        >
          {steps?.map((step, index) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              {index > 0 && (
                <View
                  style={[
                    { flex: 1, height: 2, backgroundColor: "green" },
                    index <= currentStep && { backgroundColor: "green" },
                  ]}
                />
              )}
              <View
                style={[
                  {
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: "#ccc",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  index < currentStep && { backgroundColor: "green" },
                ]}
              >
                {index < currentStep ? (
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
                  >
                    &#10003;
                  </Text>
                ) : (
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
                  >
                    {index + 1}
                  </Text>
                )}
              </View>
              <Text style={{ textAlign: "center", marginTop: 8 }}>
                {step.title}
              </Text>
            </View>
          ))}
        </View>
      </View>

        {currentStep === 0 && newAddress && (
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Select Delivery Address
            </Text>
            <Pressable
              style={{
                borderWidth: 1,
                borderColor: "#D0D0D0",
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                paddingBottom: 17,
                marginVertical: 7,
                borderRadius: 6,
              }}
            >
               {newAddress ? (
                <FontAwesome5 name="dot-circle" size={20} color="#FFC72C" />
              ) : (
                <Entypo name="circle" size={20} color="gray" />
              )}
              <View style={{ marginLeft: 6 }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>{newAddress.name}</Text>
                  <Entypo name="location-pin" size={24} color="red" />
                </View>
  
                <Text style={{ fontSize: 15, color: "#181818" }}>{newAddress.street}</Text>
                <Text style={{ fontSize: 15, color: "#181818" }}>{newAddress.houseNo}</Text>
                <Text style={{ fontSize: 15, color: "#181818" }}>Mobile No: {newAddress.mobileNo}</Text>
                <Text style={{ fontSize: 15, color: "#181818" }}>Postal Code: {newAddress.postalCode}</Text>
  
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 7 }}>
                  <Pressable style={styles.button}>
                    <Text>Edit</Text>
                  </Pressable>
                  <Pressable style={styles.button}>
                    <Text>Remove</Text>
                  </Pressable>
                  <Pressable style={styles.button}>
                    <Text>Set as Default</Text>
                  </Pressable>
                </View>
  
                <Pressable
                  onPress={() => setCurrentStep(1)}
                  style={[styles.button, { backgroundColor: "#FFC72C", marginTop: 10 }]}
                >
                  <Text style={{ color: "black" }}>Deliver to this Address</Text>
                </Pressable>
              </View>
            </Pressable>
          </View>
        )}
      
       {currentStep == 1 && (
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Choose your delivery options
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              padding: 8,
              gap: 7,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            {option ? (
              <FontAwesome5 name="dot-circle" size={20} color="#f07b07" />
            ) : (
              <Entypo
                onPress={() => setOption(!option)}
                name="circle"
                size={20}
                color="gray"
              />
            )}

                <Text style={{flex:1}}>
                      <Text style={{color:"orange", fontWeight:"500"}}>Tomorrow by 10pm</Text>
                      - FREE delivery 
                    </Text>
          </View>

          <Pressable
            onPress={() => setCurrentStep(2)}
            style={{
              backgroundColor: "#FFC72C",
              padding: 10,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Text>Continue</Text>
          </Pressable>
        </View>
      )}

      {currentStep == 2 && (
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Select your payment Method
          </Text>

          <View
            style={{
              backgroundColor: "white",
              padding: 8,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              flexDirection: "row",
              alignItems: "center",
              gap: 7,
              marginTop: 12,
            }}
          >
            {selectedOption === "cash" ? (
              <FontAwesome5 name="dot-circle" size={20} color="#008397" />
            ) : (
              <Entypo
                onPress={() => setSelectedOption("cash")}
                name="circle"
                size={20}
                color="gray"
              />
            )}

            <Text>Cash on Delivery</Text>
          </View>

          <View
            style={{
              backgroundColor: "white",
              padding: 8,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              flexDirection: "row",
              alignItems: "center",
              gap: 7,
              marginTop: 12,
            }}
          >
            {selectedOption === "card" ? (
              <FontAwesome5 name="dot-circle" size={20} color="#008397" />
            ) : (
              <Entypo
                onPress={() => {
                  setSelectedOption("card");
                  Alert.alert("Credit/Debit card", "Pay Online", [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel is pressed"),
                    },
                    {
                      text: "OK",
                      onPress: () => pay(),
                    },
                  ]);
                }}
                name="circle"
                size={20}
                color="gray"
              />
            )}

            <Text>Credit or debit card</Text>
          </View>

          <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"white", padding:8, gap:7, borderWidth:1, borderColor:"#DODODO", marginTop:12,
          }} >
            {selectedOption === "mobilemoney*" ?(
              <FontAwesome5 name="dot-circle" size={20} color="#f07b07" />
            ): (
              <Entypo onPress={() => setSelectedOption("mobilemoney")} 
                    name="circle" size={20} color="gray"/>
            )}
          
                      <Text>Mobile Money</Text>
          </View>

          <Pressable
            onPress={() => setCurrentStep(3)}
            style={{
              backgroundColor: "#FFC72C",
              padding: 10,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Text>Continue</Text>
          </Pressable>
        </View>
      )}

      {currentStep === 3 && selectedOption === "cash" && (
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Order Now</Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
              backgroundColor: "white",
              padding: 8,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            <View>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                Save 5% and never run out
              </Text>
            </View>

            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>

          <View
            style={{
              backgroundColor: "white",
              padding: 8,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            <Text>Shipping to {newAddress?.name}</Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500", color: "gray" }}>
                Items
              </Text>

              <Text style={{ color: "gray", fontSize: 16 }}>GH₵{total}</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500", color: "gray" }}>
                Delivery
              </Text>

              <Text style={{ color: "gray", fontSize: 16 }}>GH₵ 0</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Order Total
              </Text>

              <Text
                style={{ color: "#FFC72C", fontSize: 17, fontWeight: "bold" }}
              >
                GH₵ {total}
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "white",
              padding: 8,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 16, color: "gray" }}>Pay With</Text>

            <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 7 }}>
              Pay on delivery (Cash)
            </Text>
          </View>

          <Pressable
            onPress={handlePlaceOrder}
            style={{
              backgroundColor: "#FFC72C",
              padding: 10,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text>Place your order</Text>
          </Pressable>
        </View>
      )} 
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
    borderWidth: 0.9,
    borderColor: "#D0D0D0",
    marginRight: 10,
  },
});

export default ConfirmationScreen;
