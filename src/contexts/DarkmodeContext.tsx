// src/contexts/DarkModeContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface DarkModeContextType {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

interface DarkModeProviderProps {
  children: ReactNode;
}

const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode) {
      setIsDarkMode(savedMode === 'true');
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('dark-mode', isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };