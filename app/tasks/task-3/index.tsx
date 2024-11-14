import React from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox, { MapView } from '@rnmapbox/maps';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

Mapbox.setAccessToken(
  'pk.eyJ1IjoiYXNrdGliYSIsImEiOiJjbTJoZTZwNGowYzBmMndzYmpvNHNzMGV4In0.QQ27lH-fpSC7jep5p2gF2g'
);

const MapBoxIndex = () => {
  return (
    <View className="flex-1">
      <MapView
        logoEnabled={false}
        scaleBarEnabled={false}
        attributionEnabled={false}
        compassEnabled={true}
        compassViewPosition={3}
        compassFadeWhenNorth={true}
        projection="globe"
        className="flex-1"
        style={styles.map}
      />
    </View>
  );
};

export default MapBoxIndex;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
