import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ProductInfoScreen from "../screens/ProductInfoScreen";
import AddAddressScreen from "../screens/AddAddressScreen";
import AddressScreen from "../screens/AddressScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";
import CameraScreen from "../screens/CameraScreen";
import ConfirmationScreen from "../screens/ConfirmationScreen";
import PlatziStoreApi from "../screens/PlatziStoreApi";
import HelpScreen from "../screens/HelpScreen";
import ProductInfoScreen2 from "../screens/ProductInfoScreen2";
import FaqScreen from "../screens/FaqScreen"
import OrderScreen from "../screens/OrderScreen";
import OrderScreen2 from "../screens/OrderScreen2";
import Services from "../components/Services";
import Privacy from "../components/Privacy";
import Country from "../components/Country";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#f07b07" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown:true,
            headerTitle:"Account",
            headerTintColor:"white",
            headerStyle:{backgroundColor:"#262624"},
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "black" },
            headerTitleAlign:"center",
            headerRight: () => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                  marginRight: 12,
                }}
              >
                <AntDesign  name="shoppingcart" size={24} color="white" />
                <AntDesign name="search1" size={24} color="white" />
              </View>
       ),
            
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="#f07b07" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            headerShown:true,
            headerTitle:"Cart",
            headerTitleAlign:"center",
            headerTintColor:"white",
            headerStyle:{backgroundColor:"#262624"},
            tabBarLabel: "Cart",
            tabBarLabelStyle: { color: "black" },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="shoppingcart" size={24} color="#f07b07" />
              ) : (
                <AntDesign name="shoppingcart" size={24} color="black" />
              ),
              }}
        />
        <Tab.Screen
          name="Shop"
          component={PlatziStoreApi}
          options={{
            headerShown:false,
            headerTitle:"Shop",
            headerTitleAlign:"center",
            headerTintColor:"white",
            headerStyle:{backgroundColor:"#262624"},
            tabBarLabel: "Shop",
            tabBarLabelStyle: { color: "black" },
            headerTitleAlign:"center",
            headerRight: () => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                  marginRight: 12,
                }}
              >
                <AntDesign name="shoppingcart" size={24} color="white" />
      
                <AntDesign name="search1" size={24} color="white" />
              </View>
       ),
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="shop" size={24} color="#f07b07" />
              ) : (
                <Entypo name="shop" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Help"
          component={HelpScreen}
          options={{
            headerShown:true,
            headerTitle:"Help",
            headerTintColor:"white",
            headerStyle:{backgroundColor:"#262624"},
            tabBarLabel: "Help",
            tabBarLabelStyle: { color: "black" },
            headerTitleAlign:"center",
            headerRight: () => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                  marginRight: 12,
                }}
              >
                <AntDesign name="shoppingcart" size={24} color="white" />
      
                <AntDesign name="search1" size={24} color="white" />
              </View>
       ),
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="help-with-circle" size={24} color="#f07b07" />
              ) : (
                <Entypo name="help-with-circle" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Services"
          component={Services}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Country"
          component={Country}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Privacy"
          component={Privacy}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Info"
          component={ProductInfoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Faq"
          component={FaqScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Info2"
          component={ProductInfoScreen2}
          options={{ 
            headerShown:false,
            headerTitle:"Details",
            headerTintColor:"white",
            headerStyle:{backgroundColor:"#262624"}
            

          }}
        />
        <Stack.Screen
          name="Address"
          component={AddAddressScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Add"
          component={AddressScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Confirm"
          component={ConfirmationScreen}
          options={{ headerShown: false }}
        />  
        <Stack.Screen
          name="PlatziStore"
          component={PlatziStoreApi}
          options={{ 
            headerShown:true,
            headerTitle:"Details",
            headerTintColor:"white",
            headerStyle:{backgroundColor:"#262624"}
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ 
            headerShown:false,
            headerTitle:"Details",
            headerTintColor:"white",
            headerStyle:{backgroundColor:"#262624"}
          }}
        />
        <Stack.Screen
        name="Help"
        component={HelpScreen}
        options={{ 
          headerShown:true,
          headerTitle:"Details",
          headerTintColor:"white",
          headerStyle:{backgroundColor:"#262624"}
        }}
      />

<Stack.Screen
        name="Order"
        component={OrderScreen}
        options={{ 
          headerShown:true,
          headerTitle:"Order",
          headerTintColor:"white",
          headerStyle:{backgroundColor:"#262624"}
        }}
      />

<Stack.Screen
        name="Order2"
        component={OrderScreen2}
        options={{ 
          headerShown:true,
          headerTitle:"Orders",
          headerTitleAlign:"center",
          headerTintColor:"white",
          headerStyle:{backgroundColor:"#262624"},
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                marginRight: 12,
              }}
            >
              
              <AntDesign  name="shoppingcart" size={24} color="white" />
              <AntDesign name="search1" size={24} color="white" />
            </View>
     ),
        }}
      />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
