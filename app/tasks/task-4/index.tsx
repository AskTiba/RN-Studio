import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Button from '~/components/Button';
import { router } from 'expo-router';
import Checkbox from '~/components/Checkbox';
import Toggle from '~/components/Toggle';
import { useToggleContext } from '~/providers/ToggleContext';

export default function Index() {
  return (
    <View className="flex-1 justify-between">
      <View className="gap-y-4 p-4">
        {/* Simple Checkbox */}
        <Checkbox id={'default'} />

        {/* Customized Checkbox */}
        <Checkbox
          size={32}
          borderColor="blue"
          backgroundColor="yellow"
          checkmarkColor="green"
          id={'large'}
        />
        <Toggle id="1" />
        <Toggle id="2" />
        <Toggle id="3" />
      </View>
      <Button
        className="m-3"
        onPress={() => router.push('/tasks/task-4/notifications')}
        title="Go to notifications"
      />
    </View>
  );
}
