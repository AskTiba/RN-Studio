import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchTopratedMovies } from '~/api/movies';
import { FlatList } from 'react-native-gesture-handler';

export default function Index() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);

      try {
        const movies = await fetchTopratedMovies();
        // console.log(JSON.stringify(movies, null, 2));
        setMovies(movies);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    };
    fetchMovies();
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  const renderItem = ({ index, item }) => (
    <View key={index} className="">
      <Text>
        {index + 1}
        {item.title}
      </Text>
    </View>
  );

  return (
    <View>
      <Text className="text-lg font-semibold">Top rated movies of all time</Text>
      <FlatList data={movies} renderItem={renderItem} />
    </View>
  );
}
