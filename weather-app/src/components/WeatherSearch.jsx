import React from 'react'

const WeatherSearch = ({ onLocationChange, onUnitToggle, unit }) => {
  return (
    <div style={styles.topControls}>
      <form onSubmit={onLocationChange} style={styles.searchForm}>
        <input
          type="text"
          name="location"
          placeholder="Enter city name..."
          style={styles.searchInput}
        />
        <button type="submit" style={styles.searchButton}>
          🔍 Search
        </button>
      </form>
      <button onClick={onUnitToggle} style={styles.unitToggle}>
        {unit === 'metric' ? '°F' : '°C'}
      </button>
    </div>
  )
}

const styles = {
  topControls: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
    '@media (min-width: 480px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '15px',
      marginBottom: '25px'
    },
    '@media (min-width: 768px)': {
      marginBottom: '30px'
    }
  },
  searchForm: {
    display: 'flex',
    gap: '8px',
    width: '100%',
    '@media (min-width: 480px)': {
      flex: 1,
      gap: '10px'
    }
  },
  unitToggle: {
    padding: '8px 10px',
    backgroundColor: 'rgba(116, 185, 255, 0.2)',
    color: '#0984e3',
    border: '2px solid #0984e3',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    minWidth: '40px',
    alignSelf: 'stretch',
    '@media (min-width: 480px)': {
      padding: '10px 12px',
      borderRadius: '8px',
      fontSize: '14px',
      minWidth: '45px',
      alignSelf: 'auto'
    }
  },
  searchInput: {
    flex: 1,
    padding: '10px 14px',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    minWidth: 0,
    '@media (min-width: 480px)': {
      padding: '12px 16px',
      borderRadius: '10px',
      fontSize: '16px'
    }
  },
  searchButton: {
    padding: '10px 16px',
    backgroundColor: '#0984e3',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    whiteSpace: 'nowrap',
    '@media (min-width: 480px)': {
      padding: '12px 20px',
      borderRadius: '10px',
      fontSize: '16px'
    }
  }
}

export default WeatherSearch
