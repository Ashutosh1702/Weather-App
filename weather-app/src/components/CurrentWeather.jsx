import React from 'react'

const CurrentWeather = ({ weatherData, unit }) => {
  const getWeatherIcon = (condition, isDay = 1) => {
    const conditionLower = condition.toLowerCase()
    if (conditionLower.includes('sunny') || conditionLower.includes('clear')) {
      return isDay ? '☀️' : '🌙'
    }
    if (conditionLower.includes('partly cloudy')) return isDay ? '⛅' : '☁️'
    if (conditionLower.includes('cloud')) return '☁️'
    if (conditionLower.includes('overcast')) return '☁️'
    if (conditionLower.includes('drizzle')) return '🌦️'
    if (conditionLower.includes('rain') || conditionLower.includes('shower')) return '🌧️'
    if (conditionLower.includes('snow') || conditionLower.includes('blizzard')) return '❄️'
    if (conditionLower.includes('thunder') || conditionLower.includes('storm')) return '⛈️'
    if (conditionLower.includes('fog') || conditionLower.includes('mist')) return '🌫️'
    if (conditionLower.includes('hail')) return '🌨️'
    if (conditionLower.includes('sleet')) return '🌨️'
    return isDay ? '🌤️' : '🌙'
  }

  return (
    <div style={styles.mainWeather}>
      <div style={styles.temperature}>
        <span style={styles.tempIcon}>
          {getWeatherIcon(weatherData.current.condition.text, weatherData.current.is_day)}
        </span>
        <span style={unit === 'metric' ? styles.tempValue : styles.tempValueFahrenheit}>
          {unit === 'metric' ? weatherData.current.temp_c : weatherData.current.temp_f}°
          {unit === 'metric' ? 'C' : 'F'}
        </span>
      </div>
      <p style={styles.condition}>{weatherData.current.condition.text}</p>
      <p style={styles.feelsLike}>
        Feels like {unit === 'metric' ? weatherData.current.feelslike_c : weatherData.current.feelslike_f}°
        {unit === 'metric' ? 'C' : 'F'}
      </p>
    </div>
  )
}

const styles = {
  mainWeather: {
    textAlign: 'center',
    marginBottom: '25px',
    '@media (min-width: 480px)': {
      marginBottom: '30px'
    },
    '@media (min-width: 768px)': {
      marginBottom: '40px'
    }
  },
  temperature: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '10px',
    flexWrap: 'wrap',
    '@media (min-width: 480px)': {
      gap: '15px',
      marginBottom: '12px',
      flexWrap: 'nowrap'
    },
    '@media (min-width: 768px)': {
      gap: '20px',
      marginBottom: '15px'
    }
  },
  tempIcon: {
    fontSize: '50px',
    filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))',
    '@media (min-width: 480px)': {
      fontSize: '60px'
    },
    '@media (min-width: 768px)': {
      fontSize: '70px'
    },
    '@media (min-width: 1024px)': {
      fontSize: '80px'
    }
  },
  tempValue: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#2d3436',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
    lineHeight: 1,
    '@media (min-width: 480px)': {
      fontSize: '60px'
    },
    '@media (min-width: 768px)': {
      fontSize: '72px'
    },
    '@media (min-width: 1024px)': {
      fontSize: '84px'
    }
  },
  tempValueFahrenheit: {
    fontSize: '40px',
    fontWeight: 'bold',
    color: '#2d3436',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
    lineHeight: 1,
    '@media (min-width: 480px)': {
      fontSize: '50px'
    },
    '@media (min-width: 768px)': {
      fontSize: '60px'
    },
    '@media (min-width: 1024px)': {
      fontSize: '70px'
    }
  },
  condition: {
    fontSize: '18px',
    color: '#2d3436',
    margin: '0 0 8px 0',
    fontWeight: '500',
    lineHeight: 1.3,
    '@media (min-width: 480px)': {
      fontSize: '20px',
      margin: '0 0 9px 0'
    },
    '@media (min-width: 768px)': {
      fontSize: '24px',
      margin: '0 0 10px 0'
    },
    '@media (min-width: 1024px)': {
      fontSize: '28px'
    }
  },
  feelsLike: {
    fontSize: '14px',
    color: '#636e72',
    margin: 0,
    '@media (min-width: 480px)': {
      fontSize: '15px'
    },
    '@media (min-width: 768px)': {
      fontSize: '16px'
    },
    '@media (min-width: 1024px)': {
      fontSize: '18px'
    }
  }
}

export default CurrentWeather
