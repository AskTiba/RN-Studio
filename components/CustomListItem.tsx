import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface CustomListItemProps {
  title: string; // Main text to display
  LeftIcon?: React.ReactNode; // Optional left-side icon (e.g., Person)
  RightIcon?: React.ReactNode; // Optional right-side icon (e.g., RightChevron)
  onPress?: () => void; // Action when the item is pressed
  containerClassName?: string; // Custom Tailwind styles for the container
  textClassName?: string; // Custom Tailwind styles for the text
}

const CustomListItem: React.FC<CustomListItemProps> = ({
  title,
  LeftIcon,
  RightIcon,
  onPress,
  containerClassName = 'flex flex-row items-center justify-between py-4',
  textClassName = 'text-coffee text-[17px]',
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={containerClassName}
    >
      <View className="flex-row items-center gap-x-4">
        {LeftIcon && <View>{LeftIcon}</View>}
        <Text className={textClassName}>{title}</Text>
      </View>
      {RightIcon && <View>{RightIcon}</View>}
    </TouchableOpacity>
  );
};

export default CustomListItem;
