import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockWeatherData, mockFavorites } from '../data/mockWeatherData';

const WeatherContext = createContext(undefined);

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};

export const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(mockWeatherData.current);
  const [forecast, setForecast] = useState(mockWeatherData.forecast);
  const [hourlyForecast, setHourlyForecast] = useState(mockWeatherData.hourly);
  const [favorites, setFavorites] = useState(mockFavorites);
  const [searchHistory, setSearchHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Simulate fetching weather data for a city
  const fetchWeatherByCity = (cityName) => {
    setIsLoading(true);
    setError(null);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      try {
        // Update city name in the mock data
        const updatedCurrentWeather = {
          ...mockWeatherData.current,
          cityName: cityName,
          timestamp: Date.now()
        };
        
        setCurrentWeather(updatedCurrentWeather);
        setForecast(mockWeatherData.forecast);
        setHourlyForecast(mockWeatherData.hourly);
        
        // Add to search history
        updateSearchHistory(cityName);
        
        setIsLoading(false);
      } catch (err) {
        setError('Error fetching weather data');
        setIsLoading(false);
      }
    }, 800);
  };

  // Update search history
  const updateSearchHistory = (cityName) => {
    setSearchHistory(prevHistory => {
      // Remove if exists and add to the beginning
      const newHistory = prevHistory.filter(city => 
        city.toLowerCase() !== cityName.toLowerCase()
      );
      
      return [cityName, ...newHistory].slice(0, 5); // Keep only last 5 searches
    });
  };

  // Toggle favorite location
  const toggleFavorite = (cityData) => {
    setFavorites(prevFavorites => {
      const isFavorite = prevFavorites.some(fav => 
        fav.name.toLowerCase() === cityData.name.toLowerCase()
      );
      
      if (isFavorite) {
        // Remove from favorites
        return prevFavorites.filter(fav => 
          fav.name.toLowerCase() !== cityData.name.toLowerCase()
        );
      } else {
        // Add to favorites
        const newFavorite = {
          id: `fav-${Date.now()}`,
          name: cityData.name,
          country: cityData.country || 'US',
          lastViewed: Date.now()
        };
        
        return [newFavorite, ...prevFavorites];
      }
    });
  };

  // Check if a city is in favorites
  const isFavorite = (cityName) => {
    return favorites.some(fav => fav.name.toLowerCase() === cityName.toLowerCase());
  };

  // Select a favorite city
  const selectFavorite = (cityName) => {
    fetchWeatherByCity(cityName);
    
    // Update last viewed timestamp
    setFavorites(prevFavorites => {
      return prevFavorites.map(fav => {
        if (fav.name.toLowerCase() === cityName.toLowerCase()) {
          return { ...fav, lastViewed: Date.now() };
        }
        return fav;
      });
    });
  };

  return (
    <WeatherContext.Provider value={{
      currentWeather,
      forecast,
      hourlyForecast,
      favorites,
      searchHistory,
      isLoading,
      error,
      fetchWeatherByCity,
      toggleFavorite,
      isFavorite,
      selectFavorite
    }}>
      {children}
    </WeatherContext.Provider>
  );
};