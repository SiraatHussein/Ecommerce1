import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartReducer";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";


const ProductInfoScreen2 = ({ route }) => {
  const { addToCart } = useContext(CartContext);
  
    const handleAddToCart = () => {
      const { product } = route.params;
      addToCart(product);
    };
  
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
    padding: 10,
          backgroundColor: "#FFAC1C",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          height:50,
          width:350,
          marginTop:20
  },
  buyNowText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  AddToCart:{
    padding: 10,
    backgroundColor: "#FFC72C",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height:50,
    width:350,
   
  },
  AddToCartText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductInfoScreen2;
