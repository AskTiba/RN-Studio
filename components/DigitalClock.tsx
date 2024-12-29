import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

type DigitalClockProps = {
  // You can add props to control time format, style, etc., for flexibility.
};

const DigitalClock: React.FC<DigitalClockProps> = () => {
  const [time, setTime] = useState<string>('');

  const updateTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    setTime(`${hours}:${minutes}:${seconds}`);
  };

  useEffect(() => {
    updateTime(); // Set the initial time
    const interval = setInterval(updateTime, 1000); // Update every second

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <View className="flex items-center justify-center p-4">
      <Text className="text-4xl font-bold text-gray-900">{time}</Text>
    </View>
  );
};

export default DigitalClock;
