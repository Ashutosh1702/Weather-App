import React from 'react'

const WeatherFooter = ({ weatherData, lastUpdated }) => {
  return (
    <div style={styles.footer}>
      <div style={styles.footerGrid}>
        <p style={styles.lastUpdated}>
          📡 API Updated: {weatherData.current.last_updated}
        </p>
        <p style={styles.lastUpdated}>
          🔄 App Refreshed: {lastUpdated}
        </p>
      </div>
      <div style={styles.dataSource}>
        <p style={styles.sourceText}>
          Data provided by WeatherAPI.com • Real-time weather data
        </p>
      </div>
    </div>
  )
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '12px',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    marginTop: '15px',
    '@media (min-width: 480px)': {
      padding: '14px',
      marginTop: '18px'
    },
    '@media (min-width: 768px)': {
      padding: '15px',
      marginTop: '20px'
    }
  },
  attribution: {
    fontSize: '10px',
    color: '#636e72',
    margin: '0 0 4px 0',
    '@media (min-width: 480px)': {
      fontSize: '11px',
      margin: '0 0 5px 0'
    },
    '@media (min-width: 768px)': {
      fontSize: '12px'
    }
  },
  timestamp: {
    fontSize: '9px',
    color: '#b2bec3',
    margin: 0,
    '@media (min-width: 480px)': {
      fontSize: '10px'
    },
    '@media (min-width: 768px)': {
      fontSize: '11px'
    }
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '8px',
    marginBottom: '8px',
    '@media (min-width: 480px)': {
      gridTemplateColumns: '1fr 1fr',
      gap: '10px',
      marginBottom: '10px'
    }
  },
  lastUpdated: {
    fontSize: '10px',
    color: '#636e72',
    margin: 0,
    '@media (min-width: 480px)': {
      fontSize: '11px'
    },
    '@media (min-width: 768px)': {
      fontSize: '12px'
    }
  },
  dataSource: {
    marginTop: '8px',
    '@media (min-width: 480px)': {
      marginTop: '10px'
    }
  },
  sourceText: {
    fontSize: '9px',
    color: '#636e72',
    margin: 0,
    fontStyle: 'italic',
    '@media (min-width: 480px)': {
      fontSize: '10px'
    },
    '@media (min-width: 768px)': {
      fontSize: '11px'
    }
  }
}

export default WeatherFooter
