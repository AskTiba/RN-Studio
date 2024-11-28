import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Checkbox from './Checkbox';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  isChecked: boolean;  // Add this property to the interface
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  
  return (
    <View className="elevation mb-3 flex-row items-center rounded-lg bg-white p-4 shadow-black">
      <Checkbox
        className="mr-3"
        id={todo.id}
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <Text className="flex-1 text-base" style={[todo.completed && styles.completedText]}>
        {todo.text}
      </Text>
      <View className="flex-row">
        <TouchableOpacity className="ml-3 rounded-lg bg-coffee p-2" onPress={() => onEdit(todo.id)}>
          <Text className="text-white">Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="ml-3 rounded-lg bg-coffee p-2"
          style={[styles.deleteButton]}
          onPress={() => onDelete(todo.id)}>
          <Text className="text-white">Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
  },
});
