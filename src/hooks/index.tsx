import React from 'react';

import { NameStore } from './nameStore';

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {

  return (
    <NameStore>
      {children}
    </NameStore>
  );
};
