import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudLightning, 
  CloudSnow, 
  CloudFog, 
  Wind as WindIcon 
} from 'lucide-react';

const WeatherIcon = ({ condition, size = 'medium', animate = false }) => {
  let Icon;
  let color = 'currentColor';
  
  // Determine which icon to use based on condition
  switch (condition) {
    case 'clear':
      Icon = Sun;
      color = '#FBBF24'; // Yellow for sun
      break;
    case 'partly-cloudy':
      Icon = Cloud;
      color = '#9CA3AF'; // Gray for clouds
      break;
    case 'cloudy':
      Icon = Cloud;
      color = '#9CA3AF';
      break;
    case 'rain':
      Icon = CloudRain;
      color = '#60A5FA'; // Blue for rain
      break;
    case 'thunderstorm':
      Icon = CloudLightning;
      color = '#8B5CF6'; // Purple for thunderstorm
      break;
    case 'snow':
      Icon = CloudSnow;
      color = '#E5E7EB'; // Light gray for snow
      break;
    case 'fog':
      Icon = CloudFog;
      color = '#9CA3AF';
      break;
    case 'wind':
      Icon = WindIcon;
      color = '#9CA3AF';
      break;
    default:
      Icon = Cloud;
  }
  
  // Determine icon size
  let iconSize;
  switch (size) {
    case 'small':
      iconSize = 'h-6 w-6';
      break;
    case 'medium':
      iconSize = 'h-10 w-10';
      break;
    case 'large':
      iconSize = 'h-16 w-16';
      break;
    default:
      iconSize = 'h-10 w-10';
  }
  
  // Animation variants
  const sunVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };
  
  const cloudVariants = {
    animate: {
      x: [0, 5, 0, -5, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  const rainVariants = {
    animate: {
      y: [0, 5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  // Select animation variant based on condition
  let animationVariant;
  if (animate) {
    if (condition === 'clear') {
      animationVariant = sunVariants;
    } else if (condition === 'partly-cloudy' || condition === 'cloudy' || condition === 'fog') {
      animationVariant = cloudVariants;
    } else if (condition === 'rain' || condition === 'thunderstorm' || condition === 'snow') {
      animationVariant = rainVariants;
    }
  }
  
  return (
    <motion.div
      variants={animationVariant}
      animate={animate ? "animate" : ""}
    >
      <Icon className={`${iconSize}`} style={{ color }} />
    </motion.div>
  );
};

export default WeatherIcon;