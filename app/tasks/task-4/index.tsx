import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Button from '~/components/Button';
import { router, Stack } from 'expo-router';
import Checkbox from '~/components/Checkbox';
import Toggle from '~/components/Toggle';
import CustomListItem from '~/components/CustomListItem';
import RadioButton from '~/components/RadioButton';

export default function Index() {
  const [defaultChecked, setDefaultChecked] = useState(false);
  const [largeChecked, setLargeChecked] = useState(false);
  const [selected, setSelected] = useState('option3');
  return (
    <View className="flex-1 justify-between">
      <Stack.Screen options={{ headerShown: true, title: 'Notifications' }} />
      <View className="">
        <View className="gap-y-4 p-4">
          <CustomListItem title={'Show notifications'} RightIcon={<Toggle id="a" />} />
          <CustomListItem title={'App icon badges'} RightIcon={<Toggle id="o" />} />
          <CustomListItem
            title={'Map zoom controls'}
            subtitle="Zoom in and out with dedicated buttons"
            RightIcon={<Toggle id="1" />}
          />
          <CustomListItem
            title={'Map pan controls'}
            subtitle="Pan around the map with directional buttons"
            RightIcon={<Toggle id="2" />}
          />
        </View>
        <View className="gap-y-4 p-4">
          {/* Simple Checkbox */}
          <Checkbox className="mr-3" id="default" />

          {/* Customized Checkbox */}
          <Checkbox
            size={32}
            borderColor="blue"
            backgroundColor="yellow"
            checkmarkColor="green"
            id="large"
          />
        </View>
        <View className="m-4 gap-y-5 rounded-xl bg-[#32cd32] p-4">
          <RadioButton
            checked={selected === 'option1'}
            onPress={() => setSelected('option1')}
            label="Active"
            borderColor="#ddd"
            // checkedColor="#007AFF"
            labelPosition="right"
          />
          <RadioButton
            checked={selected === 'option2'}
            onPress={() => setSelected('option2')}
            label="On a break"
            borderColor="#ddd"
            // checkedColor="#007AFF"
            labelPosition="right"
          />
          <RadioButton
            checked={selected === 'option3'}
            onPress={() => setSelected('option3')}
            label="Sick"
            borderColor="#ddd"
            // checkedColor="#007AFF"
            labelPosition="right"
          />
          <RadioButton
            checked={selected === 'option4'}
            onPress={() => setSelected('option4')}
            label="Injured"
            borderColor="#ddd"
            // checkedColor="#007AFF"
            labelPosition="right"
          />
        </View>
      </View>
      <Button
        className="m-3"
        onPress={() => router.push('/tasks/task-4/notifications')}
        title="Go to notifications"
      />
    </View>
  );
}
