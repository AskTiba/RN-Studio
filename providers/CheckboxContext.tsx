import React, { createContext, useContext, useEffect, useState, ReactNode, PropsWithChildren } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CheckboxContextType {
  state: { [id: string]: boolean }; // Store checkbox states using their `id`
  toggleCheckbox: (id: string, value: boolean) => void; // Accepts both `id` and `value` for toggling
}

const CheckboxContext = createContext<CheckboxContextType | undefined>(undefined);

export const CheckboxProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<{ [id: string]: boolean }>({});

  // Load persisted state on mount
  useEffect(() => {
    const loadState = async () => {
      try {
        const storedState = await AsyncStorage.getItem('checkboxState');
        if (storedState) {
          setState(JSON.parse(storedState));
        }
      } catch (error) {
        console.error('Failed to load checkbox state:', error);
      }
    };
    loadState();
  }, []);

  // Save state whenever it changes
  useEffect(() => {
    const saveState = async () => {
      try {
        await AsyncStorage.setItem('checkboxState', JSON.stringify(state));
      } catch (error) {
        console.error('Failed to save checkbox state:', error);
      }
    };
    saveState();
  }, [state]);

  // Toggle the state of a specific checkbox
  const toggleCheckbox = (id: string, value: boolean) => {
    setState((prevState) => {
      const newState = { ...prevState, [id]: value };
      AsyncStorage.setItem('checkboxState', JSON.stringify(newState)); // Persist the new state
      return newState;
    });
  };

  return (
    <CheckboxContext.Provider value={{ state, toggleCheckbox }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export const useCheckbox = (): CheckboxContextType => {
  const context = useContext(CheckboxContext);
  if (!context) {
    throw new Error('useCheckbox must be used within a CheckboxProvider');
  }
  return context;
};
