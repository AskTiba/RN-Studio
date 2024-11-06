import { View, Text, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import Button from '~/components/Button';
import { CustomInput } from '~/components/TextInput';
import Cancel from '~/assets/svgs/cancel';
import AppleLogo from '~/assets/svgs/apple-logo';

export default function CreatePoll() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['']);

  const createPoll = () => {};
  return (
    <View className="flex-1 px-4">
      <Stack.Screen options={{ title: 'Create poll' }} />
      <Text className={styles.textTitle}>Title</Text>
      <CustomInput
        className={styles.input}
        onChangeText={setQuestion}
        placeholder="Type your question here"
        value={question}
      />
      <Text className={styles.textTitle}>Options</Text>
      <ScrollView className="gap-3" style={{ flexGrow: 1 }}>
        {options.map((option, index) => (
          <CustomInput
            className={styles.input}
            key={index}
            onChangeText={(text) => {
              setOptions(options.map((opt, i) => (i === index ? text : opt)));
            }}
            placeholder={`Option ${index + 1}`}
            value={option}
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
  textTitle: `options-[18px] options-[#543310] mt-4 font-600`,
  input: `bg-white p-2 rounded-lg mt-2`,
};
