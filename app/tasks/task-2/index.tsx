import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, Href, router } from 'expo-router';

// Define interfaces for better type safety
interface Poll {
  id: number;
}

// Sample data
const polls: Poll[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

export default function Index() {
  const renderPoll = ({ item }: { item: Poll }) => (
    <TouchableOpacity
      onPress={() => router.push(`/tasks/task-2/polls/{item.id}`)}
      className="rounded-xl bg-white p-3">
      <Text className="text-base">{item.id}: Example poll question</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1">
      <FlatList
        data={polls}
        renderItem={renderPoll}
        contentContainerStyle={{ rowGap: 10 }}
        className="p-2"
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
