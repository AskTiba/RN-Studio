import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { players } from '~/data/ChessPlayers';
import SearchComponent from '~/components/SearchComponent';

// Types
interface Player {
  id: number;
  name: string;
  classical?: number | null;
  rapid?: number | null;
  blitz?: number | null;
  gender: 'Male' | 'Female';
  dateOfBirth: string;
}

type RatingType = 'classical' | 'rapid' | 'blitz';
type FilterType = 'women' | 'juniors';
type SortOrder = 'asc' | 'desc';

// Filter Chip Component
const FilterChip: React.FC<{
  label: string;
  isSelected: boolean;
  onPress: () => void;
  count?: number;
}> = ({ label, isSelected, onPress, count }) => (
  <TouchableOpacity
    onPress={onPress}
    className={`mr-2 flex-row items-center rounded-lg px-3 py-2 ${
      isSelected ? 'bg-blue-600' : 'bg-gray-100'
    }`}>
    <Text className={`font-medium ${isSelected ? 'text-white' : 'text-gray-700'}`}>{label}</Text>
    {count !== undefined && (
      <View className={`ml-2 rounded-full px-2 py-0.5 ${isSelected ? 'bg-white' : 'bg-gray-200'}`}>
        <Text className={`text-xs font-medium ${isSelected ? 'text-blue-600' : 'text-gray-600'}`}>
          {count}
        </Text>
      </View>
    )}
  </TouchableOpacity>
);

// Rating Display Component
const RatingDisplay: React.FC<{
  label: string;
  value: number | null | undefined;
  color: string;
}> = ({ label, value, color }) => (
  <View className="flex-1 border-r border-gray-200">
    <Text className="mb-1 text-center text-sm text-gray-500">{label}</Text>
    <Text className={`text-center text-lg font-bold`} style={{ color }}>
      {value ?? '—'}
    </Text>
  </View>
);

// Player Card Component
const PlayerCard: React.FC<{
  item: Player;
  index: number;
}> = ({ item, index }) => {
  const age = new Date().getFullYear() - new Date(item.dateOfBirth).getFullYear();

  return (
    <View className="mb-3 rounded-xl bg-white p-4 shadow-lg">
      <View className="flex-row items-center justify-between">
        <View className="flex-1">
          <Text className="text-xl font-bold text-gray-800">{item.name}</Text>
          <View className="mt-1 flex-row">
            {item.gender === 'Female' && (
              <View className="mr-2 rounded-full bg-pink-100 px-2 py-0.5">
                <Text className="text-xs font-medium text-pink-800">Women</Text>
              </View>
            )}
            {age < 20 && (
              <View className="rounded-full bg-green-100 px-2 py-0.5">
                <Text className="text-xs font-medium text-green-800">Junior</Text>
              </View>
            )}
          </View>
        </View>
        <Text className="text-2xl font-bold text-gray-900">#{index + 1}</Text>
      </View>

      <View className="mt-4 flex-row justify-between">
        <RatingDisplay label="Classical" value={item.classical} color="#2563eb" />
        <RatingDisplay label="Rapid" value={item.rapid} color="#16a34a" />
        <RatingDisplay label="Blitz" value={item.blitz} color="#9333ea" />
      </View>
    </View>
  );
};

// Main Component
const ChessPlayerList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<RatingType>('classical');
  const [selectedFilters, setSelectedFilters] = useState<FilterType[]>([]);
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>(players);

  const categories = [
    { id: 'classical' as RatingType, label: 'Classical' },
    { id: 'rapid' as RatingType, label: 'Rapid' },
    { id: 'blitz' as RatingType, label: 'Blitz' },
  ];

  const filters = [
    { id: 'women' as FilterType, label: 'Women', count: 45 },
    { id: 'juniors' as FilterType, label: 'Juniors', count: 32 },
  ];

  const applyFiltersAndSort = (searchResults: Player[]) => {
    let result = [...searchResults];

    // Apply gender filter
    if (selectedFilters.includes('women')) {
      result = result.filter((player) => player.gender === 'Female');
    }

    // Apply age filter
    if (selectedFilters.includes('juniors')) {
      const currentYear = new Date().getFullYear();
      result = result.filter((player) => {
        const birthYear = new Date(player.dateOfBirth).getFullYear();
        return currentYear - birthYear < 20;
      });
    }

    // Sort by selected category
    result.sort((a, b) => {
      const aRating = a[selectedCategory] ?? 0;
      const bRating = b[selectedCategory] ?? 0;
      return sortOrder === 'desc' ? bRating - aRating : aRating - bRating;
    });

    setFilteredPlayers(result);
  };

  const handleSearchResults = (results: Player[]) => {
    applyFiltersAndSort(results);
  };

  const toggleFilter = (filterId: FilterType) => {
    const newFilters = selectedFilters.includes(filterId)
      ? selectedFilters.filter((f) => f !== filterId)
      : [...selectedFilters, filterId];
    setSelectedFilters(newFilters);
    applyFiltersAndSort(filteredPlayers);
  };

  return (
    <View className="flex-1 bg-gray-50">
      <View className="px-4 pt-4">
        {/* Search Component */}
        <SearchComponent
          data={players}
          searchKey="name"
          placeholder="Search players..."
          onResultsFound={handleSearchResults}
          showResults={false}
        />

        {/* Rating Categories */}
        <Text className="mb-2 text-sm font-medium text-gray-600">Rating Category</Text>
        <View className="mb-4 flex-row">
          {categories.map((category) => (
            <FilterChip
              key={category.id}
              label={category.label}
              isSelected={selectedCategory === category.id}
              onPress={() => {
                setSelectedCategory(category.id);
                applyFiltersAndSort(filteredPlayers);
              }}
            />
          ))}
        </View>

        {/* Filters and Sort */}
        <View className="mb-4 flex-row items-center justify-between">
          <View className="flex-row">
            {filters.map((filter) => (
              <FilterChip
                key={filter.id}
                label={filter.label}
                count={filter.count}
                isSelected={selectedFilters.includes(filter.id)}
                onPress={() => toggleFilter(filter.id)}
              />
            ))}
          </View>

          {/* Sort Button */}
          <TouchableOpacity
            onPress={() => {
              setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'));
              applyFiltersAndSort(filteredPlayers);
            }}
            className="flex-row items-center rounded-lg bg-gray-100 px-3 py-2">
            <FontAwesome
              name={sortOrder === 'desc' ? 'sort-amount-desc' : 'sort-amount-asc'}
              size={16}
              color="#4B5563"
            />
            <Text className="ml-2 text-sm font-medium text-gray-700">
              {sortOrder === 'desc' ? 'Highest First' : 'Lowest First'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Player List */}
      <FlatList
        className="px-4"
        data={filteredPlayers}
        renderItem={({ item, index }) => <PlayerCard item={item} index={index} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ChessPlayerList;
