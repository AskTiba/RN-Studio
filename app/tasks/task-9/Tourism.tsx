import { View, Text, useWindowDimensions } from 'react-native';
import React from 'react';
import Eyes from '~/assets/eyes';

export default function Tourism() {
  const layout = useWindowDimensions();

  return (
    <View>
      <Eyes width={layout.width} height={layout.height} />
    </View>
  );
}
