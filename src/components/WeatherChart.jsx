import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { useWeather } from '../context/WeatherContext';
import { useTheme } from '../context/ThemeContext';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const WeatherChart = () => {
  const { hourlyForecast } = useWeather();
  const { theme } = useTheme();
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });
  
  useEffect(() => {
    // Prepare chart data
    const hours = hourlyForecast.map(hour => hour.hour);
    const temperatures = hourlyForecast.map(hour => hour.temperature);
    
    // Determine gradient colors based on theme
    const isDark = theme === 'dark';
    
    setChartData({
      labels: hours,
      datasets: [
        {
          label: 'Temperature (°F)',
          data: temperatures,
          borderColor: isDark ? '#60A5FA' : '#3B82F6',
          backgroundColor: context => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            
            if (!chartArea) {
              return;
            }
            
            const gradient = ctx.createLinearGradient(
              0, chartArea.bottom, 0, chartArea.top
            );
            
            if (isDark) {
              gradient.addColorStop(0, 'rgba(96, 165, 250, 0)');
              gradient.addColorStop(1, 'rgba(96, 165, 250, 0.3)');
            } else {
              gradient.addColorStop(0, 'rgba(59, 130, 246, 0)');
              gradient.addColorStop(1, 'rgba(59, 130, 246, 0.3)');
            }
            
            return gradient;
          },
          borderWidth: 2,
          pointBackgroundColor: isDark ? '#60A5FA' : '#3B82F6',
          pointRadius: 3,
          pointHoverRadius: 5,
          tension: 0.4,
          fill: true
        }
      ]
    });
  }, [hourlyForecast, theme]);
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: theme === 'dark' ? '#1F2937' : '#FFFFFF',
        titleColor: theme === 'dark' ? '#F9FAFB' : '#1F2937',
        bodyColor: theme === 'dark' ? '#F3F4F6' : '#4B5563',
        borderColor: theme === 'dark' ? '#374151' : '#E5E7EB',
        borderWidth: 1,
        displayColors: false,
        padding: 10,
        cornerRadius: 6,
        callbacks: {
          label: function(context) {
            return `${context.parsed.y}°F`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          color: theme === 'dark' ? '#9CA3AF' : '#6B7280',
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 12
        }
      },
      y: {
        position: 'right',
        grid: {
          color: theme === 'dark' ? 'rgba(75, 85, 99, 0.2)' : 'rgba(209, 213, 219, 0.4)',
          drawBorder: false
        },
        ticks: {
          color: theme === 'dark' ? '#9CA3AF' : '#6B7280',
          padding: 8,
          callback: function(value) {
            return `${value}°`;
          }
        },
        min: Math.floor(Math.min(...hourlyForecast.map(h => h.temperature)) - 5),
        max: Math.ceil(Math.max(...hourlyForecast.map(h => h.temperature)) + 5)
      }
    },
    interaction: {
      mode: 'index',
      intersect: false
    },
    elements: {
      point: {
        radius: 0,
        hoverRadius: 6
      }
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.4 }
    }
  };

  return (
    <motion.div 
      className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 mb-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">24-Hour Forecast</h2>
      
      <div className="h-64">
        <Line data={chartData} options={chartOptions} />
      </div>
    </motion.div>
  );
};

export default WeatherChart;