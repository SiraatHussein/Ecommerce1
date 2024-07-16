import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { Dimensions } from "react-native";
import { addToCart } from "../redux/CartReducer";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
=======
import { addToCart } from "../redux/CartReducer";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
>>>>>>> origin/main

import { AntDesign } from "@expo/vector-icons";



const ProductInfoScreen2 = ({route}) => {
  const navigation = useNavigation();

  
  // const { width } = Dimensions.get("window");
  // const navigation = useNavigation();
  const [addedToCart, setAddedToCart] = useState(false);
  // const height = (width * 100) / 100;
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const { product } = route.params;


  const handleAddToCart =() =>{
    dispatch(addToCart(product));
  }

  const handleBuyNow = () => {
    // Implement your "Buy Now" logic here
    console.log("Buying product:", product);
  };
  const { width } = Dimensions.get("window");
  const height = (width * 100) / 100;
  const navigation = useNavigation();
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const addItemToCart = (product) => {
    setAddedToCart(true);
    dispatch(addToCart(product));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  
  return (
    <View>
      <View
            style={{
              backgroundColor: "#262624",
              height:98,
              padding: 10,
             flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{color:"white",marginLeft:170,marginTop:50,fontSize:18,fontWeight:"500"}}>Details</Text>
            
            <Pressable onPress={() => navigation.navigate("Cart")}>
              <AntDesign
                name="shoppingcart"
                size={24}
                color="white"
                style={{ marginLeft: 120 ,marginTop:50}}
              />
            </Pressable>
          </View>
      
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        
          <Image
            source={{ uri: product.images[0] }}
            style={styles.productImage}
          />
          <Image
            source={{ uri: product.images[1] }}
            style={styles.productImage}
          />
          <Image
            source={{ uri: product.images[2] }}
            style={styles.productImage}
          />

        </ScrollView>
<<<<<<< HEAD
        <View style={{marginBottom:230, marginLeft:20}}>
        <Text style={styles.productName}>{product.title}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productPrice}>GH₵ {product.price}</Text>
        <TouchableOpacity style={styles.AddToCart}  onPress={handleAddToCart}>
          {/* <Text style={styles.AddToCartText}>Add to Cart</Text> */}
          {addedToCart ? (
          <View>
            <Text style={styles.AddToCartText}>Added To Cart</Text>
          </View>
        ) : (
          <Text style={styles.AddToCartText}> Add to Cart</Text>
=======

        <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#E0E0E0",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
               marginTop:2,
               marginRight:300
              }}
            >
              <AntDesign name="hearto" size={24} color="black" />
            </View>
        <Text style={styles.productName}>{product.title}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productPrice}>GH₵ {product.price}</Text>

        
        <TouchableOpacity onPress={() => addItemToCart(route?.params?.item)} style={styles.AddToCart} >
       
        {addedToCart ? (
          <View >
            <Text>Added To Cart</Text>
          </View>
        ) : (
          <Text> Add to Cart</Text>
>>>>>>> origin/main
        )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton} onPress={handleBuyNow}>
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>

        </View>

        
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    height:1000
  
  },
  productImage: {
    borderRadius: 30,
    marginTop: 10,
    marginLeft: 16,
    width: 350,
    height: 400,
    resizeMode: "cover",
    
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop:10,
    marginLeft:8
    
    
  },
  productDescription: {
    fontSize:13,
    marginLeft:10,
    marginBottom: 20,
    marginTop:10
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buyNowButton: {
<<<<<<< HEAD
    marginTop: 10,
    backgroundColor: "#FFAC1C",
    height:50,
    borderRadius: 20,
    alignItems:"center",
    padding:10,
    width:350
=======
    padding: 10,
          backgroundColor: "#FFAC1C",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          height:50,
          width:350,
          marginTop:20
>>>>>>> origin/main
  },
  buyNowText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
<<<<<<< HEAD
  AddToCart: {
    backgroundColor: "#FFC72C",
    height:50,
    alignItems:"center",
    borderRadius: 20,
    padding:10,
    width:350
=======
  AddToCart:{
    padding: 10,
    backgroundColor: "#FFC72C",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height:50,
    width:350,
   
>>>>>>> origin/main
  },
  AddToCartText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductInfoScreen2;
