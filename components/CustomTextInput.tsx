import React, { forwardRef } from 'react';
import { Text, TextInput, View } from 'react-native';

interface CustomTextInputProps extends React.ComponentProps<typeof TextInput> {
  label: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const CustomTextInput = forwardRef<typeof TextInput, CustomTextInputProps>(
  ({ label, containerClassName, labelClassName, inputClassName, ...props }, ref) => {
    return (
      <View className={`relative mb-6 ${containerClassName ?? ''}`}>
        <View className="absolute -top-3 left-0 right-0 h-3 bg-white" />
        <Text
          className={`absolute -top-3 left-4 bg-white px-2 text-sm font-medium ${labelClassName ?? ''}`}>
          {label}
        </Text>
        <TextInput
          ref={ref}
          className={`w-full rounded-md border border-gray-300 p-3 text-gray-800 focus:border-blue-500 focus:outline-none ${inputClassName ?? ''}`}
          {...props}
        />
      </View>
    );
  }
);

export default CustomTextInput;
