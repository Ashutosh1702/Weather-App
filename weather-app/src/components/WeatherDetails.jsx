import React from 'react'

const WeatherDetails = ({ weatherData, unit }) => {
  const getUVIndexColor = (uvIndex) => {
    if (uvIndex <= 2) return '#289500'
    if (uvIndex <= 5) return '#f7e400'
    if (uvIndex <= 7) return '#f85900'
    if (uvIndex <= 10) return '#d8001d'
    return '#6b49c8'
  }

  const getUVIndexLabel = (uvIndex) => {
    if (uvIndex <= 2) return 'Low'
    if (uvIndex <= 5) return 'Moderate'
    if (uvIndex <= 7) return 'High'
    if (uvIndex <= 10) return 'Very High'
    return 'Extreme'
  }

  return (
    <div style={styles.details}>
      <div style={styles.detailItem}>
        <span style={styles.detailIcon}>💨</span>
        <div>
          <p style={styles.detailLabel}>Wind</p>
          <p style={styles.detailValue}>
            {unit === 'metric' ? weatherData.current.wind_kph : weatherData.current.wind_mph} 
            {unit === 'metric' ? ' km/h' : ' mph'} {weatherData.current.wind_dir}
          </p>
          <p style={styles.detailSubValue}>
            Gusts: {unit === 'metric' ? weatherData.current.gust_kph : weatherData.current.gust_mph} 
            {unit === 'metric' ? ' km/h' : ' mph'}
          </p>
        </div>
      </div>

      <div style={styles.detailItem}>
        <span style={styles.detailIcon}>💧</span>
        <div>
          <p style={styles.detailLabel}>Humidity</p>
          <p style={styles.detailValue}>{weatherData.current.humidity}%</p>
          <p style={styles.detailSubValue}>
            Dew Point: {unit === 'metric' ? weatherData.current.dewpoint_c : weatherData.current.dewpoint_f}°
          </p>
        </div>
      </div>

      <div style={styles.detailItem}>
        <span style={styles.detailIcon}>👁️</span>
        <div>
          <p style={styles.detailLabel}>Visibility</p>
          <p style={styles.detailValue}>
            {unit === 'metric' ? weatherData.current.vis_km : weatherData.current.vis_miles} 
            {unit === 'metric' ? ' km' : ' miles'}
          </p>
        </div>
      </div>

      <div style={styles.detailItem}>
        <span style={styles.detailIcon}>🌡️</span>
        <div>
          <p style={styles.detailLabel}>Pressure</p>
          <p style={styles.detailValue}>
            {unit === 'metric' ? weatherData.current.pressure_mb : weatherData.current.pressure_in} 
            {unit === 'metric' ? ' mb' : ' in'}
          </p>
        </div>
      </div>

      <div style={styles.detailItem}>
        <span style={styles.detailIcon}>☀️</span>
        <div>
          <p style={styles.detailLabel}>UV Index</p>
          <p style={{...styles.detailValue, color: getUVIndexColor(weatherData.current.uv)}}>
            {weatherData.current.uv} - {getUVIndexLabel(weatherData.current.uv)}
          </p>
        </div>
      </div>

      <div style={styles.detailItem}>
        <span style={styles.detailIcon}>🌡️</span>
        <div>
          <p style={styles.detailLabel}>Heat Index</p>
          <p style={styles.detailValue}>
            {unit === 'metric' ? weatherData.current.heatindex_c : weatherData.current.heatindex_f}°
            {unit === 'metric' ? 'C' : 'F'}
          </p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '10px',
    '@media (min-width: 480px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: '12px'
    },
    '@media (min-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      gap: '15px'
    },
    '@media (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '18px'
    },
    '@media (min-width: 1200px)': {
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '20px'
    }
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px',
    backgroundColor: 'rgba(116, 185, 255, 0.1)',
    borderRadius: '10px',
    '@media (min-width: 480px)': {
      gap: '10px',
      padding: '14px',
      borderRadius: '11px'
    },
    '@media (min-width: 768px)': {
      gap: '12px',
      padding: '15px',
      borderRadius: '12px'
    }
  },
  detailIcon: {
    fontSize: '20px',
    flexShrink: 0,
    '@media (min-width: 480px)': {
      fontSize: '22px'
    },
    '@media (min-width: 768px)': {
      fontSize: '24px'
    }
  },
  detailLabel: {
    fontSize: '12px',
    color: '#636e72',
    margin: '0 0 4px 0',
    '@media (min-width: 480px)': {
      fontSize: '13px',
      margin: '0 0 5px 0'
    },
    '@media (min-width: 768px)': {
      fontSize: '14px'
    }
  },
  detailValue: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#2d3436',
    margin: 0,
    lineHeight: 1.2,
    '@media (min-width: 480px)': {
      fontSize: '15px'
    },
    '@media (min-width: 768px)': {
      fontSize: '16px'
    }
  },
  detailSubValue: {
    fontSize: '10px',
    color: '#636e72',
    margin: '2px 0 0 0',
    lineHeight: 1.2,
    '@media (min-width: 480px)': {
      fontSize: '11px',
      margin: '3px 0 0 0'
    },
    '@media (min-width: 768px)': {
      fontSize: '12px'
    }
  }
}

export default WeatherDetails
