// TodoIndex.tsx
import React, { useState } from 'react';
import { View, FlatList, Modal, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Stack } from 'expo-router';
import AddTodo from '~/components/AddTodo';
import TodoItem from '~/components/TodoItem';
import { useCheckbox } from '~/providers/CheckboxContext';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function TodoIndex() {
  const { state, toggleCheckbox } = useCheckbox(); // Get context state and toggle function
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', text: 'Do laundry', completed: false },
    { id: '2', text: 'Buy groceries', completed: false },
    // Add more todos here
  ]);

  // Toggle function to update both Todo list and context state
  const onToggle = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
    // Update context state for the specific checkbox
    toggleCheckbox(id, !(state[id] || false)); // Default to false if state[id] is undefined
  };

  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [editText, setEditText] = useState('');

  const handleAdd = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      setEditingTodo(todo);
      setEditText(todo.text);
    }
  };

  const handleSaveEdit = () => {
    if (editingTodo && editText.trim()) {
      setTodos(
        todos.map((todo) =>
          todo.id === editingTodo.id ? { ...todo, text: editText.trim() } : todo
        )
      );
      setEditingTodo(null);
      setEditText('');
    }
  };

  return (
    <View className="flex-1">
      <Stack.Screen options={{ title: 'Todo App', headerShown: true }} />
      <View className="mt-3">
        <AddTodo onAdd={handleAdd} />
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onToggle={onToggle}
            onDelete={handleDelete}
            onEdit={handleEdit}
            isChecked={state[item.id] || item.completed} // Ensure the `isChecked` prop is correctly passed
          />
        )}
        className="flex-1 px-5"
      />

      {/* Edit Modal */}
      <Modal visible={!!editingTodo} transparent animationType="slide">
        <View className="flex-1 justify-end bg-transparent bg-opacity-100">
          <View className="w-full rounded-lg bg-white p-4">
            <Text className="mb-4 text-lg font-bold">Edit Todo</Text>
            <TextInput
              className="mb-4 rounded-md border p-3 text-base"
              value={editText}
              onChangeText={setEditText}
              autoFocus
            />
            <View className="flex-row justify-end">
              <TouchableOpacity
                className="ml-3 rounded-md bg-red-500 p-3"
                onPress={() => setEditingTodo(null)}>
                <Text className="text-white">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="ml-3 rounded-md bg-blue-500 p-3"
                onPress={handleSaveEdit}>
                <Text className="text-white">Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: '#007AFF',
  },
});
