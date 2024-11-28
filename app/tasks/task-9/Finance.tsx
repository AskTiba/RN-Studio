import { ScrollView, View, Text } from 'react-native';
import React from 'react';

const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`); // Example array

export default function Finance() {
  return (
    <View>
      <ScrollView>
        {items.map((item, index) => (
          <View key={index} className="m-4 rounded-lg bg-avocado py-4">
            <Text className="text-center text-base text-[#F8F4E1]">{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
