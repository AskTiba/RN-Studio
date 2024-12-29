import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

type ProgressBarProps = {
  startDate: string; // Start date in "DD/MM/YYYY HH:mm" format
  endDate: string; // End date in "DD/MM/YYYY HH:mm" format
};

export default function ProgressBar({ startDate, endDate }: ProgressBarProps) {
  const [progress, setProgress] = useState<number>(0);

  // Helper function to parse local date format into a Date object
  const parseLocalDateTime = (dateTime: string) => {
    const [date, time] = dateTime.split(' ');
    const [day, month, year] = date.split('/').map(Number);
    const [hours, minutes] = time.split(':').map(Number);

    // Create a Date object using the local time zone
    return new Date(year, month - 1, day, hours, minutes);
  };

  useEffect(() => {
    const calculateProgress = () => {
      const now = new Date().getTime();
      const start = parseLocalDateTime(startDate).getTime();
      const end = parseLocalDateTime(endDate).getTime();

      if (now >= end) {
        setProgress(100); // Progress complete
      } else if (now <= start) {
        setProgress(0); // Progress hasn't started
      } else {
        const elapsed = now - start;
        const total = end - start;
        setProgress((elapsed / total) * 100);
      }
    };

    // Initial calculation
    calculateProgress();

    // Recalculate every second
    const interval = setInterval(calculateProgress, 1000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [startDate, endDate]);

  return (
    <View className="w-full px-4">
      {/* Progress bar */}
      <View className="h-4 w-full overflow-hidden rounded-full bg-gray-300">
        <View className="h-full rounded-full bg-blue-500" style={{ width: `${progress}%` }} />
      </View>

      {/* Dates and time */}
      <View className="mt-2 flex-row justify-between">
        <View className="items-start">
          <Text className="text-gray-600">{startDate.split(' ')[0]}</Text>
          <Text className="text-sm text-gray-500">{startDate.split(' ')[1]}</Text>
        </View>
        <View className="items-end">
          <Text className="text-gray-600">{endDate.split(' ')[0]}</Text>
          <Text className="text-sm text-gray-500">{endDate.split(' ')[1]}</Text>
        </View>
      </View>

      {/* Progress text */}
      <Text className="mt-2 text-lg text-gray-600">Progress: {progress.toFixed(1)}%</Text>
    </View>
  );
}
