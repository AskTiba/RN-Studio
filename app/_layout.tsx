import '../global.css';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: '#F8F4E1' },
            contentStyle: { backgroundColor: '#F8F4E1' },
            statusBarColor: '#F8F4E1',
            statusBarStyle: 'dark',
            // presentation: 'transparentModal',
            headerShown: false,
          }}>
          <Stack.Screen name="tasks/task-2" />
        </Stack>
      </View>
    </GestureHandlerRootView>
  );
}
