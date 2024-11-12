import { View, Text } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { useAuth } from '~/providers/AuthProvider';
import Button from '~/components/Button';
import { supabase } from '~/lib/supabase';
import { useState } from 'react';
import dayjs from 'dayjs'; // Import dayjs for formatting dates

import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function ProfileScreen() {
  const [search, setSearch] = useState('');
  const { session, user } = useAuth();

  return (
    <View className="">
      <Stack.Screen
        options={{
          title: 'Profile',
          headerTitleAlign: 'center',
          headerShown: true,
          headerSearchBarOptions: {
            placeholder: 'Search',
            onChangeText: (e: any) => setSearch(e.nativeEvent.text),
            onSearchButtonPress(e) {
              console.log('Daddy is here');
            },
          },
        }}
      />
      <View className="p-4">
        <Text className="mb-2">User email : {user?.email}</Text>
        <Text className="mb-2">User id : {user?.id}</Text>
        <Text className="mb-2">
          Last sign in at :{' '}
          {user?.last_sign_in_at
            ? dayjs(user.last_sign_in_at).format('MMMM D, YYYY h:mm A')
            : 'N/A'}
        </Text>
        <Text className="mb-2">
          Last sign in: {user?.last_sign_in_at ? dayjs(user.last_sign_in_at).fromNow() : 'N/A'}
        </Text>

        <Text className="mb-2">User role: {user?.role}</Text>
        <Button
          className="border-none"
          variant="outline"
          title="Sign out"
          onPress={() => supabase.auth.signOut()}
        />
      </View>
    </View>
  );
}
