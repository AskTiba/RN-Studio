import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export default function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <View className="mb-5 flex-row px-4">
      <TextInput
        className="mr-3 h-10 flex-1 rounded-lg bg-white px-4 text-base"
        value={text}
        onChangeText={setText}
        placeholder="Add new todo..."
        placeholderTextColor="#666"
      />
      <TouchableOpacity className="justify-center rounded-lg bg-coffee px-5 " onPress={handleAdd}>
        <Text className="text-white">Add</Text>
      </TouchableOpacity>
    </View>
  );
}
