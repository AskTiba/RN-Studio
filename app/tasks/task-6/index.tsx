import { Stack } from 'expo-router';
import * as React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import Android from '~/assets/svgs/android';
import AppleLogo from '~/assets/svgs/apple-logo';
import DesignInspiration from '~/assets/svgs/design_inspiration';
import GoogleLogo from '~/assets/svgs/google-logo';
import SettleSpace from '~/assets/svgs/settlespace';
import SocialThinking from '~/assets/svgs/social_thinking';
import TikTok from '~/assets/svgs/tiktok';
import Vintage from '~/assets/svgs/vintage';
import Button from '~/components/Button';

const width = Dimensions.get('window').width;

const carouselData = [
  {
    id: 1,
    title: 'Welcome',
    quote: 'A man must have a code.',
    quoteAuthor: "Jaqen H'ghar",
    description:
      'Welcome to SettleSpace, where your journey to find the perfect place to call home begins. Like the globe in our logo, we encompass the world of possibilities, and the keyhole represents unlocking the door to your new chapter.',
    svg: <SocialThinking width={250} height={450} />,
  },
  {
    id: 2,
    title: 'What We Do',
    quote: 'The night is dark and full of terrors, but the fire burns them all away.',
    quoteAuthor: 'Melisandre',
    description:
      "Whether you're looking for a short-term stay or a place to settle for months, we ensure your journey is guided by light and simplicity. With SettleSpace, you find comfort wherever you go—no worries, no surprises, just a seamless move-in experience.",
    svg: <DesignInspiration width={250} height={450} />,
  },
  {
    id: 3,
    title: 'Why Choose Us',
    quote: 'The lone wolf dies, but the pack survives.',
    quoteAuthor: 'Ned Stark',
    description:
      "Join a community where space owners and settlers connect to create thriving, warm homes. Here, you're never alone—SettleSpace ensures you find not just a space, but a home.",
    svg: <Android width={250} height={450} />,
  },
  {
    id: 4,
    title: 'Our Logo',
    quote: 'Chaos isn’t a pit. Chaos is a ladder.',
    quoteAuthor: 'Petyr Baelish',
    description:
      'Our logo is a beacon of hope. The globe signifies a world of choices, and the keyhole embodies opportunity, the gateway to your next destination. SettleSpace is your ladder, turning the chaos of moving into a seamless experience.',
    svg: <Vintage width={250} height={450} />,
  },
  {
    id: 4,
    title: 'Get Started',
    quote: 'When you play the game of homes, you win or you win.',
    quoteAuthor: 'Cersei Lannister (modified)',
    description:
      'At SettleSpace, there are no losers just opportunities. Let’s get you settled. Your space awaits.',
    svg: <Vintage width={250} height={450} />,
  },
];

const icons = [
  { id: 'google', Icon: GoogleLogo },
  { id: 'apple', Icon: AppleLogo },
  { id: 'tiktok', Icon: TikTok },
];

function CarouselScreen() {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View className="h-full flex-1">
      <View className="h-full flex-1">
        <View className="flex-row items-center justify-center">
          <SettleSpace width={100} height={100} />
          <Text className="mx-4 text-[36px] font-thin text-coffee">
            <Text style={{ fontFamily: 'RubikGlitchPro' }}>Settle</Text>
            {''} Space
          </Text>
        </View>
        <View className="">
          <Carousel
            ref={ref}
            width={width}
            height={width + 150}
            data={carouselData}
            onProgressChange={(offsetProgress, absoluteProgress) => {
              // Update the SharedValue with offsetProgress or absoluteProgress as needed
              progress.value = offsetProgress; // Example: using offsetProgress
            }}
            renderItem={({ item }) => (
              <View className="mx-4 flex-1">
                <Text
                  style={{ fontFamily: 'RubikGlitchPro' }}
                  className="text-[24px] text-coffee underline">
                  {item.title}
                </Text>
                <Text className="pb-3 text-[16px] text-coffee font-bold">
                  {item.quote}~<Text className="p-3 text-coffee">{item.quoteAuthor}</Text>
                </Text>

                <Text className=" text-[16px] text-coffee">{item.description}</Text>
                <View className="items-center flex-1">{item.svg}</View>
              </View>
            )}
          />
        </View>
      </View>
      <View className="mx-4 gap-5 py-10">
        <View className="flex-row gap-x-5">
          <Button className="w-1/2" title="Sign up" />
          <Button variant="outline" className="flex-1" title="Log in" />
        </View>
        <View className="mx-3 flex-row items-center gap-10">
          <Text className="w-[40%] text-[16px] font-bold text-coffee">
            Or continue using Google or Apple
          </Text>
          <View className="flex-row gap-x-5 px-4">
            {icons.map(({ id, Icon }) => (
              <TouchableOpacity key={id} className="rounded-lg border border-coffee p-1">
                <Icon height={28} width={28} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

export default CarouselScreen;
