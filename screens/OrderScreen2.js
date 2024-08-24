import { StyleSheet, Text,ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const OrderScreen2 = () => {
    const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
          try {
            const response = await axios.get(
              `http://172.20.10.7:8081/orders/${userId}`
            );
            const orders = response.data.orders;
            setOrders(orders);
    
            setLoading(false);
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchOrders();
      }, []);
      console.log("orders", orders);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {loading ? (
          <Text>Loading...</Text>
        ) : orders.length > 0 ? (
          orders.map((order) => (
            <Pressable
              style={{
                marginTop: 20,
                padding: 15,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#d0d0d0",
                marginHorizontal: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              key={order._id}
            >
              {/* Render the order information here */}
              {order.products.slice(0, 1)?.map((product) => (
                <View style={{ marginVertical: 10 }} key={product._id}>
                  <Image
                    source={{ uri: product.image }}
                    style={{ width: 100, height: 100, resizeMode: "contain" }}
                  />
                </View>
              ))}
            </Pressable>
          ))
        ) : (
          <Text>No orders found</Text>
        )}
      </ScrollView>
  )
}

export default OrderScreen2

const styles = StyleSheet.create({})