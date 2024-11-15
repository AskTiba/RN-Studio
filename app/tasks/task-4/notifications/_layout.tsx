import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import * as Notifications from 'expo-notifications';
import { router, Slot } from 'expo-router';
import { Platform } from 'react-native';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import Cancel from '~/assets/svgs/cancel';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function NotificationLayout() {
  const [expoPushToken, setExpoPushToken] = useState<string>();
  const [notification, setNotification] = useState<Notifications.Notification | undefined>(
    undefined
  );

  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    let isMounted = true;

    // fetch expo push token
    registerForPushNotificationsAsync().then((token) => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      // console.log(response);
      // console.log('addNotificationResponseReceivedListener');
      redirect(response.notification);
    });

    Notifications.getLastNotificationResponseAsync().then((response) => {
      if (!isMounted || !response?.notification) {
        return;
      }
      redirect(response?.notification);
    });

    return () => {
      if (notificationListener.current) {
        notificationListener.current &&
          Notifications.removeNotificationSubscription(notificationListener.current);
      }
      if (responseListener.current) {
        responseListener.current &&
          Notifications.removeNotificationSubscription(responseListener.current);
      }
      isMounted = false;
    };
  }, []);

  function redirect(notification: Notifications.Notification) {
    const url = notification.request.content.data?.url;
    if (url) {
      router.push(url);
    }
  }

  // console.log(`Token : ${expoPushToken}`);
  // console.log(`${notification}`);

  return (
    <>
      <Slot />
      {notification && (
        <View className="absolute bottom-7 left-3 right-3 rounded-xl bg-[#c0c781] p-2">
          <View className="">
            <Text className="text-[17px] font-bold">
              Title: {notification && notification.request.content.title}{' '}
            </Text>
            <Text className="">Body: {notification && notification.request.content.body}</Text>
            <Text className="">
              Data: {notification && JSON.stringify(notification.request.content.data)}
            </Text>
            <TouchableOpacity
              onPress={() => setNotification(undefined)}
              className="absolute right-0 top-0">
              <Cancel width={20} height={20} color={'#543310'} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );

  async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      // Learn more about projectId:
      // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
      // EAS projectId is used here.
      try {
        const projectId =
          Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
        if (!projectId) {
          throw new Error('Project ID not found');
        }
        token = (
          await Notifications.getExpoPushTokenAsync({
            projectId,
          })
        ).data;
        console.log(token);
      } catch (e) {
        token = `${e}`;
      }
    } else {
      alert('Must use physical device for Push Notifications');
    }

    return token;
  }
}
