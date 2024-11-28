import { View, Text, useWindowDimensions } from 'react-native';
import React from 'react';
import Jigsaw from '~/assets/jigsaw';

export default function Education() {
  const layout = useWindowDimensions();
  return (
    <View className="flex-1 bg-honeydew">
      <Jigsaw />
    </View>
  );
}
