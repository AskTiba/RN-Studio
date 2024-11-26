import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import CheckMark from '~/assets/svgs/checkmark';
import { useCheckbox } from '~/providers/CheckboxContext';

interface CheckboxProps {
  id: string; // Unique ID for the checkbox
  size?: number;
  borderColor?: string;
  backgroundColor?: string;
  checkmarkColor?: string;
  className?: string;
}
const Checkbox = ({
  id,
  size = 24,
  borderColor = '#cccccc',
  backgroundColor = '#4C4BF6',
  checkmarkColor = '#ffffff',
  className,
}: CheckboxProps) => {
  const { state, toggleCheckbox } = useCheckbox();
  const checked = state[id] || false;

  const handlePress = () => {
    toggleCheckbox(id);
  };
  return (
    <View className="flex-row items-center">
      <TouchableOpacity
        className={`items-center justify-center rounded-full border ${className}`}
        style={{
          height: size,
          width: size,
          borderColor,
          backgroundColor: checked ? backgroundColor : 'transparent',
          borderWidth: 2,
        }}
        accessibilityRole="checkbox"
        accessibilityState={{ checked }}
        onPress={handlePress}>
        {checked && <CheckMark width={size / 2} height={size / 2} stroke={checkmarkColor} />}
      </TouchableOpacity>
    </View>
  );
};

export default Checkbox;
