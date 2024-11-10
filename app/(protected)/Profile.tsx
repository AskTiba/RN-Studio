import { View, Text } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { useAuth } from '~/providers/AuthProvider';
import Button from '~/components/Button';
import { supabase } from '~/lib/supabase';

export default function ProfileScreen() {
  const { session, user } = useAuth();
  return (
    <View className=''>
      <Stack.Screen options={{ title: 'Profile', headerTitleAlign: 'center', headerShown: true }} />
      <View className="p-4">
        <Text className='mb-2'>User id: {user?.id}</Text>
        <Button
          className=""
          variant="outline"
          title="Sign out"
          onPress={() => supabase.auth.signOut()}
        />
      </View>
    </View>
  );
}
