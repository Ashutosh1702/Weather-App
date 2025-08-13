import React from 'react'

const AirQuality = ({ weatherData }) => {
  const getAQIColor = (aqi) => {
    if (aqi <= 50) return '#00e400'
    if (aqi <= 100) return '#ffff00'
    if (aqi <= 150) return '#ff7e00'
    if (aqi <= 200) return '#ff0000'
    if (aqi <= 300) return '#8f3f97'
    return '#7e0023'
  }

  const getAQILabel = (aqi) => {
    if (aqi <= 50) return 'Good'
    if (aqi <= 100) return 'Moderate'
    if (aqi <= 150) return 'Unhealthy for Sensitive Groups'
    if (aqi <= 200) return 'Unhealthy'
    if (aqi <= 300) return 'Very Unhealthy'
    return 'Hazardous'
  }

  if (!weatherData.current.air_quality) {
    return null
  }

  return (
    <div style={styles.airQuality}>
      <h3 style={styles.aqiTitle}>🌬️ Air Quality</h3>
      <div style={styles.aqiContainer}>
        <div 
          style={{
            ...styles.aqiValue,
            backgroundColor: getAQIColor(weatherData.current.air_quality['us-epa-index'])
          }}
        >
          AQI: {weatherData.current.air_quality['us-epa-index']}
        </div>
        <p style={styles.aqiLabel}>
          {getAQILabel(weatherData.current.air_quality['us-epa-index'])}
        </p>
      </div>
      <div style={styles.pollutants}>
        <div style={styles.pollutant}>
          <span>CO: {weatherData.current.air_quality.co.toFixed(1)} μg/m³</span>
        </div>
        <div style={styles.pollutant}>
          <span>NO₂: {weatherData.current.air_quality.no2.toFixed(1)} μg/m³</span>
        </div>
        <div style={styles.pollutant}>
          <span>O₃: {weatherData.current.air_quality.o3.toFixed(1)} μg/m³</span>
        </div>
        <div style={styles.pollutant}>
          <span>PM2.5: {weatherData.current.air_quality.pm2_5.toFixed(1)} μg/m³</span>
        </div>
      </div>
    </div>
  )
}

const styles = {
  airQuality: {
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
  aqiTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#2d3436',
    margin: '0 0 12px 0',
    '@media (min-width: 480px)': {
      fontSize: '18px',
      margin: '0 0 14px 0'
    },
    '@media (min-width: 768px)': {
      fontSize: '20px',
      margin: '0 0 15px 0'
    }
  },
  aqiContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '12px',
    flexWrap: 'wrap',
    '@media (min-width: 480px)': {
      gap: '12px',
      marginBottom: '14px',
      flexWrap: 'nowrap'
    },
    '@media (min-width: 768px)': {
      gap: '15px',
      marginBottom: '15px'
    }
  },
  aqiValue: {
    padding: '6px 12px',
    borderRadius: '16px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '14px',
    '@media (min-width: 480px)': {
      padding: '7px 14px',
      borderRadius: '18px',
      fontSize: '15px'
    },
    '@media (min-width: 768px)': {
      padding: '8px 16px',
      borderRadius: '20px',
      fontSize: '16px'
    }
  },
  aqiLabel: {
    fontSize: '14px',
    color: '#2d3436',
    margin: 0,
    '@media (min-width: 480px)': {
      fontSize: '15px'
    },
    '@media (min-width: 768px)': {
      fontSize: '16px'
    }
  },
  pollutants: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '8px',
    '@media (min-width: 480px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
      gap: '9px'
    },
    '@media (min-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '10px'
    }
  },
  pollutant: {
    padding: '6px 10px',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '6px',
    fontSize: '12px',
    textAlign: 'center',
    '@media (min-width: 480px)': {
      padding: '7px 11px',
      borderRadius: '7px',
      fontSize: '13px'
    },
    '@media (min-width: 768px)': {
      padding: '8px 12px',
      borderRadius: '8px',
      fontSize: '14px'
    }
  }
}

export default AirQuality
