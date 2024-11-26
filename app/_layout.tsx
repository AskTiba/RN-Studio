import '../global.css';
import { View } from 'react-native';
import { SplashScreen, Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthProvider from '~/providers/AuthCoontext';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import AppProviders from '~/providers/AppProviders';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter: require('~/assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
    Roboto: require('~/assets/fonts/Roboto-Regular.ttf'),
    RubikGlitchPro: require('~/assets/fonts/RubikGlitchPop-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <AppProviders>
          <Stack
            screenOptions={{
              headerStyle: { backgroundColor: '#F8F4E1' },
              contentStyle: { backgroundColor: '#F8F4E1' },
              headerShown: false,
              statusBarColor: '#F8F4E1',
              statusBarStyle: 'dark',
              presentation: 'transparentModal',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: '800', // Ensure this is a string for compatibility
              },
            }}>
            <Stack.Screen name="(auth)" />
          </Stack>
        </AppProviders>
      </View>
    </GestureHandlerRootView>
  );
}
