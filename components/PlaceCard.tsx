import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 40; // Assuming 20px padding on each side

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

interface PlaceCardProps {
  place: Place;
}

export default function PlaceCard({ place }: PlaceCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderImage = ({ item }: { item: string }) => (
    <Image source={{ uri: item }} style={{ width: CARD_WIDTH, height: 200 }} resizeMode="cover" />
  );

  const onScroll = (event: any) => {
    const slideSize = CARD_WIDTH;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    setActiveIndex(roundIndex);
  };

  return (
    <View className="mx-auto mb-5 w-[340px] rounded-lg">
      <View className="h-[200px] w-full overflow-hidden rounded-xl">
        <FlatList
          data={place.images}
          renderItem={renderImage}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          snapToInterval={CARD_WIDTH}
          snapToAlignment="start"
          decelerationRate="fast"
        />
        <View className="absolute bottom-2 flex-row self-center">
          {place.images.map((_, index) => (
            <TouchableOpacity
              key={index}
              className={`mx-1 h-2 w-2 rounded-full ${
                index === activeIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </View>
      </View>
      <View className="py-4">
        <Text className="mb-1 text-lg font-bold">{place.title}</Text>
        <Text className="mb-1 text-sm text-gray-600">
          {place.location.city}, {place.location.country}
        </Text>
        <Text className="text-base font-bold text-teal-600">${place.price_per_month} / month</Text>
      </View>
    </View>
  );
}
