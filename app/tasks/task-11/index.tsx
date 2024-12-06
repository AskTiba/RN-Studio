import { View, Text, ActivityIndicator } from 'react-native';
import { fetchTopratedMovies } from '~/api/movies';
import { FlatList } from 'react-native-gesture-handler';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import MovieListItem from '~/components/MovieListItem';

export default function Index() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['movies'],
    queryFn: fetchTopratedMovies,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View className="flex-1">
      <Text className="mt-3 text-center text-xl font-semibold">Top rated movies of all time</Text>
      <FlatList
        // key={}
        data={data}
        renderItem={({ index, item }) => <MovieListItem movie={item} />}
        numColumns={2}
        contentContainerStyle={{ padding: 5 }}
        columnWrapperStyle={{ padding: 5 }}
      />
    </View>
  );
}
