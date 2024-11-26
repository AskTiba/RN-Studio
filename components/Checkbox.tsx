import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import CheckMark from '~/assets/svgs/checkmark';
import { useCheckbox } from '~/providers/CheckboxContext';

interface CheckboxProps {
  id: string; // Unique ID for the checkbox
  size?: number; // Size of the checkbox
  borderColor?: string; // Border color when unchecked
  backgroundColor?: string; // Background color when checked
  checkmarkColor?: string; // Color of the checkmark
  className?: string; // Additional classes for styling (Tailwind CSS classes)
  label?: string; // Optional label text
  labelPosition?: 'left' | 'right'; // Position of the label
  labelStyle?: object; // Style for the label text
  containerStyle?: object; // Style for the container
  disabled?: boolean; // If true, disables the checkbox
  checked?: boolean; // Optional controlled state for the checkbox
  onChange?: (checked: boolean) => void; // Optional change handler
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  size = 24,
  borderColor = '#cccccc',
  backgroundColor = '#4C4BF6',
  checkmarkColor = '#ffffff',
  className = '',
  label,
  labelPosition = 'right',
  labelStyle,
  containerStyle,
  disabled = false,
  checked, // Controlled checkbox state
  onChange, // Change handler for controlled mode
}) => {
  const { state, toggleCheckbox } = useCheckbox(); // Access context state
  const isChecked = checked !== undefined ? checked : state[id] || false; // Controlled vs context

  const handlePress = () => {
    if (!disabled) {
      if (onChange) {
        onChange(!isChecked); // Notify parent if controlled
      } else {
        toggleCheckbox(id); // Update via context for uncontrolled
      }
    }
  };

  return (
    <View style={[styles.container, containerStyle]} className="flex-row items-center">
      {label && labelPosition === 'left' && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <TouchableOpacity
        className={`items-center justify-center rounded-full border ${className}`}
        style={{
          height: size,
          width: size,
          borderColor: disabled ? '#cccccc' : borderColor,
          backgroundColor: isChecked ? backgroundColor : 'transparent',
          borderWidth: 2,
          opacity: disabled ? 0.6 : 1,
        }}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: isChecked }}
        onPress={handlePress}
        disabled={disabled}>
        {isChecked && <CheckMark width={size / 2} height={size / 2} stroke={checkmarkColor} />}
      </TouchableOpacity>
      {label && labelPosition === 'right' && (
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginHorizontal: 8,
    fontSize: 16,
  },
});

export default Checkbox;
