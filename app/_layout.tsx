import '../global.css';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthProvider from '~/providers/AuthProvider';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <AuthProvider>
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
            }}>
            <Stack.Screen name="(auth)" />
          </Stack>
        </AuthProvider>
      </View>
    </GestureHandlerRootView>
  );
}
