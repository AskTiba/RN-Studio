import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CheckboxContextType {
  state: Record<string, boolean>;
  toggleCheckbox: (id: string) => void;
  setCheckbox: (id: string, value: boolean) => void; // Explicit setter
}

const CheckboxContext = createContext<CheckboxContextType | undefined>(undefined);

export const CheckboxProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<Record<string, boolean>>({});

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
  const toggleCheckbox = (id: string) => {
    setState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Set a specific checkbox state explicitly
  const setCheckbox = (id: string, value: boolean) => {
    setState((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <CheckboxContext.Provider value={{ state, toggleCheckbox, setCheckbox }}>
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
