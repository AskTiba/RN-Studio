import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { fetchTopRatedMovies } from '~/api/movies';
import { FlatList } from 'react-native-gesture-handler';
import { useInfiniteQuery } from '@tanstack/react-query';
import MovieListItem from '~/components/MovieListItem';
import Watchlist from '~/assets/svgs/watchlist';
import { router } from 'expo-router';

export default function Index() {
  const { data, isLoading, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: fetchTopRatedMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  const movies = data?.pages.flat();

  return (
    <View className="flex-1">
      <View className="mx-5 flex-row items-center justify-between">
        <Text className="my-3 text-center text-xl font-semibold">Top rated movies of all time</Text>
        <TouchableOpacity onPress={() => router.push('/tasks/task-11/watchlist')} className="">
          <Watchlist />
        </TouchableOpacity>
      </View>
      <FlatList
        // key={}
        data={movies}
        renderItem={({ index, item }) => <MovieListItem movie={item} />}
        numColumns={2}
        contentContainerStyle={{ padding: 5 }}
        columnWrapperStyle={{ padding: 5 }}
        onEndReached={() => {
          // console.warn('End reached');
          fetchNextPage();
        }}
      />
    </View>
  );
}
