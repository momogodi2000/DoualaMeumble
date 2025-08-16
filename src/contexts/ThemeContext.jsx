/**
 * Theme Context for Color Theme Management
 * Supports multiple color themes with smooth transitions
 */

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Available themes with color palettes
const themes = {
  luxury: {
    name: 'Luxury Gold',
    colors: {
      primary: '#D4A574',
      secondary: '#1E3A5F',
      accent: '#27AE60',
      background: '#FFFFFF',
      surface: '#F8F9FA',
      text: '#2C2C2C'
    },
    icon: '👑'
  },
  ocean: {
    name: 'Ocean Blue',
    colors: {
      primary: '#0EA5E9',
      secondary: '#1E40AF',
      accent: '#10B981',
      background: '#FFFFFF',
      surface: '#F0F9FF',
      text: '#1E293B'
    },
    icon: '🌊'
  },
  sunset: {
    name: 'Sunset Orange',
    colors: {
      primary: '#F97316',
      secondary: '#DC2626',
      accent: '#84CC16',
      background: '#FFFFFF',
      surface: '#FFF7ED',
      text: '#1F2937'
    },
    icon: '🌅'
  },
  forest: {
    name: 'Forest Green',
    colors: {
      primary: '#059669',
      secondary: '#065F46',
      accent: '#7C3AED',
      background: '#FFFFFF',
      surface: '#F0FDF4',
      text: '#1F2937'
    },
    icon: '🌲'
  },
  royal: {
    name: 'Royal Purple',
    colors: {
      primary: '#7C3AED',
      secondary: '#5B21B6',
      accent: '#F59E0B',
      background: '#FFFFFF',
      surface: '#FAF5FF',
      text: '#1F2937'
    },
    icon: '💜'
  },
  dark: {
    name: 'Dark Mode',
    colors: {
      primary: '#D4A574',
      secondary: '#60A5FA',
      accent: '#34D399',
      background: '#111827',
      surface: '#1F2937',
      text: '#F9FAFB'
    },
    icon: '🌙'
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    // Get from localStorage or default to luxury
    const saved = localStorage.getItem('theme');
    return saved || 'luxury';
  });

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('theme', currentTheme);
    
    // Apply CSS custom properties to document root
    const theme = themes[currentTheme];
    const root = document.documentElement;
    
    // Set CSS custom properties
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    
    // Add theme class to body for additional styling
    document.body.className = document.body.className
      .replace(/theme-\w+/g, '') + ` theme-${currentTheme}`;
      
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.content = theme.colors.primary;
    }

    // Apply theme colors to all components that need theme colors
    const event = new CustomEvent('themeChanged', { 
      detail: { 
        theme: currentTheme, 
        colors: theme.colors 
      } 
    });
    window.dispatchEvent(event);
  }, [currentTheme]);

  const setTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  const toggleDarkMode = () => {
    setCurrentTheme(prev => prev === 'dark' ? 'luxury' : 'dark');
  };

  const getThemeColors = (themeName = currentTheme) => {
    return themes[themeName]?.colors || themes.luxury.colors;
  };

  const value = {
    currentTheme,
    setTheme,
    toggleDarkMode,
    getThemeColors,
    isDark: currentTheme === 'dark',
    availableThemes: Object.entries(themes).map(([key, theme]) => ({
      key,
      name: theme.name,
      icon: theme.icon,
      colors: theme.colors
    }))
  };

  return (
    <ThemeContext.Provider value={value}>
      <div 
        className="min-h-screen transition-colors duration-500 ease-in-out"
        style={{
          backgroundColor: themes[currentTheme].colors.background,
          color: themes[currentTheme].colors.text
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};