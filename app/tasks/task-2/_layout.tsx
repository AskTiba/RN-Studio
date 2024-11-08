import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function Task2Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#F8F4E1' },
        contentStyle: { backgroundColor: '#F8F4E1' },
        statusBarColor: '#F8F4E1',
        statusBarStyle: 'dark',
        title:"Polls"
        // presentation: 'transparentModal',
        // headerShown: false,
      }}>
      {/* <Stack.Screen name="index" /> */}
      {/* <Stack.Screen name="polls" /> */}
    </Stack>
  );
}
