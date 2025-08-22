import React from 'react';
import { motion } from 'framer-motion';
import { useWeather } from '../context/WeatherContext';
import { Star, Clock } from 'lucide-react';

const FavoritesSection = () => {
  const { favorites, selectFavorite } = useWeather();
  
  if (favorites.length === 0) {
    return null;
  }
  
  const formatLastViewed = (timestamp) => {
    const now = Date.now();
    const diff = now - timestamp;
    
    // Less than a minute
    if (diff < 60000) {
      return 'Just now';
    }
    
    // Less than an hour
    if (diff < 3600000) {
      const minutes = Math.floor(diff / 60000);
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    }
    
    // Less than a day
    if (diff < 86400000) {
      const hours = Math.floor(diff / 3600000);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }
    
    // More than a day
    const days = Math.floor(diff / 86400000);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    },
    hover: { 
      backgroundColor: '#F3F4F6',
      scale: 1.01,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div 
      className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
        <div className="flex items-center">
          <Star className="h-5 w-5 text-yellow-400 mr-2" />
          <span>Favorite Locations</span>
        </div>
      </h2>
      
      <div className="space-y-2">
        {favorites.map(favorite => (
          <motion.div
            key={favorite.id}
            className="p-3 rounded-lg cursor-pointer dark:hover:bg-gray-700"
            onClick={() => selectFavorite(favorite.name)}
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-gray-800 dark:text-white">{favorite.name}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{favorite.country}</span>
              </div>
              
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <Clock className="h-3 w-3 mr-1" />
                <span>{formatLastViewed(favorite.lastViewed)}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FavoritesSection;