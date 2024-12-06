import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';

export default function MovieListItem({ movie }) {
  return (
    <Link href={`/${movie.id}`} asChild>
      <TouchableOpacity className="flex-1 p-2">
        <Image
          className="aspect-[3/5] w-full rounded-2xl"
          source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        />
        <Text className="mt-2">{movie.title}</Text>
      </TouchableOpacity>
    </Link>
  );
}
