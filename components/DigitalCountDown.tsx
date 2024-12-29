import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

type DigitalCountdownProps = {
  startDate: string; // Start date in ISO format string
  endDate: string;   // End date in ISO format string
};

const DigitalCountdown: React.FC<DigitalCountdownProps> = ({ startDate, endDate }) => {
  const [timeLeft, setTimeLeft] = useState<string>('00:00:00');
  const [formattedStartDate, setFormattedStartDate] = useState<string>('');
  const [formattedEndDate, setFormattedEndDate] = useState<string>('');

  // Format a date to dd/MM/yyyy HH:mm format
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false, // Use 24-hour format
    };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  };

  // Function to calculate the time difference
  const calculateTimeLeft = () => {
    const currentTime = new Date();
    const targetEndTime = new Date(endDate);

    // Get the difference in milliseconds
    const difference = targetEndTime.getTime() - currentTime.getTime();

    if (difference <= 0) {
      // If the time has passed, stop the countdown and show 00:00:00
      setTimeLeft('00:00:00');
    } else {
      // Calculate hours, minutes, and seconds remaining
      const hours = Math.floor(difference / (1000 * 60 * 60)).toString().padStart(2, '0');
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
      const seconds = Math.floor((difference % (1000 * 60)) / 1000).toString().padStart(2, '0');
      setTimeLeft(`${hours}:${minutes}:${seconds}`);
    }
  };

  useEffect(() => {
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    setFormattedStartDate(formatDate(startDateObj)); // Format the start date
    setFormattedEndDate(formatDate(endDateObj));     // Format the end date

    calculateTimeLeft(); // Initial calculation
    const interval = setInterval(calculateTimeLeft, 1000); // Update every second

    // Cleanup interval when the component is unmounted
    return () => clearInterval(interval);
  }, [startDate, endDate]); // Re-run if start or end date changes

  return (
    <View className="flex justify-center items-center p-4">
      <Text className="text-xl font-semibold text-gray-700">Event Start: {formattedStartDate}</Text>
      <Text className="text-xl font-semibold text-gray-700">Event End: {formattedEndDate}</Text>
      <Text className="text-4xl font-bold text-gray-900 mt-4">{timeLeft}</Text>
    </View>
  );
};

export default DigitalCountdown;
