// Mock current time for consistent data
const NOW = new Date();
const TIMESTAMP = NOW.getTime();

// Generate hours for the day
const generateHours = () => {
  const hours = [];
  const currentHour = NOW.getHours();
  
  for (let i = 0; i < 24; i++) {
    const hour = (currentHour + i) % 24;
    hours.push(`${hour}:00`);
  }
  
  return hours;
};

// Generate days of the week
const generateDayNames = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = NOW.getDay();
  
  return Array(5).fill(0).map((_, index) => {
    const dayIndex = (currentDay + index) % 7;
    return days[dayIndex];
  });
};

// Generate formatted dates
const generateDates = () => {
  return Array(5).fill(0).map((_, index) => {
    const date = new Date(NOW);
    date.setDate(date.getDate() + index);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  });
};

const days = generateDayNames();
const dates = generateDates();
const hours = generateHours();

export const mockWeatherData = {
  current: {
    cityName: 'New York',
    country: 'US',
    temperature: 72,
    condition: 'partly-cloudy',
    humidity: 65,
    windSpeed: 8,
    windDirection: 'NE',
    pressure: 1012,
    feelsLike: 74,
    visibility: 10,
    uvIndex: 5,
    timestamp: TIMESTAMP
  },
  forecast: [
    {
      date: dates[0],
      day: days[0],
      temperature: { min: 68, max: 76 },
      condition: 'partly-cloudy',
      precipitation: 10,
      humidity: 65,
      windSpeed: 8
    },
    {
      date: dates[1],
      day: days[1],
      temperature: { min: 70, max: 82 },
      condition: 'clear',
      precipitation: 0,
      humidity: 60,
      windSpeed: 6
    },
    {
      date: dates[2],
      day: days[2],
      temperature: { min: 75, max: 86 },
      condition: 'clear',
      precipitation: 0,
      humidity: 55,
      windSpeed: 5
    },
    {
      date: dates[3],
      day: days[3],
      temperature: { min: 72, max: 80 },
      condition: 'cloudy',
      precipitation: 30,
      humidity: 70,
      windSpeed: 10
    },
    {
      date: dates[4],
      day: days[4],
      temperature: { min: 68, max: 76 },
      condition: 'rain',
      precipitation: 80,
      humidity: 80,
      windSpeed: 12
    }
  ],
  hourly: Array(24).fill(0).map((_, index) => {
    // Create some variation in the hourly temperatures
    const baseTemp = 72;
    const hourOffset = index < 12 ? index : 24 - index;
    const temperature = baseTemp + (hourOffset < 6 ? hourOffset : 12 - hourOffset);
    
    // Determine condition based on time of day
    let condition = 'partly-cloudy';
    if (index >= 20 || index <= 5) {
      condition = 'clear'; // Night time is clear
    } else if (index >= 10 && index <= 14) {
      condition = 'cloudy'; // Mid day is cloudy
    }
    
    return {
      hour: hours[index],
      temperature,
      condition: condition
    };
  })
};

export const mockSearchResults = [
  { id: '1', name: 'New York', country: 'US' },
  { id: '2', name: 'Los Angeles', country: 'US' },
  { id: '3', name: 'Chicago', country: 'US' },
  { id: '4', name: 'London', country: 'UK' },
  { id: '5', name: 'Paris', country: 'FR' },
  { id: '6', name: 'Tokyo', country: 'JP' },
  { id: '7', name: 'Sydney', country: 'AU' },
  { id: '8', name: 'Berlin', country: 'DE' },
  { id: '9', name: 'Madrid', country: 'ES' },
  { id: '10', name: 'Rome', country: 'IT' }
];

export const mockFavorites = [
  { id: '1', name: 'New York', country: 'US', lastViewed: TIMESTAMP },
  { id: '4', name: 'London', country: 'UK', lastViewed: TIMESTAMP - 86400000 },
  { id: '6', name: 'Tokyo', country: 'JP', lastViewed: TIMESTAMP - 172800000 }
];