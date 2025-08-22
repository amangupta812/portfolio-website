import React from 'react';
import { motion } from 'framer-motion';
import { useWeather } from '../context/WeatherContext';
import ForecastCard from './ForecastCard';

const ForecastSection = () => {
  const { forecast } = useWeather();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="w-full mb-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">5-Day Forecast</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {forecast.map((day, index) => (
          <ForecastCard key={day.date} day={day} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default ForecastSection;