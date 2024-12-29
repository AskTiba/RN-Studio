import { View, Text } from 'react-native';
import React from 'react';

export default function ProtectedScreen() {
  return (
    <View className='p-4'>
      <Text className="text-2xl font-bold">Hello there</Text>
      <Text className="text-2xl text-gray-500">
        You shoould only see this screen once you're authnticated
      </Text>
    </View>
  );
}
