import React from 'react';
import AuthProvider from './AuthProvider';
import { CheckboxProvider } from './CheckboxContext';
import { ToggleProvider } from './ToggleContext';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
// import { useReactQueryDevTools } from '@dev-plugins/react-query';

// Create a client
const queryClient = new QueryClient();

const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ToggleProvider>
          <CheckboxProvider>{children}</CheckboxProvider>
        </ToggleProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default AppProviders;
