import React from 'react';
import { Redirect, Stack } from 'expo-router';
import { useAuth } from '~/providers/AuthCoontext';

export default function _layout() {
  const { session, user } = useAuth();

  if (user) {
    return <Redirect href={'/Profile'} />;
  }

  return <Stack />;
}
