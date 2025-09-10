import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved theme preference or default to light mode
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const theme = isDarkMode ? 'dark' : 'light';

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('theme', theme);
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    
    // Apply CSS variables for theme
    const root = document.documentElement;
    
    if (isDarkMode) {
      root.style.setProperty('--bg-primary', '#1f1f1f');
      root.style.setProperty('--bg-secondary', '#2d2d2d');
      root.style.setProperty('--bg-tertiary', '#3a3a3a');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#b3b3b3');
      root.style.setProperty('--text-tertiary', '#8c8c8c');
      root.style.setProperty('--border-color', '#404040');
      root.style.setProperty('--shadow-light', 'rgba(255, 255, 255, 0.1)');
      root.style.setProperty('--shadow-dark', 'rgba(0, 0, 0, 0.3)');
      root.style.setProperty('--card-bg', '#262626');
      root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #1890ff, #722ed1)');
      root.style.setProperty('--gradient-secondary', 'linear-gradient(135deg, #2d2d2d, #1f1f1f)');
    } else {
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#fafafa');
      root.style.setProperty('--bg-tertiary', '#f5f5f5');
      root.style.setProperty('--text-primary', '#262626');
      root.style.setProperty('--text-secondary', '#595959');
      root.style.setProperty('--text-tertiary', '#8c8c8c');
      root.style.setProperty('--border-color', '#f0f0f0');
      root.style.setProperty('--shadow-light', 'rgba(0, 0, 0, 0.04)');
      root.style.setProperty('--shadow-dark', 'rgba(0, 0, 0, 0.15)');
      root.style.setProperty('--card-bg', '#ffffff');
      root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #1890ff, #722ed1)');
      root.style.setProperty('--gradient-secondary', 'linear-gradient(135deg, #f5f7fa, #c3cfe2)');
    }
  }, [isDarkMode, theme]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};