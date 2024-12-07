import { View, Text, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchMovie } from '~/api/movies';
import Bookmark from '~/assets/svgs/bookmark';
import { addMovieToWatchlist } from '~/api/watchlist';
import Watchlist from '~/assets/svgs/watchlist';

export default function MovieDetails() {
  const { id } = useLocalSearchParams();

  const client = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => fetchMovie(id),
  });

  const { mutate } = useMutation({
    mutationFn: () => addMovieToWatchlist(id),
    onSuccess: () => {
      client.invalidateQueries(['watchlist']);
    },
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
        options={{
          headerShown: true,
          title: 'Movie details',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '700',
          },
          headerRight: () => <Watchlist />,
        }}
      />
      <Image
        className="h-[300px] w-full rounded-xl"
        source={{ uri: `https://image.tmdb.org/t/p/w500${data.backdrop_path}` }}
      />
      <View className="p-3">
        <Text className="text-center text-2xl font-semibold">{data.title}</Text>
        <TouchableOpacity onPress={() => mutate} className="flex flex-row items-center gap-2">
          <Bookmark color={'#543310'} />
          <Text>Add to watchlist</Text>
        </TouchableOpacity>
        <Text className="text-base font-semibold">{data.overview}</Text>
      </View>
    </View>
  );
}
