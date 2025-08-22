import React from 'react';
import { motion } from 'framer-motion';
import { Star, Droplets, Wind, Eye, Sun, ArrowUp } from 'lucide-react';
import { useWeather } from '../context/WeatherContext';
import WeatherIcon from './WeatherIcon';

const CurrentWeather = () => {
  const { currentWeather, toggleFavorite, isFavorite } = useWeather();
  
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const favoriteVariants = {
    initial: { scale: 1 },
    tapped: { scale: 1.2, rotate: 15, transition: { duration: 0.2 } },
    favorite: { scale: 1, color: '#FBBF24' },
    notFavorite: { scale: 1, color: '#9CA3AF' }
  };

  return (
    <motion.div 
      className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 mb-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between items-start mb-4">
        <motion.div variants={itemVariants}>
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {currentWeather.cityName}
            </h2>
            <span className="ml-1 text-gray-500 dark:text-gray-400">{currentWeather.country}</span>
            
            <motion.button
              className="ml-2 focus:outline-none"
              onClick={() => toggleFavorite({ 
                name: currentWeather.cityName,
                country: currentWeather.country
              })}
              variants={favoriteVariants}
              initial="initial"
              animate={isFavorite(currentWeather.cityName) ? "favorite" : "notFavorite"}
              whileTap="tapped"
            >
              <Star className="h-5 w-5" />
            </motion.button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Updated at {formatTime(currentWeather.timestamp)}
          </p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          className="flex items-center"
          variants={itemVariants}
        >
          <div className="mr-4">
            <WeatherIcon 
              condition={currentWeather.condition} 
              size="large" 
              animate={true}
            />
          </div>
          
          <div>
            <div className="flex items-start">
              <span className="text-5xl font-bold text-gray-800 dark:text-white">
                {currentWeather.temperature}°
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 capitalize">
              {currentWeather.condition.replace('-', ' ')}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Feels like {currentWeather.feelsLike}°
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 gap-4"
          variants={itemVariants}
        >
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <Droplets className="h-4 w-4 text-blue-500 mr-2" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Humidity</span>
            </div>
            <span className="text-lg font-medium text-gray-800 dark:text-white">{currentWeather.humidity}%</span>
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <Wind className="h-4 w-4 text-blue-500 mr-2" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Wind</span>
            </div>
            <span className="text-lg font-medium text-gray-800 dark:text-white">
              {currentWeather.windSpeed} mph
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {currentWeather.windDirection}
            </span>
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <ArrowUp className="h-4 w-4 text-blue-500 mr-2" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Pressure</span>
            </div>
            <span className="text-lg font-medium text-gray-800 dark:text-white">
              {currentWeather.pressure} hPa
            </span>
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <Sun className="h-4 w-4 text-yellow-500 mr-2" />
              <span className="text-sm text-gray-500 dark:text-gray-400">UV Index</span>
            </div>
            <span className="text-lg font-medium text-gray-800 dark:text-white">
              {currentWeather.uvIndex}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {currentWeather.uvIndex <= 2 ? 'Low' : 
               currentWeather.uvIndex <= 5 ? 'Moderate' : 
               currentWeather.uvIndex <= 7 ? 'High' : 'Very High'}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CurrentWeather;