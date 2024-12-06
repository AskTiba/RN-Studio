import { View, Text, ActivityIndicator, Image } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { fetchMovie } from '~/api/movies';

export default function MovieDetails() {
  const { id } = useLocalSearchParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => fetchMovie(id),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View>
      <Stack.Screen
        options={{ headerShown: true, title: data.title, headerTitleAlign: 'center' }}
      />
      <Image
        className="h-[300px] w-full rounded-xl"
        source={{ uri: `https://image.tmdb.org/t/p/w500${data.backdrop_path}` }}
      />
      <View className="p-3">
        <Text className="text-center text-2xl font-semibold">{data.title}</Text>
        <Text className="text-base font-semibold">{data.overview}</Text>
      </View>
    </View>
  );
}
