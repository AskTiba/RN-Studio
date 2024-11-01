import React from "react";
import { TouchableOpacity } from "react-native";
import CheckMark from "~/assets/svgs/checkmark";

interface CheckboxProps {
  checked: boolean;
  onValueChange: (checked: boolean) => void;
  className?: string;
  checkmarkColor?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onValueChange,
  className,
  checkmarkColor = "#ffffff",
}) => {
  const handlePress = () => {
    onValueChange(!checked);
  };

  return (
    <TouchableOpacity
      className={`w-6 h-6 justify-center items-center border-2 border-gray-300 rounded-full bg-[#4C4BF6] ${className}`}
      onPress={handlePress}
    >
      {checked && <CheckMark width={12} height={12} stroke={checkmarkColor} />}
    </TouchableOpacity>
  );
};

export default Checkbox;
