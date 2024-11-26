import React from 'react';
import AuthProvider from './AuthProvider';
import { CheckboxProvider } from './CheckboxContext';
import { ToggleProvider } from './ToggleContext';

const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AuthProvider>
      <ToggleProvider>
        <CheckboxProvider>{children}</CheckboxProvider>
      </ToggleProvider>
    </AuthProvider>
  );
};

export default AppProviders;
