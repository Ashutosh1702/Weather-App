import React from 'react'

const WeatherHeader = ({ weatherData }) => {
  return (
    <div style={styles.header}>
      <h1 style={styles.cityName}>
        📍 {weatherData.location.name}, {weatherData.location.country}
      </h1>
      <p style={styles.localTime}>
        🕒 Local Time: {weatherData.location.localtime}
      </p>
      <p style={styles.coordinates}>
        🌐 {weatherData.location.lat}°N, {weatherData.location.lon}°E
      </p>
    </div>
  )
}

const styles = {
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    '@media (min-width: 480px)': {
      marginBottom: '25px'
    },
    '@media (min-width: 768px)': {
      marginBottom: '30px'
    }
  },
  cityName: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#2d3436',
    margin: '0 0 8px 0',
    lineHeight: 1.2,
    wordBreak: 'break-word',
    '@media (min-width: 480px)': {
      fontSize: '24px',
      margin: '0 0 10px 0'
    },
    '@media (min-width: 768px)': {
      fontSize: '28px'
    },
    '@media (min-width: 1024px)': {
      fontSize: '32px'
    }
  },
  localTime: {
    fontSize: '14px',
    color: '#636e72',
    margin: '0 0 4px 0',
    '@media (min-width: 480px)': {
      fontSize: '15px',
      margin: '0 0 5px 0'
    },
    '@media (min-width: 768px)': {
      fontSize: '16px'
    }
  },
  coordinates: {
    fontSize: '12px',
    color: '#636e72',
    margin: 0,
    '@media (min-width: 480px)': {
      fontSize: '13px'
    },
    '@media (min-width: 768px)': {
      fontSize: '14px'
    }
  }
}

export default WeatherHeader
