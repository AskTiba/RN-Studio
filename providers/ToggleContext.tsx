import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  PropsWithChildren,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ToggleContextType {
  toggleState: Record<string, boolean>;
  toggleHandler: (key: string, value: boolean) => void;
}

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

export const ToggleProvider = ({ children }: PropsWithChildren) => {
  const [toggleState, setToggleState] = useState<Record<string, boolean>>({});

  // Load state from AsyncStorage on mount
  useEffect(() => {
    const loadToggleState = async () => {
      try {
        const storedState = await AsyncStorage.getItem('toggleState');
        if (storedState) {
          setToggleState(JSON.parse(storedState));
        }
      } catch (error) {
        console.error('Failed to load toggle state:', error);
      }
    };

    loadToggleState();
  }, []);

  // Save state to AsyncStorage whenever it changes
  useEffect(() => {
    const saveToggleState = async () => {
      try {
        await AsyncStorage.setItem('toggleState', JSON.stringify(toggleState));
      } catch (error) {
        console.error('Failed to save toggle state:', error);
      }
    };

    saveToggleState();
  }, [toggleState]);

  // Update the toggle state for a specific key
  const toggleHandler = (key: string, value: boolean) => {
    setToggleState((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <ToggleContext.Provider value={{ toggleState, toggleHandler }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggleContext = (): ToggleContextType => {
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error('useToggleContext must be used within a ToggleProvider');
  }

  return context;
};
