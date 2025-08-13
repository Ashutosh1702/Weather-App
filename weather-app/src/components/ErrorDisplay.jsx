import React from 'react'

const ErrorDisplay = ({ error, onRetry }) => {
  return (
    <div style={styles.container}>
      <div style={styles.error}>
        <h2>❌ Error</h2>
        <p>{error}</p>
        <button onClick={onRetry} style={styles.retryButton}>
          Try Again
        </button>
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
  error: {
    backgroundColor: 'rgba(231, 76, 60, 0.1)',
    border: '2px solid #e74c3c',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
    color: '#2d3436',
    '@media (min-width: 480px)': {
      borderRadius: '11px',
      padding: '18px'
    },
    '@media (min-width: 768px)': {
      borderRadius: '12px',
      padding: '20px'
    }
  },
  errorIcon: {
    fontSize: '32px',
    marginBottom: '12px',
    display: 'block',
    '@media (min-width: 480px)': {
      fontSize: '36px',
      marginBottom: '14px'
    },
    '@media (min-width: 768px)': {
      fontSize: '40px',
      marginBottom: '15px'
    }
  },
  errorMessage: {
    fontSize: '14px',
    margin: '0 0 15px 0',
    fontWeight: 'bold',
    '@media (min-width: 480px)': {
      fontSize: '15px',
      margin: '0 0 18px 0'
    },
    '@media (min-width: 768px)': {
      fontSize: '16px',
      margin: '0 0 20px 0'
    }
  },
  retryButton: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '@media (min-width: 480px)': {
      padding: '9px 18px',
      borderRadius: '7px',
      fontSize: '13px'
    },
    '@media (min-width: 768px)': {
      padding: '10px 20px',
      borderRadius: '8px',
      fontSize: '14px'
    }
  }
}

export default ErrorDisplay
