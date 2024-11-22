import '../global.css';
import { View } from 'react-native';
import { SplashScreen, Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthProvider from '~/providers/AuthProvider';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Roboto: require('~/assets/fonts/Roboto-Regular.ttf'),
    RubikGlitchPro: require('~/assets/fonts/RubikGlitchPop-Regular.ttf'),
    Inter: require('~/assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
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
