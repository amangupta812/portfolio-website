import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Clock, Star } from 'lucide-react';
import { useWeather } from '../context/WeatherContext';
import { mockSearchResults } from '../data/mockWeatherData';

const SearchBar = () => {
  const { 
    fetchWeatherByCity, 
    searchHistory, 
    isLoading,
    favorites,
    selectFavorite
  } = useWeather();
  
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState('results');
  
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Handle search query changes
  useEffect(() => {
    if (query.length >= 2) {
      // Simulate API call with mock data
      const filteredResults = mockSearchResults.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
      setShowDropdown(true);
      setActiveTab('results');
    } else {
      setResults([]);
      if (showDropdown && query.length === 0) {
        setActiveTab(favorites.length > 0 ? 'favorites' : 'history');
      }
    }
  }, [query, favorites]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchWeatherByCity(query.trim());
      setShowDropdown(false);
      setQuery('');
    }
  };

  const handleSelectCity = (cityName) => {
    fetchWeatherByCity(cityName);
    setShowDropdown(false);
    setQuery('');
  };

  const handleSelectFavorite = (cityName) => {
    selectFavorite(cityName);
    setShowDropdown(false);
    setQuery('');
  };

  const handleFocus = () => {
    setShowDropdown(true);
    if (query.length < 2) {
      setActiveTab(favorites.length > 0 ? 'favorites' : 'history');
    }
  };

  const clearSearch = () => {
    setQuery('');
    inputRef.current.focus();
  };

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2 }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  const tabVariants = {
    inactive: { color: '#9CA3AF', borderColor: 'transparent' },
    active: { 
      color: '#3B82F6', 
      borderColor: '#3B82F6',
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="relative w-full max-w-2xl" ref={searchRef}>
      <form onSubmit={handleSearch} className="w-full">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className={`h-5 w-5 ${isLoading ? 'text-blue-500 animate-pulse' : 'text-gray-400'}`} />
          </div>
          
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={handleFocus}
            className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Search for a city..."
            disabled={isLoading}
          />
          
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <X className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
            </button>
          )}
        </div>
      </form>
      
      <AnimatePresence>
        {showDropdown && (favorites.length > 0 || searchHistory.length > 0 || results.length > 0) && (
          <motion.div
            className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {(searchHistory.length > 0 || favorites.length > 0) && (
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                {favorites.length > 0 && (
                  <motion.button
                    className={`flex-1 py-2 px-4 text-sm font-medium ${
                      activeTab === 'favorites' ? 'border-b-2 border-blue-500' : ''
                    }`}
                    onClick={() => setActiveTab('favorites')}
                    variants={tabVariants}
                    animate={activeTab === 'favorites' ? 'active' : 'inactive'}
                  >
                    <div className="flex items-center justify-center">
                      <Star className="h-4 w-4 mr-1" />
                      <span>Favorites</span>
                    </div>
                  </motion.button>
                )}
                
                {searchHistory.length > 0 && (
                  <motion.button
                    className={`flex-1 py-2 px-4 text-sm font-medium ${
                      activeTab === 'history' ? 'border-b-2 border-blue-500' : ''
                    }`}
                    onClick={() => setActiveTab('history')}
                    variants={tabVariants}
                    animate={activeTab === 'history' ? 'active' : 'inactive'}
                  >
                    <div className="flex items-center justify-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Recent</span>
                    </div>
                  </motion.button>
                )}
                
                {results.length > 0 && (
                  <motion.button
                    className={`flex-1 py-2 px-4 text-sm font-medium ${
                      activeTab === 'results' ? 'border-b-2 border-blue-500' : ''
                    }`}
                    onClick={() => setActiveTab('results')}
                    variants={tabVariants}
                    animate={activeTab === 'results' ? 'active' : 'inactive'}
                  >
                    <div className="flex items-center justify-center">
                      <Search className="h-4 w-4 mr-1" />
                      <span>Results</span>
                    </div>
                  </motion.button>
                )}
              </div>
            )}
            
            <div className="max-h-64 overflow-y-auto">
              {activeTab === 'results' && results.length > 0 && (
                <div>
                  {results.map(result => (
                    <div
                      key={result.id}
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleSelectCity(result.name)}
                    >
                      <div className="text-gray-800 dark:text-white">{result.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{result.country}</div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'history' && searchHistory.length > 0 && (
                <div>
                  {searchHistory.map((city, index) => (
                    <div
                      key={`history-${index}`}
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center"
                      onClick={() => handleSelectCity(city)}
                    >
                      <Clock className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-800 dark:text-white">{city}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'favorites' && favorites.length > 0 && (
                <div>
                  {favorites.map(favorite => (
                    <div
                      key={favorite.id}
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center"
                      onClick={() => handleSelectFavorite(favorite.name)}
                    >
                      <Star className="h-4 w-4 text-yellow-400 mr-2" />
                      <div>
                        <div className="text-gray-800 dark:text-white">{favorite.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{favorite.country}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;