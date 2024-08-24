// utils.js
import { Platform } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

export const checkAndRequestCameraPermissions = async () => {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Photo Library Access',
          message: 'App needs access to your photo library',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } else {
      // For iOS, use the react-native-cameraroll library to check and request permissions
      const { status } = await CameraRoll.requestPermissions();
      return status === 'granted';
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};