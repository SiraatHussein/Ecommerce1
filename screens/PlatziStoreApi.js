import React, { useState, useEffect } from 'react';
import { View,Pressable,Text,TextInput, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import ProductCard from '../components/ProductCard';
import productData from '../data/products.json';
import { AntDesign } from "@expo/vector-icons";









const PlatziStoreApi = ({ navigation }) => {
   const [userInput, setUserInput] = useState("")
  //  const [isLoading, setIsLoading] =useState(false)
  //  const [data, setData] =useState([])
  //  const [error, setError] =useState(null)
  //  const [fullData, setfullData] =useState([])

  //  useEffect(()=>{

  //   setIsLoading(true);
  //   fetchData(API);

  //  },[])
   


  //  const fetchData = async(url)=>{
  //   try{
  //     const response =  await fetch(url);
  //     const json = response.json();
  //     setData(json.results);

  //     console.log(json.results);

  //   setIsLoading(false)
  //   }catch(error){
  //     setError(error);
  //   }
  //     console.log(error)
  //     setIsLoading(false)
  //  }



  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  
  const handleProductPress = (product) => {
    navigation.navigate('Info2', { product });
  };
  const filterData=(item) =>{

    if (userInput === ""){
      return(
        <ProductCard product={item} onPress={handleProductPress} />
      )
    }

    if(item.title.includes(userInput)){
      return(
        <ProductCard product={item} onPress={handleProductPress} />
      )
    
    }


  };

  return (
    <View>
       <View
            style={{
              backgroundColor: "#262624",
              padding: 10,
              marginTop:40,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
             <AntDesign
                style={{  marginRight: 5 }}
                onPress={() => navigation.navigate("Camera")}
                name="camera"
                size={24}
                color="white"
              /> 

            
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
               
                width:300,
               
                backgroundColor: "white",
                borderRadius: 3,
                height: 38,
                marginLeft:8
              }}
            >
              <AntDesign
                style={{ paddingLeft: 10 }}
                name="search1"
                size={22}
                color="black"
              />
              <TextInput 
              placeholder="Search "
              onChangeText={(text)=> setUserInput(text)}
              style={{marginLeft:10}} />

              
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Cart")}>
              <AntDesign
                name="shoppingcart"
                size={24}
                color="white"
                style={{ marginLeft: 10 }}         
              />
            </Pressable>
          </View>
      
    <View style={styles.container}>
     
     
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => filterData (item)}
        
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20, 
    paddingVertical: 10,
  },
});

export default PlatziStoreApi;