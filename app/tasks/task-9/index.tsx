import React from 'react';
import { Stack } from 'expo-router';
import { View, Text, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Health from './Health';
import Engineering from './Engineering';
import Tourism from './Tourism';
import Education from './Education';
import Finance from './Finance';
import Technology from './Technology';
const renderScene = SceneMap({
  first: Engineering,
  second: Health,
  third: Education,
  fourth: Technology,
  fifth: Tourism,
  sixth: Finance,
});

const routes = [
  { key: 'first', title: 'Engineering' },
  { key: 'second', title: 'Health' },
  { key: 'third', title: 'Education' },
  { key: 'fourth', title: 'Technology' },
  { key: 'fifth', title: 'Tourism' },
  { key: 'sixth', title: 'Finance' },
];

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <View className="flex-1">
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Navigation',
          headerShadowVisible: false,
        }}
      />

      {/* Main Content Area */}
      <View className="mt-20 flex-1">
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              style={{ backgroundColor: '#543310' }}
              scrollEnabled={true} // Enable horizontal scrolling
              tabStyle={{ width: layout.width / 3 }} // Adjust tab width
              labelStyle={{ fontSize: 24, fontWeight: '600' }} // Style the text
              indicatorStyle={{ backgroundColor: '#F8F4E1', height: 3 }} // Indicator for active tab
            />
          )}
        />
      </View>
    </View>
  );
}
