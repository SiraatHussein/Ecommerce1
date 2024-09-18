// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function ResultsScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>This is the Results Screen</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// Mock data for similar products
const mockSimilarProducts = [
    {
      id: '1',
      name: 'Product 1',
      image: 'https://example.com/product1.jpg',
      price: '$20',
    },
    {
      id: '2',
      name: 'Product 2',
      image: 'https://example.com/product2.jpg',
      price: '$25',
    },
    // Add more mock products as needed
  ];


// Example ResultScreen component using mock data
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const ResultScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.resultsText}>Results</Text>
      <FlatList
        data={mockSimilarProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  resultsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 16,
  },
  productContainer: {
    marginBottom: 16,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'gray',
  },
});

export default ResultScreen;