import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import MovieListItem from '~/components/MovieListItem';
import Watchlist from '~/assets/svgs/watchlist';
import { fetchWatchlistMovies } from '~/api/watchlist';

export default function Index() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['watchlist'],
    queryFn: fetchWatchlistMovies,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View className="flex-1">
      <Text className="my-3 text-center text-xl font-semibold">Watchlist</Text>
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
