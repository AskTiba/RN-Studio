import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ToggleComponent = () => {
  const [selectedOption, setSelectedOption] = useState<'Grid' | 'Spectra' | 'Slide'>('Grid');

  const handleOptionPress = (option: 'Grid' | 'Spectra' | 'Slide') => {
    setSelectedOption(option);
  };

  const options = ['Grid', 'Spectra', 'Slide'] as const;

  return (
    <View className="flex flex-col items-center">
      {/* Toggle Buttons */}
      <View className="flex flex-row space-x-2">
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            className={`rounded bg-[#32cd32] px-4 py-2 font-bold text-gray-800 hover:bg-gray-300 ${
              selectedOption === option ? 'bg-blue-500 text-white' : ''
            }`}
            onPress={() => handleOptionPress(option)}>
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content Container */}
      <View className="mt-4 w-full px-4">
        {selectedOption === 'Grid' && (
          <View className="rounded bg-gray-100 p-4">
            <Text>Grid Option Content</Text>
          </View>
        )}
        {selectedOption === 'Spectra' && (
          <View className="rounded bg-gray-100 p-4">
            <Text>Spectra Option Content</Text>
          </View>
        )}
        {selectedOption === 'Slide' && (
          <View className="rounded bg-gray-100 p-4">
            <Text>Slide Option Content</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default ToggleComponent;
