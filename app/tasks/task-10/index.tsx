import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { router, Stack } from 'expo-router';
import Animated, {
  useAnimatedRef,
  useAnimatedStyle,
  withTiming,
  useScrollViewOffset,
  ScrollHandler,
  interpolate,
} from 'react-native-reanimated';
import Chat from '~/assets/svgs/chat';
import { useHeaderHeight } from '@react-navigation/elements';
import LeftChevron from '~/assets/svgs/left-chevron';

const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`); // Example array
const ATouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export default function Index() {
  const scrollref = useAnimatedRef<Animated.ScrollView>();
  const scrollHandler = useScrollViewOffset(scrollref);
  const headerHeight = useHeaderHeight();

  const buttonStyle = useAnimatedStyle(() => {
    return { opacity: scrollHandler.value > 300 ? withTiming(1) : withTiming(0) };
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollHandler.value, [0, 200], [0, 1]),
    };
  }, []);

  const scrollTop = () => {
    scrollref.current?.scrollTo({ x: 0, y: 0, animated: true });
  };

  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: true,
          title: '',
          headerBackground: () => (
            <Animated.View
              style={headerAnimatedStyle}
              className={`h-24 border-b-2 border-coffee bg-cream`}></Animated.View>
          ),
          headerShadowVisible: false,
          headerStyle: { backgroundColor: 'transparent' },
          headerTransparent: true,
          headerLargeTitle: true,
          headerBlurEffect: 'extraLight',
          headerLeft: () => (
            <ATouchableOpacity
              onPress={router.back}
              style={headerAnimatedStyle}
              className="size-10 items-center justify-center rounded-full">
              <LeftChevron color={'#543310'} />
            </ATouchableOpacity>
          ),
        }}
      />
      <View>
        <ScrollView className={`pt-[${headerHeight}]`} ref={scrollref}>
          {items.map((item, index) => (
            <View key={index} className="m-4 rounded-lg bg-avocado py-4">
              <Text className="text-center text-base text-[#F8F4E1]">{item}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <Animated.View style={buttonStyle} className={`absolute bottom-24 right-5 indent-10`}>
        <TouchableOpacity onPress={scrollTop} className={`rounded-3xl bg-coffee p-3`}>
          <Chat width={28} height={28} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
