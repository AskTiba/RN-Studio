import { View, Text, TextInput, FlatList } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import Filter from '~/assets/svgs/filter';
import PlaceCard from '~/components/PlaceCard';
import placesData from '~/data/places.json';

interface Place {
  id: number;
  title: string;
  location: {
    city: string;
    country: string;
  };
  images: string[];
  price_per_month: number;
  currency: string;
}

export default function index() {
  const renderItem = ({ item }: { item: Place }) => <PlaceCard place={item} />;
  return (
    <View className="flex-1 p-4">
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-row items-center gap-3">
        <TextInput
          className="flex-1 rounded-lg border border-[#543310] p-2"
          placeholder="Enter your answer"
        />
        <View className="rounded-full border border-[#543310] p-2">
          <Filter color={'#543310'} />
        </View>
      </View>
      <View className="flex-1 items-center pt-3">
        <FlatList
          data={placesData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: 'center' }}
          className="w-full"
        />
      </View>
    </View>
  );
}
