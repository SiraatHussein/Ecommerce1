import React, { useState } from 'react';
import { Image, StyleSheet,Pressable, Text, View, Pres, Pressablesable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [image, setImage] = useState(null);
  const navigation = useNavigation();

  const pickImage = async (screen) => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.cancelled) {
      setImage(pickerResult.assets[0].uri);
      
      if (screen === 'A') {
        navigation.navigate('BlackC'); // Navigate to Cart screen for A and B
      } else if( screen === 'B') {
        navigation.navigate('GreyC'); // Navigate to Home screen for C and D
      } else if( screen === 'C') {
        navigation.navigate('RedC'); // Navigate to Home screen for C and D
      } else if( screen === 'D') {
        navigation.navigate('WhiteC'); // Navigate to Home screen for C and D
      }
    }
  };

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => pickImage('A')}>
          <Text style={styles.buttonText}></Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => pickImage('B')}>
          <Text style={styles.buttonText}></Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => pickImage('C')}>
          <Text style={styles.buttonText}></Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => pickImage('D')}>
          <Text style={styles.buttonText}></Text>
        </Pressable>
        
      </View>
      <View >
        <Text style={{fontWeight:"bold",fontSize:20}}>Upload Your Image</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 90,
  },
  button: {
    backgroundColor: '#FEBE10',
    height: 50,
    width: 50,
    borderRadius:2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 190,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
  },
});