import { View, Text } from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';
import Button from '~/components/Button';

export default function Technology() {
  // Handlers for different toasts
  const showSuccessToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Success!',
      text2: 'Your operation was successful 🎉',
    });
  };

  const showErrorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Error!',
      text2: 'Something went wrong. Please try again 😞',
    });
  };

  const showInfoToast = () => {
    Toast.show({
      type: 'info',
      text1: 'Info',
      text2: 'This is an informational message 📢',
    });
  };

  return (
    <View>
      {/* Buttons to trigger different toasts */}
      <View className="m-4 mt-32 gap-3">
        <Button title="Show Success Toast" onPress={showSuccessToast} />
        <Button title="Show Error Toast" onPress={showErrorToast} />
        <Button title="Show Info Toast" onPress={showInfoToast} />
      </View>

      {/* Toast Container */}
      <Toast position={'top'} topOffset={580} />
    </View>
  );
}
