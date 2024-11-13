// ~/components/TextInput.tsx
import React, { useRef, useState } from 'react';
import { View, TextInput, TouchableOpacity, TextInputProps } from 'react-native';

interface CustomInputProps extends TextInputProps {
  placeholder?: string;
  startIcon?: React.ComponentType<any> | null;
  endIcon?: React.ComponentType<any>;
  borderColor?: string;
  focusedBorderColor?: string;
  onClear?: (index: number) => void;
  index?: number; // Add index to identify item in the list
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder = 'Enter text...',
  startIcon: StartIcon = null,
  endIcon: EndIcon = null,
  borderColor = 'border-gray-300',
  focusedBorderColor = 'border-[#543310]',
  onClear,
  index,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const borderColorClass = isFocused ? focusedBorderColor : borderColor;

  return (
    <View
      className={`border-[{isFocused ? '#543310' : 'gray'}] flex-row items-center justify-between rounded-lg border p-2 ${borderColorClass} my-1`}>
      {/* Conditionally render start icon (if provided) */}
      {StartIcon && <StartIcon className="px-2" color={isFocused ? '#543310' : 'gray'} />}
      <TextInput
        ref={inputRef}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="flex-1"
        {...props}
      />

      {EndIcon && onClear && (
        <TouchableOpacity onPress={() => onClear(index!)}>
          <EndIcon color={isFocused ? '#543310' : 'gray'} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;
