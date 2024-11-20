import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import LottieView from 'lottie-react-native';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export default function ControllingAnimationProgress() {
  const animationProgress = useRef(new Animated.Value(0));
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    // Auto-play animation when component mounts
    playAnimation();
  }, []);

  const playAnimation = () => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const resetAnimation = () => {
    animationProgress.current.setValue(0);
  };

  return (
    <View className="">
      <View className="border-2 border-red-500">
        <AnimatedLottieView
          ref={animationRef}
          source={require('../assets/lottie/globe.json')} // Updated file path and extension
          progress={animationProgress.current}
          style={{ width: '100%', height: '100%' }} // Adjust size as needed
          loop={true} // Set to true if you want the animation to loop
          autoPlay={true} // We're controlling the animation manually
        />
      </View>
      {/* <Button className="rounded-lg" title="Play" onPress={playAnimation} />
      <Button className="my-3 rounded-lg bg-blue-500" title="Reset" onPress={resetAnimation} /> */}
    </View>
  );
}
