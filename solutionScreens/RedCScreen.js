import React, { useState, useEffect } from "react";
import {
  View,
  Pressable,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";
import ProductCard from "../components/ProductCard";
import productData from "../data/products.json";

const RedCScreen = ({ navigation }) => {
  const [userInput, setUserInput] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  const handleProductPress = (product) => {
    navigation.navigate("Info2", { product });
  };

  const filterData = (item) => {
    const allowedProductIds = [27,28,29];

    if (userInput === "" && allowedProductIds.includes(item.id)) {
      return <ProductCard product={item} onPress={handleProductPress} />;
    }

    if (allowedProductIds.includes(item.id) && item.title.includes(userInput)) {
      return <ProductCard product={item} onPress={handleProductPress} />;
    }
  };

  return (
    <View>
      <View
        style={{
          backgroundColor: "#f2f2f2",
          borderTopColor: "#e6e6e6",
          borderBottomWidth: 2,
          borderTopWidth: 3,
          borderBottomColor: "#e6e6e6",
          height: 60,
          marginTop: 40,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10 }}>
          Available Products
        </Text>
      </View>

      <View style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => filterData(item)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default RedCScreen;
