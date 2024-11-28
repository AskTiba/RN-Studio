import React from 'react';
import { FlatList, View, Text } from 'react-native';

const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`); // Example array

export default function Health() {
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View className="mb-3 rounded-lg bg-[#538d22] p-4">
            <Text className="text-center text-base text-[#F8F4E1]">{item}</Text>
          </View>
        )}
        // contentContainerStyle={}
        className="p-4"
      />
    </View>
  );
}
