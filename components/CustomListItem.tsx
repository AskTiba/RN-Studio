import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface CustomListItemProps {
  title: string; // Main text to display
  subtitle?: string; // Optional second line of text
  LeftIcon?: React.ReactNode; // Optional left-side icon (e.g., Person)
  RightIcon?: React.ReactNode; // Optional right-side icon (e.g., RightChevron)
  onPress?: () => void; // Action when the item is pressed
  containerClassName?: string; // Custom Tailwind styles for the container
  titleClassName?: string; // Custom Tailwind styles for the title
  subtitleClassName?: string; // Custom Tailwind styles for the subtitle
}

const CustomListItem: React.FC<CustomListItemProps> = ({
  title,
  subtitle,
  LeftIcon,
  RightIcon,
  onPress,
  containerClassName = 'flex flex-row items-center justify-between py-1',
  titleClassName = 'text-coffee text-[17px] font-medium',
  subtitleClassName = 'text-gray-500 text-[14px]',
}) => {
  return (
    <TouchableOpacity onPress={onPress} className={containerClassName}>
      <View className="flex-row items-center gap-x-4">
        {/* Left Icon */}
        {LeftIcon && <View>{LeftIcon}</View>}

        {/* Title and Subtitle */}
        <View className="flex-1">
          <Text className={titleClassName}>{title}</Text>
          {subtitle && <Text className={subtitleClassName}>{subtitle}</Text>}
        </View>
        {/* Right Icon */}
        {RightIcon && <View>{RightIcon}</View>}
      </View>
    </TouchableOpacity>
  );
};

export default CustomListItem;
