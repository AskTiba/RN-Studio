import React from 'react';
import { View, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import { useToggleContext } from '~/providers/ToggleContext';

interface ToggleProps {
  id: string; // Unique identifier for this toggle
  onColor?: string;
  offColor?: string;
  size?: number; // Width and height of the toggle container
  onToggle?: (isOn: boolean) => void; // Optional additional callback
}

const Toggle = ({
  id,
  onColor = '#32cd32',
  offColor = '#636363',
  size = 50,
  onToggle,
}: ToggleProps) => {
  const { toggleState, toggleHandler } = useToggleContext();
  const isOn = toggleState[id] || false; // Default to false if not initialized

  const animatedValue = React.useRef(new Animated.Value(isOn ? 1 : 0)).current;

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isOn]);

  const moveToggle = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, size - 28],
  });

  const handlePress = () => {
    toggleHandler(id, !isOn);
    onToggle?.(!isOn); // Optional callback
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container, { backgroundColor: isOn ? onColor : offColor, width: size }]}>
        <Animated.View
          style={[styles.toggle, { marginLeft: moveToggle, width: size / 2, height: size / 2 }]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
  },
  toggle: {
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});

export default Toggle;
