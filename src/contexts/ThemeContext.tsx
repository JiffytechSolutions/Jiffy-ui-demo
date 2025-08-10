import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setThemeState] = useState<Theme>(() => {
        // Check localStorage first
        const savedTheme = localStorage.getItem('jiffy-ui-theme') as Theme;
        if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
            return savedTheme;
        }
        
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        
        return 'light';
    });

    const setTheme = (newTheme: Theme) => {
        console.log('Setting theme to:', newTheme);
        setThemeState(newTheme);
        localStorage.setItem('jiffy-ui-theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        console.log('Document theme attribute set to:', document.documentElement.getAttribute('data-theme'));
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        console.log('Toggling theme from', theme, 'to', newTheme);
        setTheme(newTheme);
    };

    useEffect(() => {
        // Set initial theme
        console.log('useEffect: Setting initial theme to:', theme);
        document.documentElement.setAttribute('data-theme', theme);
        console.log('useEffect: Document theme attribute:', document.documentElement.getAttribute('data-theme'));
        
        // Listen for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem('jiffy-ui-theme')) {
                console.log('System theme changed to:', e.matches ? 'dark' : 'light');
                setTheme(e.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme]);

    const value = {
        theme,
        toggleTheme,
        setTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};