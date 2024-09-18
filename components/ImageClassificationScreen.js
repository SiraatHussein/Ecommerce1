import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { ActivityIndicator, Modal, Button, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Camera, CameraType, CameraPermissionStatus, requestCameraPermissionsAsync } from "expo-camera";
import { useEffect } from "react";
import * as FileSystem from 'expo-file-system';
import { MaterialIcons } from '@expo/vector-icons';
import {
  getModel,
  convertBase64ToTensor,
  startPrediction,
} from '../src/helpers/tensor-helper'
import { cropPicture } from '../src/helpers/image-helper'


export default function App() {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraRef, setCameraRef] = useState(null);
  // for image classification
  const [isProcessing, setIsProcessing] = useState(false);
  const [presentedShape, setPresentedShape] = useState('');

  const handleImageCapture = async () => {
    setIsProcessing(true);
    const imageData = await cameraRef.current.takePictureAsync({
      base64: true,
    });
    processImagePrediction(imageData.base64);
  };

  const processImagePrediction = async (base64Image) => {
    const croppedData = await cropPicture(base64Image, 300);
    const model = await getModel();
    const tensor = await convertBase64ToTensor(croppedData.base64);

    const prediction = await startPrediction(model, tensor);

    const highestPrediction = prediction.indexOf(
      Math.max.apply(null, prediction),
    );
    setPresentedShape(RESULT_MAPPING[highestPrediction]);
  }

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View style={styles.container}>
      <Modal visible={isProcessing} transparent={true} animationType="Slide">
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text>Available products are{presentedShape}</Text>
            {presentedShape === '' && <ActivityIndicator size="large" />}
            <Pressable style={styles.dismissButton}
              onPress={() => {
                setPresentedShape('');
                setIsProcessing(false);
              }}
            >
              <Text>Dismiss</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <CameraView style={styles.camera} facing={facing} autoFocus={true} ref={(ref) => setCameraRef(ref)}>
        <View style={{ backgroundColor: "black", height: 120 }}>
          <Text style={{ color: "white", marginTop: 60, fontSize: 25, marginLeft: 170, fontFamily: "times" }}>Camera</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button1} onPress={() => handleImageCapture()}>
            <View style={{ height: 80, width: 80, borderRadius: 40, alignItems: "center", backgroundColor: "white" }}>
              <MaterialIcons name="photo-camera" size={50} style={{ marginTop: 15 }} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={toggleCameraFacing}>
            <View style={{ height: 60, width: 60, borderRadius: 30, alignItems: "center", backgroundColor: "grey" }}>
              <MaterialIcons style={{ marginTop: 13 }} name="flip-camera-android" size={30} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "black",
    paddingBottom: 50,
    marginTop: 550
  },
  button1: {
    flex: 1,
    alignSelf: "flex-end",
    marginLeft: 160,
    marginBottom: 40
  },
  button2: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
    marginLeft: 90,
    marginBottom: 50
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  modal: {
    flex: 1,
    width: '100%',
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 300,
    borderRadius: 24,
    backgroundColor: 'grey'
  },
  dismissButton: {
    width: 150,
    height: 50,
    marginTop: 60,
    borderRadius: 24,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"
  }
});
