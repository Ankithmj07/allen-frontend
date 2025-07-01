// src/contexts/EnrollContext.tsx
import React, { createContext, useContext, useState } from 'react';

type EnrollContextType = {
  isFeeCardOpen: boolean;
  openFeeCard: () => void;
  closeFeeCard: () => void;
};

const EnrollContext = createContext<EnrollContextType | undefined>(undefined);

export const EnrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isFeeCardOpen, setIsFeeCardOpen] = useState(false);

  const openFeeCard = () => setIsFeeCardOpen(true);
  const closeFeeCard = () => setIsFeeCardOpen(false);

  return (
    <EnrollContext.Provider value={{ isFeeCardOpen, openFeeCard, closeFeeCard }}>
      {children}
    </EnrollContext.Provider>
  );
};

export const useEnroll = () => {
  const context = useContext(EnrollContext);
  if (!context) {
    throw new Error('useEnroll must be used within an EnrollProvider');
  }
  return context;
};
