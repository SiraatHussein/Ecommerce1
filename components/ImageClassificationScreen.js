import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ImageClassificationScreen = ({ imageUri, classificationResult }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Text style={styles.result}>
        Classified as: {classificationResult.label} (Confidence: {classificationResult.confidence})
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // Style definitions
});

export default ImageClassificationScreen;

