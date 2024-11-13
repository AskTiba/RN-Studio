import { View, Text, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import Button from '~/components/Button';
import Cancel from '~/assets/svgs/cancel';
import CustomInput from '~/components/TextInput';

export default function CreatePoll() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['']);

  const handleClear = (index: number) => {
    // Remove the option at the specified index
    const updatedOptions = options.filter((_, i) => i !== index);
    setOptions(updatedOptions);
  };

  const createPoll = () => {
    // Logic for creating poll
  };

  return (
    <View className="flex-1 px-4">
      <Stack.Screen
        options={{ title: 'Create poll', headerShown: true, headerTitleAlign: 'center' }}
      />
      <Text className={styles.textTitle}>Title</Text>
      <CustomInput
        placeholder="Type your question here"
        borderColor="border-gray-300"
        focusedBorderColor="border-[#543310]"
        onChangeText={setQuestion}
        value={question}
      />

      <Text className={styles.textTitle}>Options</Text>
      <ScrollView style={{ flexGrow: 1 }}>
        {options.map((option, index) => (
          <CustomInput
            key={index}
            placeholder={`Option ${index + 1}`}
            endIcon={Cancel}
            borderColor="border-gray-300"
            focusedBorderColor="border-[#543310]"
            onClear={handleClear}
            onChangeText={(text) => {
              setOptions(options.map((opt, i) => (i === index ? text : opt)));
            }}
            value={option}
            index={index} // Pass the index to the input
          />
        ))}
      </ScrollView>

      <View className="my-4 gap-3">
        <Button title="Add option" onPress={() => setOptions([...options, ''])} />
        <Button title="Create poll" onPress={createPoll} />
      </View>
    </View>
  );
}

const styles = {
  textTitle: `options-[18px] options-[#543310] mt-2 font-600`,
  input: `bg-white py-2 rounded-lg mt-2`,
};
