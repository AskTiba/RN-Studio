import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface CheckboxState {
  [key: string]: boolean; // Key represents the checkbox ID
}

interface CheckboxContextType {
  state: CheckboxState;
  toggleCheckbox: (id: string) => void;
}

export const CheckboxContext = createContext<CheckboxContextType | undefined>(undefined);

export const CheckboxProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<CheckboxState>({});

  // Load saved state from AsyncStorage
  useEffect(() => {
    const loadState = async () => {
      const savedState = await AsyncStorage.getItem('checkboxState');
      if (savedState) {
        setState(JSON.parse(savedState));
      }
    };
    loadState();
  }, []);

  // Save state to AsyncStorage whenever it changes
  useEffect(() => {
    AsyncStorage.setItem('checkboxState', JSON.stringify(state));
  }, [state]);

  const toggleCheckbox = (id: string) => {
    setState((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <CheckboxContext.Provider value={{ state, toggleCheckbox }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export const useCheckbox = () => {
  const context = useContext(CheckboxContext);
  if (!context) {
    throw new Error('useCheckbox must be used within a CheckboxProvider');
  }
  return context;
};
