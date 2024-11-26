import React from 'react';
import { Redirect, Slot, Stack } from 'expo-router';
import { useAuth } from '~/providers/AuthProvider';

export default function ProtectedLayout() {
  const { session, user } = useAuth();

  if (!user) {
    return <Redirect href={'/(auth)/Login'} />;
  }
  // console.log(session);
  // console.log(JSON.stringify(session, null, 2));
  console.dir(session, { depth: null });
  // console.log(JSON.stringify(user, null, 2));
  // console.dir(user, { depth: null });

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#F8F4E1' },
        contentStyle: { backgroundColor: '#F8F4E1' },
        statusBarColor: '#F8F4E1',
        statusBarStyle: 'dark',
        presentation: 'transparentModal',
        headerShown: false,
        // headerTitleStyle: {
        //   fontSize: 17,
        //   fontWeight: 600,
        // },
      }}
    />
  );
}
