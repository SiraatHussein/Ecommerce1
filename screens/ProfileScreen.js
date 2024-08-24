import {StyleSheet,Text,View,SafeAreaView,TouchableOpacity,ScrollView,Pressable,} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { UserType } from "../UserContext";

const ProfileScreen = ({navigation}) => {
  const { userId, setUserId } = useContext(UserType);

  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/profile/${userId}`
        );
        const { user } = response.data;
        setUser(user);
      } catch (error) {
        console.log("error", error);
      }
    }});
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#383633", paddingTop: 5, paddingBottom: 5 }}>
      
         <View style={{ marginTop: 5,  marginLeft: 10 }}> 
          <View style={{display: "flex",flexDirection: "row",justifyContent: "space-between",}}>
            
            <View>
              <Text style={{ color: "#f07b07", fontWeight: "bold" }}>
                Welcome {user?.name}
              </Text>
              <Text style={{ color: "white" }}>Enter your account</Text>
            </View>
            <TouchableOpacity
            onPress={()=>navigation.navigate("Login")}

              style={{backgroundColor: "#f07b07",borderRadius: 5,padding: 12,marginRight: 10,paddingHorizontal: 25, }}
            >
              <Text style={{ color: "white", fontWeight: "500" }}>
                Login/Sign in
              </Text>
            </TouchableOpacity>
          </View>
         </View> 
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingLeft: 10,
          backgroundColor: "white",
          paddingTop: 5,
          paddingBottom: 5,
        }}
      >
        <MaterialIcons
          name="account-balance-wallet"
          size={25}
          color="#142687"
        />
        <Text
          style={{
            marginLeft: 10,
            marginTop: 4,
            color: "#142687",
            fontWeight: "500",
            fontSize: 15,
          }}
        >
          Login to see your balance
        </Text>
      </View>
      <ScrollView>
        <View style={{ marginTop: 15, marginLeft: 10 }}>
          <Text style={{ color: "grey", fontSize: 12, fontWeight: "500" }}>
            MY JUMIA ACCOUNT
          </Text>
        </View>
        <View
          style={{
            height: 485,
            backgroundColor: "white",
            marginTop: 10,
            paddingLeft: 10,
          }}
        >
          <View style={{ flexDirection: "row", marginTop: 20 }}  >
            <Feather name="package" size={24} color="black" />
            <Text
            onPress={() => navigation.navigate("Order2")}
              style={{
                marginLeft: 15,
                marginTop: 5,
                fontWeight: "500",
                fontSize: 15,
              }}
            >
              Orders
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 35 }}>
            <FontAwesome name="envelope-o" size={24} color="black" />
            <Text
              style={{
                marginLeft: 15,
                marginTop: 5,
                fontWeight: "500",
                fontSize: 15,
              }}
            >
              Inbox
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 35 }}>
            <Octicons name="code-review" size={24} color="black" />
            <Text
              style={{
                marginLeft: 15,
                marginTop: 5,
                fontWeight: "500",
                fontSize: 15,
              }}
            >
              Rating & Reviews
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 35 }}>
            <MaterialIcons name="card-giftcard" size={24} color="black" />
            <Text
              style={{
                marginLeft: 15,
                marginTop: 5,
                fontWeight: "500",
                fontSize: 15,
              }}
            >
              Vouchers
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 35 }}>
            <AntDesign name="hearto" size={24} color="black" />
            <Text
              style={{
                marginLeft: 15,
                marginTop: 5,
                fontWeight: "500",
                fontSize: 15,
              }}
            >
              Saved Items
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 35 }}>
            <MaterialIcons name="store" size={26} color="black" />
            <Text
              style={{
                marginLeft: 15,
                marginTop: 5,
                fontWeight: "500",
                fontSize: 15,
              }}
            >
              Followed Sellers
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 35 }}>
            <Ionicons name="eye-outline" size={24} color="black" />
            <Text
              style={{
                marginLeft: 15,
                marginTop: 5,
                fontWeight: "500",
                fontSize: 15,
              }}
            >
              Recently Viewed
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 35 }}>
            <MaterialIcons
              name="youtube-searched-for"
              size={24}
              color="black"
            />
            <Text
              style={{
                marginLeft: 15,
                marginTop: 5,
                fontWeight: "500",
                fontSize: 15,
              }}
            >
              Recently Searched
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 15, marginLeft: 10 }}>
          <Text style={{ color: "grey", fontSize: 12, fontWeight: "500" }}>
            MY SETTINGS
          </Text>
        </View>
        <View style={{ height: 50, backgroundColor: "white", marginTop: 10 }}>
        <Pressable onPress={() => navigation.navigate("Address")}>
          <Text
            style={{
              marginTop: 20,
              fontSize: 15,
              marginLeft: 10,
              fontWeight: "500",
            }}
          >
            Address Book
          </Text>
          </Pressable>
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "#f07b07" }}>Login</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});