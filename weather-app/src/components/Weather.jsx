import React, { useState, useEffect } from 'react'
import WeatherSearch from './WeatherSearch'
import WeatherHeader from './WeatherHeader'
import CurrentWeather from './CurrentWeather'
import WeatherDetails from './WeatherDetails'
import SunMoonData from './SunMoonData'
import WeatherForecast from './WeatherForecast'
import AirQuality from './AirQuality'
import WeatherFooter from './WeatherFooter'
import Loading from './Loading'
import ErrorDisplay from './ErrorDisplay'

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [location, setLocation] = useState('London')
  const [unit, setUnit] = useState('metric') // metric or imperial
  const [lastUpdated, setLastUpdated] = useState(null)

  const API_KEY = 'cb6c9f72500b444c893183431252107'
  const CURRENT_API_URL = 'https://api.weatherapi.com/v1/current.json'
  const FORECAST_API_URL = 'https://api.weatherapi.com/v1/forecast.json'

  const fetchWeather = async (city) => {
    try {
      setLoading(true)
      setError(null)
      
      // Fetch current weather and forecast data in parallel
      const [currentResponse, forecastResponse] = await Promise.all([
        fetch(`${CURRENT_API_URL}?key=${API_KEY}&q=${city}&aqi=yes`),
        fetch(`${FORECAST_API_URL}?key=${API_KEY}&q=${city}&days=3&aqi=yes&alerts=yes`)
      ])
      
      if (!currentResponse.ok || !forecastResponse.ok) {
        throw new Error('Weather data not found for this location')
      }
      
      const [currentData, forecastData] = await Promise.all([
        currentResponse.json(),
        forecastResponse.json()
      ])
      
      setWeatherData(currentData)
      setForecastData(forecastData)
      setLastUpdated(new Date().toLocaleString())
    } catch (err) {
      setError(err.message)
      console.error('Weather fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather(location)
  }, [])

  const handleLocationChange = (e) => {
    e.preventDefault()
    const newLocation = e.target.location.value.trim()
    if (newLocation) {
      setLocation(newLocation)
      fetchWeather(newLocation)
    }
  }

  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric')
  }

  const handleRetry = () => {
    fetchWeather(location)
  }

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorDisplay error={error} onRetry={handleRetry} />
  }

  return (
    <div style={styles.container}>
      <div style={styles.weatherCard}>
        <WeatherSearch 
          onLocationChange={handleLocationChange}
          onUnitToggle={toggleUnit}
          unit={unit}
        />
        
        <WeatherHeader weatherData={weatherData} />
        
        <CurrentWeather weatherData={weatherData} unit={unit} />
        
        <WeatherDetails weatherData={weatherData} unit={unit} />
        
        <SunMoonData forecastData={forecastData} />
        
        <WeatherForecast forecastData={forecastData} unit={unit} />
        
        <AirQuality weatherData={weatherData} />
        
        <WeatherFooter weatherData={weatherData} lastUpdated={lastUpdated} />
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
    padding: '10px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (min-width: 768px)': {
      padding: '20px'
    },
    '@media (min-width: 1200px)': {
      padding: '30px'
    }
  },
  weatherCard: {
    maxWidth: '100%',
    width: '100%',
    margin: '0 auto',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '15px',
    padding: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    '@media (min-width: 480px)': {
      padding: '20px',
      borderRadius: '18px'
    },
    '@media (min-width: 768px)': {
      maxWidth: '800px',
      padding: '30px',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
    },
    '@media (min-width: 1024px)': {
      maxWidth: '900px',
      padding: '35px'
    },
    '@media (min-width: 1200px)': {
      maxWidth: '1000px',
      padding: '40px'
    }
  },
  topControls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '30px',
    gap: '15px'
  },
  searchForm: {
    display: 'flex',
    gap: '10px',
    flex: 1
  },
  unitToggle: {
    padding: '12px 16px',
    backgroundColor: 'rgba(116, 185, 255, 0.2)',
    color: '#0984e3',
    border: '2px solid #0984e3',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    minWidth: '60px'
  },
  searchInput: {
    flex: 1,
    padding: '12px 16px',
    border: '2px solid #e0e0e0',
    borderRadius: '10px',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s ease'
  },
  searchButton: {
    padding: '12px 20px',
    backgroundColor: '#0984e3',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px'
  },
  cityName: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#2d3436',
    margin: '0 0 10px 0'
  },
  localTime: {
    fontSize: '16px',
    color: '#636e72',
    margin: '0 0 5px 0'
  },
  coordinates: {
    fontSize: '14px',
    color: '#636e72',
    margin: 0
  },
  mainWeather: {
    textAlign: 'center',
    marginBottom: '40px'
  },
  temperature: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '15px'
  },
  tempIcon: {
    fontSize: '70px',
    filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))'
  },
  tempValue: {
    fontSize: '72px',
    fontWeight: 'bold',
    color: '#2d3436',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
  },
  condition: {
    fontSize: '24px',
    color: '#2d3436',
    margin: '0 0 10px 0',
    fontWeight: '500'
  },
  feelsLike: {
    fontSize: '16px',
    color: '#636e72',
    margin: 0
  },
  details: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '20px',
    marginBottom: '30px'
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '15px',
    backgroundColor: 'rgba(116, 185, 255, 0.1)',
    borderRadius: '12px'
  },
  detailIcon: {
    fontSize: '24px'
  },
  detailLabel: {
    fontSize: '14px',
    color: '#636e72',
    margin: '0 0 5px 0'
  },
  detailValue: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#2d3436',
    margin: 0
  },
  detailSubValue: {
    fontSize: '12px',
    color: '#636e72',
    margin: '3px 0 0 0'
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#2d3436',
    margin: '0 0 15px 0',
    textAlign: 'center'
  },
  airQuality: {
    backgroundColor: 'rgba(116, 185, 255, 0.1)',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '20px'
  },
  aqiTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#2d3436',
    margin: '0 0 15px 0'
  },
  aqiContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '15px'
  },
  aqiValue: {
    padding: '8px 16px',
    borderRadius: '20px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px'
  },
  aqiLabel: {
    fontSize: '16px',
    color: '#2d3436',
    margin: 0
  },
  pollutants: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '10px'
  },
  pollutant: {
    padding: '8px 12px',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '8px',
    fontSize: '14px',
    textAlign: 'center'
  },
  sunSection: {
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '20px'
  },
  sunMoonGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '15px',
    marginBottom: '15px'
  },
  sunMoonItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '8px'
  },
  sunMoonIcon: {
    fontSize: '20px'
  },
  sunMoonLabel: {
    fontSize: '12px',
    color: '#636e72',
    margin: '0 0 3px 0'
  },
  sunMoonValue: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#2d3436',
    margin: 0
  },
  moonPhase: {
    textAlign: 'center'
  },
  moonPhaseText: {
    fontSize: '14px',
    color: '#2d3436',
    margin: 0
  },
  forecastSection: {
    backgroundColor: 'rgba(116, 185, 255, 0.1)',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '20px'
  },
  forecastGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '15px'
  },
  forecastItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '12px',
    padding: '15px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
  },
  forecastDay: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#2d3436',
    margin: '0 0 8px 0'
  },
  forecastIcon: {
    fontSize: '30px',
    display: 'block',
    margin: '8px 0'
  },
  forecastCondition: {
    fontSize: '12px',
    color: '#636e72',
    margin: '0 0 8px 0'
  },
  forecastTemp: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '8px 0'
  },
  forecastHigh: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#2d3436'
  },
  forecastLow: {
    fontSize: '16px',
    color: '#636e72'
  },
  forecastDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '8px'
  },
  forecastDetailItem: {
    fontSize: '11px',
    color: '#636e72',
    margin: 0
  },
  footer: {
    textAlign: 'center',
    paddingTop: '20px',
    borderTop: '1px solid #e0e0e0'
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    marginBottom: '10px'
  },
  lastUpdated: {
    fontSize: '12px',
    color: '#636e72',
    margin: 0
  },
  dataSource: {
    marginTop: '10px'
  },
  sourceText: {
    fontSize: '11px',
    color: '#636e72',
    margin: 0,
    fontStyle: 'italic'
  },
  loading: {
    textAlign: 'center',
    color: 'white',
    padding: '50px'
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '4px solid rgba(255, 255, 255, 0.3)',
    borderTop: '4px solid white',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '0 auto 20px'
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  },
  error: {
    textAlign: 'center',
    color: 'white',
    padding: '50px'
  },
  retryButton: {
    padding: '12px 24px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    border: '2px solid white',
    borderRadius: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px'
  }
}

export default Weather
