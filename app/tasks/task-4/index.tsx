import { View, Text } from 'react-native';
import React from 'react';
import Button from '~/components/Button';
import { router } from 'expo-router';

export default function index() {
  return (
    <View className="flex-1 justify-between">
      <Text>index</Text>
      <Button
        className="m-3"
        onPress={() => router.push('/tasks/task-4/notifications')}
        title="Go to notifications"
      />
    </View>
  );
}
