import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Wind } from 'lucide-react';
import WeatherIcon from './WeatherIcon';

const ForecastCard = ({ day, index }) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.1
      }
    },
    hover: { 
      y: -5,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
    }
  };

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-4"
      variants={cardVariants}
      whileHover="hover"
    >
      <div className="flex flex-col h-full">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{day.day}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{day.date}</p>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <WeatherIcon condition={day.condition} size="medium" animate={true} />
          
          <div className="text-right">
            <span className="text-lg font-bold text-gray-800 dark:text-white">
              {day.temperature.max}°
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
              {day.temperature.min}°
            </span>
          </div>
        </div>
        
        <div className="flex justify-between text-sm mt-auto">
          <div className="flex items-center">
            <Droplets className="h-4 w-4 text-blue-500 mr-1" />
            <span className="text-gray-600 dark:text-gray-300">{day.humidity}%</span>
          </div>
          
          <div className="flex items-center">
            <Wind className="h-4 w-4 text-blue-500 mr-1" />
            <span className="text-gray-600 dark:text-gray-300">{day.windSpeed} mph</span>
          </div>
          
          <div className="flex items-center">
            <div className={`w-2 h-2 rounded-full mr-1 ${
              day.precipitation <= 20 ? 'bg-green-500' : 
              day.precipitation <= 50 ? 'bg-yellow-500' : 'bg-red-500'
            }`}></div>
            <span className="text-gray-600 dark:text-gray-300">{day.precipitation}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ForecastCard;