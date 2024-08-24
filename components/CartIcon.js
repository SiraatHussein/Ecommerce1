import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartIcon = ({ cartCount }) => {
  return (
    <View style={styles.cartIcon}>
      <Ionicons name="cart-outline" size={24} color="white" />
      {cartCount > 0 && (
        <View style={styles.cartCount}>
          <Text style={styles.cartCountText}>{cartCount}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cartIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartCount: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 4,
  },
  cartCountText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default CartIcon;