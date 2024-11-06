import React, { forwardRef } from 'react';
import { Text, TextInput, View, TextInputProps, Pressable } from 'react-native';
import Show from '~/assets/svgs/show';
import Hide from '~/assets/svgs/hide';

interface CustomInputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isPassword?: boolean;
  // Style props for easy customization
  containerStyle?: string;
  inputStyle?: string;
  labelStyle?: string;
  errorStyle?: string;
}

export const CustomInput = forwardRef<TextInput, CustomInputProps>(
  (
    {
      label,
      error,
      leftIcon,
      rightIcon,
      isPassword = false,
      containerStyle = '',
      inputStyle = '',
      labelStyle = '',
      errorStyle = '',
      ...props
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

    return (
      <View className={`w-full space-y-2 ${containerStyle}`}>
        {label && (
          <Text className={`text-sm font-medium text-gray-700 ${labelStyle}`}>{label}</Text>
        )}

        <View className="relative">
          {/* Left Icon */}
          {leftIcon && <View className="absolute left-3 h-full justify-center">{leftIcon}</View>}

          <TextInput
            ref={ref}
            className={`
              min-h-[44px]
              w-full
              rounded-lg
              border
              border-gray-300 bg-white
              px-3
              text-base
              text-gray-900
              ${leftIcon ? 'pl-10' : ''}
              ${rightIcon || isPassword ? 'pr-10' : ''}
              ${error ? 'border-red-500' : ''}
              ${inputStyle}
            `}
            placeholderTextColor="#9CA3AF"
            secureTextEntry={isPassword && !isPasswordVisible}
            {...props}
          />

          {/* Right Icon or Password Toggle */}
          {(rightIcon || isPassword) && (
            <Pressable
              onPress={isPassword ? () => setIsPasswordVisible(!isPasswordVisible) : undefined}
              className="absolute right-3 h-full justify-center"
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
              {isPassword ? isPasswordVisible ? <Show /> : <Hide /> : rightIcon}
            </Pressable>
          )}
        </View>

        {/* Error Message */}
        {error && <Text className={`text-sm text-red-500 ${errorStyle}`}>{error}</Text>}
      </View>
    );
  }
);

CustomInput.displayName = 'CustomInput';
