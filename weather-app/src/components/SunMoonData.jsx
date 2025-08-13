import React from 'react'

const SunMoonData = ({ forecastData }) => {
  const formatTime = (timeStr) => {
    return new Date(timeStr).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  if (!forecastData || !forecastData.forecast || !forecastData.forecast.forecastday[0]) {
    return null
  }

  const astroData = forecastData.forecast.forecastday[0].astro

  return (
    <div style={styles.sunSection}>
      <h3 style={styles.sectionTitle}>🌅 Sun & Moon</h3>
      <div style={styles.sunMoonGrid}>
        <div style={styles.sunMoonItem}>
          <span style={styles.sunMoonIcon}>🌅</span>
          <div>
            <p style={styles.sunMoonLabel}>Sunrise</p>
            <p style={styles.sunMoonValue}>
              {formatTime(astroData.sunrise)}
            </p>
          </div>
        </div>
        <div style={styles.sunMoonItem}>
          <span style={styles.sunMoonIcon}>🌇</span>
          <div>
            <p style={styles.sunMoonLabel}>Sunset</p>
            <p style={styles.sunMoonValue}>
              {formatTime(astroData.sunset)}
            </p>
          </div>
        </div>
        <div style={styles.sunMoonItem}>
          <span style={styles.sunMoonIcon}>🌙</span>
          <div>
            <p style={styles.sunMoonLabel}>Moonrise</p>
            <p style={styles.sunMoonValue}>
              {formatTime(astroData.moonrise)}
            </p>
          </div>
        </div>
        <div style={styles.sunMoonItem}>
          <span style={styles.sunMoonIcon}>🌑</span>
          <div>
            <p style={styles.sunMoonLabel}>Moonset</p>
            <p style={styles.sunMoonValue}>
              {formatTime(astroData.moonset)}
            </p>
          </div>
        </div>
      </div>
      <div style={styles.moonPhase}>
        <p style={styles.moonPhaseText}>
          🌙 Moon Phase: {astroData.moon_phase}
        </p>
      </div>
    </div>
  )
}

const styles = {
  sunSection: {
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
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
  sunMoonGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '10px',
    marginBottom: '12px',
    '@media (min-width: 480px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
      gap: '12px',
      marginBottom: '14px'
    },
    '@media (min-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '15px',
      marginBottom: '15px'
    }
  },
  sunMoonItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '6px',
    '@media (min-width: 480px)': {
      gap: '9px',
      padding: '9px',
      borderRadius: '7px'
    },
    '@media (min-width: 768px)': {
      gap: '10px',
      padding: '10px',
      borderRadius: '8px'
    }
  },
  sunMoonIcon: {
    fontSize: '16px',
    flexShrink: 0,
    '@media (min-width: 480px)': {
      fontSize: '18px'
    },
    '@media (min-width: 768px)': {
      fontSize: '20px'
    }
  },
  sunMoonLabel: {
    fontSize: '10px',
    color: '#636e72',
    margin: '0 0 2px 0',
    '@media (min-width: 480px)': {
      fontSize: '11px',
      margin: '0 0 3px 0'
    },
    '@media (min-width: 768px)': {
      fontSize: '12px'
    }
  },
  sunMoonValue: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#2d3436',
    margin: 0,
    lineHeight: 1.2,
    '@media (min-width: 480px)': {
      fontSize: '13px'
    },
    '@media (min-width: 768px)': {
      fontSize: '14px'
    }
  },
  moonPhase: {
    textAlign: 'center'
  },
  moonPhaseText: {
    fontSize: '12px',
    color: '#2d3436',
    margin: 0,
    '@media (min-width: 480px)': {
      fontSize: '13px'
    },
    '@media (min-width: 768px)': {
      fontSize: '14px'
    }
  }
}

export default SunMoonData
