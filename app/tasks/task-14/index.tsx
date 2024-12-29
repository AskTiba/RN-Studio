import { View, Text } from 'react-native';
import React from 'react';
import ProgressBar from '~/components/ProgressBar';
import DigitalClock from '~/components/DigitalClock';
import DigitalCountdown from '~/components/DigitalCountDown';

export default function Index() {
  const startDate = '2024-12-30T12:00:00.000Z'; // ISO format start date
  const endDate = '2024-12-31T12:00:00.000Z'; // ISO format end date
  return (
    <View>
      <View className="my-5">
        <ProgressBar startDate="29/12/2024 10:00" endDate="31/12/2024 19:00" />
      </View>
      <View className="">
        <DigitalClock />
      </View>
      <View className="">
        <DigitalCountdown startDate={startDate} endDate={endDate} />
      </View>
    </View>
  );
}
