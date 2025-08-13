import React from 'react'

const Loading = () => {
  return (
    <div style={styles.container}>
      <div style={styles.loading}>
        <div style={styles.spinner}></div>
        <p>Loading weather data...</p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
    color: '#2d3436',
    '@media (min-width: 480px)': {
      padding: '35px'
    },
    '@media (min-width: 768px)': {
      padding: '40px'
    }
  },
  spinner: {
    fontSize: '24px',
    animation: 'spin 1s linear infinite',
    marginBottom: '12px',
    '@media (min-width: 480px)': {
      fontSize: '27px',
      marginBottom: '14px'
    },
    '@media (min-width: 768px)': {
      fontSize: '30px',
      marginBottom: '15px'
    }
  },
  text: {
    fontSize: '14px',
    margin: 0,
    '@media (min-width: 480px)': {
      fontSize: '15px'
    },
    '@media (min-width: 768px)': {
      fontSize: '16px'
    }
  }
}

export default Loading
