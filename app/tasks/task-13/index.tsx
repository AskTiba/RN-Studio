import { View, Text } from 'react-native';
import React from 'react';
import MarkdownDisplay from '~/components/MarkdownDisplay';
import Button from '~/components/Button';
import { router, Stack } from 'expo-router';

const description = `
# Authentication
AWS Amplify V6 Authentication`;

export default function Index() {
  return (
    <View className="flex-1 px-4">
      <Stack.Screen options={{ headerShown: true, title: 'Auth Screen' }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Button
        title="Authentication"
        className='mb-10 '
        onPress={() => router.push('/tasks/task-13/protectedScreen')}
      />
    </View>
  );
}
