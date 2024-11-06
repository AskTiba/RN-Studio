import { View, TextInput } from 'react-native';
import React, { useRef, useState } from 'react';
import EmailLogo from '~/assets/svgs/email-logo';
import Cancel from '~/assets/svgs/cancel';

export default function index() {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View className="my-10">
      <View
        className={`mx-2 flex-row items-center justify-between rounded-lg p-2 ${
          isFocused ? 'border border-[#543310]' : 'border-transparent'
        }`}>
        <View className="flex-1 flex-row items-center gap-x-2">
          <EmailLogo className="px-2" color={isFocused ? '#543310' : 'gray'} />
          <TextInput
            placeholder="Mind your business"
            className="flex-1"
            ref={inputRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>
        <Cancel
          className="flex-1 rounded-full bg-[#fdd700] px-3"
          color={isFocused ? '#543310' : 'gray'}
        />
      </View>
    </View>
  );
}
