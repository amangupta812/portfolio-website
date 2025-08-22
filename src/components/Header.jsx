import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Cloud, Search } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useWeather } from '../context/WeatherContext';
import SearchBar from './SearchBar';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { currentWeather } = useWeather();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define header animations
  const headerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Define theme toggle animations
  const iconVariants = {
    initial: { scale: 0.8, rotate: -30 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: { duration: 0.5 }
    },
    tap: { scale: 0.9 }
  };

  return (
    <motion.header 
      className={`fixed w-full z-10 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center justify-between mb-4 md:mb-0">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Cloud className="h-8 w-8 text-blue-500 mr-2" />
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
              Weather Dashboard
            </h1>
          </motion.div>
          
          <motion.button
            className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={toggleTheme}
            variants={iconVariants}
            whileTap="tap"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </motion.button>
        </div>
        
        <div className="flex flex-1 md:justify-center mx-0 md:mx-4">
          <SearchBar />
        </div>
        
        <motion.div 
          className="hidden md:flex items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={toggleTheme}
            variants={iconVariants}
            whileTap="tap"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </motion.button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;