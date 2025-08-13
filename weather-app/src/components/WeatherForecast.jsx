import React from 'react'

const WeatherForecast = ({ forecastData, unit }) => {
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

  if (!forecastData || !forecastData.forecast) {
    return null
  }

  return (
    <div style={styles.forecastSection}>
      <h3 style={styles.sectionTitle}>📅 3-Day Forecast</h3>
      <div style={styles.forecastGrid}>
        {forecastData.forecast.forecastday.map((day, index) => (
          <div key={index} style={styles.forecastItem}>
            <p style={styles.forecastDay}>
              {index === 0 ? 'Today' : new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
            </p>
            <span style={styles.forecastIcon}>
              {getWeatherIcon(day.day.condition.text, 1)}
            </span>
            <p style={styles.forecastCondition}>{day.day.condition.text}</p>
            <div style={styles.forecastTemp}>
              <span style={styles.forecastHigh}>
                {unit === 'metric' ? Math.round(day.day.maxtemp_c) : Math.round(day.day.maxtemp_f)}°
              </span>
              <span style={styles.forecastLow}>
                {unit === 'metric' ? Math.round(day.day.mintemp_c) : Math.round(day.day.mintemp_f)}°
              </span>
            </div>
            <div style={styles.forecastDetails}>
              <p style={styles.forecastDetailItem}>
                💧 {day.day.avghumidity}%
              </p>
              <p style={styles.forecastDetailItem}>
                🌧️ {day.day.daily_chance_of_rain}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  forecastSection: {
    backgroundColor: 'rgba(116, 185, 255, 0.1)',
    borderRadius: '10px',
    padding: '15px',
    marginBottom: '15px',
    '@media (min-width: 480px)': {
      borderRadius: '11px',
      padding: '18px',
      marginBottom: '18px'
    },
    '@media (min-width: 768px)': {
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '20px'
    }
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#2d3436',
    margin: '0 0 12px 0',
    textAlign: 'center',
    '@media (min-width: 480px)': {
      fontSize: '18px',
      margin: '0 0 14px 0'
    },
    '@media (min-width: 768px)': {
      fontSize: '20px',
      margin: '0 0 15px 0'
    }
  },
  forecastGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '10px',
    '@media (min-width: 480px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: '12px'
    },
    '@media (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '15px'
    },
    '@media (min-width: 1024px)': {
      gap: '20px'
    },
    '@media (min-width: 1200px)': {
      gap: '25px'
    }
  },
  forecastItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
    padding: '12px',
    textAlign: 'center',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    '@media (min-width: 480px)': {
      borderRadius: '11px',
      padding: '14px',
      boxShadow: '0 2px 7px rgba(0, 0, 0, 0.1)'
    },
    '@media (min-width: 768px)': {
      borderRadius: '12px',
      padding: '15px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
    }
  },
  forecastDay: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#2d3436',
    margin: '0 0 6px 0',
    '@media (min-width: 480px)': {
      fontSize: '13px',
      margin: '0 0 7px 0'
    },
    '@media (min-width: 768px)': {
      fontSize: '14px',
      margin: '0 0 8px 0'
    }
  },
  forecastIcon: {
    fontSize: '24px',
    display: 'block',
    margin: '6px 0',
    '@media (min-width: 480px)': {
      fontSize: '27px',
      margin: '7px 0'
    },
    '@media (min-width: 768px)': {
      fontSize: '30px',
      margin: '8px 0'
    }
  },
  forecastCondition: {
    fontSize: '10px',
    color: '#636e72',
    margin: '0 0 6px 0',
    lineHeight: 1.2,
    '@media (min-width: 480px)': {
      fontSize: '11px',
      margin: '0 0 7px 0'
    },
    '@media (min-width: 768px)': {
      fontSize: '12px',
      margin: '0 0 8px 0'
    }
  },
  forecastTemp: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '6px 0',
    '@media (min-width: 480px)': {
      margin: '7px 0'
    },
    '@media (min-width: 768px)': {
      margin: '8px 0'
    }
  },
  forecastHigh: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#2d3436',
    '@media (min-width: 480px)': {
      fontSize: '17px'
    },
    '@media (min-width: 768px)': {
      fontSize: '18px'
    }
  },
  forecastLow: {
    fontSize: '14px',
    color: '#636e72',
    '@media (min-width: 480px)': {
      fontSize: '15px'
    },
    '@media (min-width: 768px)': {
      fontSize: '16px'
    }
  },
  forecastDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '6px',
    '@media (min-width: 480px)': {
      marginTop: '7px'
    },
    '@media (min-width: 768px)': {
      marginTop: '8px'
    }
  },
  forecastDetailItem: {
    fontSize: '9px',
    color: '#636e72',
    margin: 0,
    '@media (min-width: 480px)': {
      fontSize: '10px'
    },
    '@media (min-width: 768px)': {
      fontSize: '11px'
    }
  }
}

export default WeatherForecast
