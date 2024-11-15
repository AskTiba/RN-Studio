import { View, Text } from 'react-native';
import React from 'react';
import * as Notifications from 'expo-notifications';
import Button from '~/components/Button';

export default function NotificationScreen() {
  return (
    <View className="flex-1 justify-between">
      <Text>NotificationScreen</Text>
      <Button
        title="Schedule test notifications"
        onPress={schedulePushNotification}

        className="m-3 mb-40"
      />
    </View>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'We are going till our forever lasts',
      data: { data: 'goes here', url: '/tasks/task-2' },
    },
    trigger: { seconds: 1 },
      
    },
  )};

