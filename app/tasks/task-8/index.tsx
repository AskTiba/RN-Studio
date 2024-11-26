import { Stack } from 'expo-router';
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Modal,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AddTodo from '~/components/AddTodo';
import TodoItem from '~/components/TodoItem';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function TodoIndex() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [editText, setEditText] = useState('');

  // Add new todo
  const handleAdd = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle todo completion
  const handleToggle = (id: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  // Delete todo
  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Start editing todo
  const handleEdit = (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      setEditingTodo(todo);
      setEditText(todo.text);
    }
  };

  // Save edited todo
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
            onToggle={handleToggle}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        )}
        className="flex-1 px-5"
      />

      {/* Edit Modal */}
      <Modal visible={!!editingTodo} transparent animationType="slide">
        <View className="w-4/5 rounded-lg bg-white p-5">
          <View className="w-4/5 rounded-lg bg-white p-5">
            <Text className="mb-4 text-lg font-bold">Edit Todo</Text>
            <TextInput
              className="mb-4 rounded-md border  p-3 text-base"
              value={editText}
              onChangeText={setEditText}
              autoFocus
            />
            <View className="flex-row justify-end">
              <TouchableOpacity
                className="ml-3 rounded-md bg-['#FF3B30'] p-3"
                onPress={() => setEditingTodo(null)}>
                <Text className="text-white">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="ml-3 rounded-md bg-['#FF3B30'] p-3"
                style={[styles.saveButton]}
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
