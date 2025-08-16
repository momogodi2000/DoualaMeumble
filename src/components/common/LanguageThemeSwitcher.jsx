/**
 * Language and Theme Switcher Component
 * Combined controls for language and theme switching
 */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Palette, 
  Check, 
  ChevronDown,
  Sun,
  Moon,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';

const LanguageThemeSwitcher = ({ variant = 'header' }) => {
  const { language, availableLanguages, setLanguage, t } = useLanguage();
  const { currentTheme, availableThemes, setTheme, isDark, toggleDarkMode, getThemeColors } = useTheme();
  
  const colors = getThemeColors();
  
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  
  const languageRef = useRef(null);
  const themeRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setShowLanguageMenu(false);
      }
      if (themeRef.current && !themeRef.current.contains(event.target)) {
        setShowThemeMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguage = availableLanguages.find(lang => lang.code === language);
  const currentThemeData = availableThemes.find(theme => theme.key === currentTheme);

  const menuVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95, 
      y: -10,
      transition: { duration: 0.15 }
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  if (variant === 'floating') {
    return (
      <div className="fixed bottom-6 left-6 z-50 flex flex-col space-y-3">
        {/* Language Switcher */}
        <div className="relative" ref={languageRef}>
          <motion.button
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            className="w-12 h-12 bg-white shadow-luxury rounded-full flex items-center justify-center text-gray-700 transition-colors"
            style={{ color: colors.primary }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Globe className="w-5 h-5" />
          </motion.button>

          <AnimatePresence>
            {showLanguageMenu && (
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute bottom-full left-0 mb-2 bg-white rounded-xl shadow-luxury border border-gray-100 py-2 min-w-[150px]"
              >
                <motion.div variants={staggerContainer}>
                  {availableLanguages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      variants={itemVariants}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLanguageMenu(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors flex items-center justify-between ${
                        language === lang.code ? 'text-gold-600 bg-gold-50' : 'text-gray-700'
                      }`}
                    >
                      <span className="flex items-center">
                        <span className="mr-3 text-lg">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                      </span>
                      {language === lang.code && <Check className="w-4 h-4" />}
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Theme Switcher */}
        <div className="relative" ref={themeRef}>
          <motion.button
            onClick={() => setShowThemeMenu(!showThemeMenu)}
            className="w-12 h-12 bg-white shadow-luxury rounded-full flex items-center justify-center transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: colors.background }}
          >
            <Palette className="w-5 h-5" style={{ color: colors.primary }} />
          </motion.button>

          <AnimatePresence>
            {showThemeMenu && (
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute bottom-full left-0 mb-2 bg-white rounded-xl shadow-luxury border border-gray-100 py-2 min-w-[200px]"
              >
                <motion.div variants={staggerContainer}>
                  {availableThemes.map((theme) => (
                    <motion.button
                      key={theme.key}
                      variants={itemVariants}
                      onClick={() => {
                        setTheme(theme.key);
                        setShowThemeMenu(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors flex items-center justify-between ${
                        currentTheme === theme.key ? 'text-gold-600 bg-gold-50' : 'text-gray-700'
                      }`}
                    >
                      <span className="flex items-center">
                        <span className="mr-3 text-lg">{theme.icon}</span>
                        <span className="font-medium">{theme.name}</span>
                        <div 
                          className="ml-3 w-4 h-4 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: theme.colors.primary }}
                        />
                      </span>
                      {currentTheme === theme.key && <Check className="w-4 h-4" />}
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // Header variant
  return (
    <div className="flex items-center space-x-4">
      {/* Language Switcher */}
      <div className="relative" ref={languageRef}>
        <motion.button
          onClick={() => setShowLanguageMenu(!showLanguageMenu)}
          className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 transition-colors"
          style={{ 
            color: colors.text,
            backgroundColor: showLanguageMenu ? `${colors.primary}20` : 'transparent'
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline text-sm font-medium">{currentLanguage?.name}</span>
          <span className="sm:hidden text-lg">{currentLanguage?.flag}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${showLanguageMenu ? 'rotate-180' : ''}`} />
        </motion.button>

        <AnimatePresence>
          {showLanguageMenu && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-luxury border border-gray-100 py-2 min-w-[150px] z-50"
            >
              <motion.div variants={staggerContainer}>
                {availableLanguages.map((lang) => (
                  <motion.button
                    key={lang.code}
                    variants={itemVariants}
                    onClick={() => {
                      setLanguage(lang.code);
                      setShowLanguageMenu(false);
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors flex items-center justify-between ${
                      language === lang.code ? 'bg-gray-50' : 'text-gray-700'
                    }`}
                    style={language === lang.code ? { color: colors.primary } : {}}
                  >
                    <span className="flex items-center">
                      <span className="mr-3 text-lg">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </span>
                    {language === lang.code && <Check className="w-4 h-4" />}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Theme Switcher */}
      <div className="relative" ref={themeRef}>
        <motion.button
          onClick={() => setShowThemeMenu(!showThemeMenu)}
          className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors"
          style={{ 
            color: colors.text,
            backgroundColor: showThemeMenu ? `${colors.primary}20` : 'transparent'
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Palette className="w-4 h-4" />
          <span className="hidden md:inline text-sm font-medium">{currentThemeData?.name}</span>
          <div 
            className="w-3 h-3 rounded-full border border-white shadow-sm"
            style={{ backgroundColor: colors.primary }}
          />
          <ChevronDown className={`w-4 h-4 transition-transform ${showThemeMenu ? 'rotate-180' : ''}`} />
        </motion.button>

        <AnimatePresence>
          {showThemeMenu && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-luxury border border-gray-100 py-2 min-w-[200px] z-50"
            >
              <motion.div variants={staggerContainer}>
                {/* Quick Dark Mode Toggle */}
                <motion.button
                  variants={itemVariants}
                  onClick={() => {
                    toggleDarkMode();
                    setShowThemeMenu(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors flex items-center justify-between border-b border-gray-100 mb-2"
                >
                  <span className="flex items-center">
                    {isDark ? <Sun className="w-4 h-4 mr-3" /> : <Moon className="w-4 h-4 mr-3" />}
                    <span className="font-medium">
                      {isDark ? 'Mode Clair' : 'Mode Sombre'}
                    </span>
                  </span>
                  <div className={`w-8 h-4 rounded-full transition-colors ${isDark ? 'bg-gold-500' : 'bg-gray-300'} relative`}>
                    <div className={`w-3 h-3 rounded-full bg-white absolute top-0.5 transition-transform ${isDark ? 'translate-x-4' : 'translate-x-0.5'}`} />
                  </div>
                </motion.button>

                {/* Theme Options */}
                {availableThemes.filter(theme => theme.key !== 'dark').map((theme) => (
                  <motion.button
                    key={theme.key}
                    variants={itemVariants}
                    onClick={() => {
                      setTheme(theme.key);
                      setShowThemeMenu(false);
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors flex items-center justify-between ${
                      currentTheme === theme.key ? 'bg-gray-50' : 'text-gray-700'
                    }`}
                    style={currentTheme === theme.key ? { color: colors.primary } : {}}
                  >
                    <span className="flex items-center">
                      <span className="mr-3 text-lg">{theme.icon}</span>
                      <span className="font-medium">{theme.name}</span>
                      <div 
                        className="ml-3 w-4 h-4 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: theme.colors.primary }}
                      />
                    </span>
                    {currentTheme === theme.key && <Check className="w-4 h-4" />}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LanguageThemeSwitcher;