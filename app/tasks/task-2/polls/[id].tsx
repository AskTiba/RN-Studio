import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import Checkbox from '~/components/Checkbox';

const poll = {
  question: 'Arsenal vs Manchester United',
  options: ['UCL Titles', 'Premier League Titles', 'FA Titles'],
};

export default function PollDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const [checkedOptions, setCheckedOptions] = useState<{ [key: string]: boolean }>({});

  const handleCheckboxChange = (option: string) => {
    setCheckedOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return (
    <View className={styles.container}>
      <Stack.Screen options={{ title: 'Polls' }} />
      <Text className="p-1">{poll.question}</Text>
      <View className="justify-center gap-2">
        {poll.options.map((option) => (
          <Pressable
            className="flex flex-row gap-3"
            key={option}
            onPress={() => handleCheckboxChange(option)}>
            <Checkbox
              checked={!!checkedOptions[option]}
              onValueChange={() => handleCheckboxChange(option)}
            />
            <Text className="">{option}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = {
  container: `p-3`,
};
