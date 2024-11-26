import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';

type RadioButtonProps = {
  checked: boolean; // Current state of the button
  onPress: () => void; // Callback when the button is pressed
  size?: number; // Size of the radio button
  borderColor?: string; // Border color for the button
  checkedColor?: string; // Fill color when checked
  checkmarkColor?: string; // Checkmark color
  label?: string; // Optional label text
  labelPosition?: 'left' | 'right'; // Position of the label
  labelStyle?: object; // Custom styles for the label
  style?: object; // Additional styles for the button
};

const RadioButton: React.FC<RadioButtonProps> = ({
  checked,
  onPress,
  size = 20,
  borderColor = '#ccc',
  checkedColor = '#ffffff', // Default iOS blue
  checkmarkColor = '#543310',
  label,
  labelPosition = 'right',
  labelStyle = {},
  style = {},
}) => {
  return (
    <View style={styles.container}>
      {/* Label on the left */}
      {label && labelPosition === 'left' && (
        <Text style={[styles.label, labelStyle, { marginRight: 8 }]}>{label}</Text>
      )}

      {/* Radio Button */}
      <Pressable
        style={[
          styles.radioBase,
          {
            borderColor,
            width: size,
            height: size,
            borderRadius: size / 2,
          },
          checked && {
            borderColor: checkedColor,
            backgroundColor: checkedColor,
          },
          style,
        ]}
        onPress={onPress}
        accessibilityRole="radio"
        accessibilityState={{ checked }}>
        {checked && (
          <View
            style={{
              width: size / 2,
              height: size / 2,
              borderRadius: size / 4,
              backgroundColor: checkmarkColor,
            }}
          />
        )}
      </Pressable>

      {/* Label on the right */}
      {label && labelPosition === 'right' && (
        <Text style={[styles.label, labelStyle, { marginLeft: 8 }]}>{label}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBase: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
});

export default RadioButton;
