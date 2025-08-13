# 🌤️ Weather App

A modern, responsive weather application built with React and Vite, featuring real-time weather data, forecasts, and air quality information. The app uses a modular component architecture for better maintainability and code organization.

## ✨ Features

### 🌡️ **Current Weather**
- Real-time temperature display (Celsius/Fahrenheit)
- Weather condition with dynamic icons
- "Feels like" temperature
- Day/night appropriate weather icons

### 🔍 **Location Search**
- Search weather for any city worldwide
- Current location coordinates display
- Local time information

### 📊 **Detailed Weather Metrics**
- **Wind Information**: Speed, direction, and gust data
- **Humidity & Dew Point**: Complete moisture information
- **Visibility**: Current visibility conditions
- **Atmospheric Pressure**: Barometric pressure readings
- **UV Index**: Color-coded UV levels with safety ratings
- **Heat Index**: Real feel temperature calculations

### 🌅 **Astronomical Data**
- Sunrise and sunset times
- Moonrise and moonset times
- Current moon phase information

### 📅 **3-Day Forecast**
- Daily weather predictions
- High and low temperatures
- Weather conditions and icons
- Humidity and rain probability

### 🌬️ **Air Quality Index (AQI)**
- EPA standard color-coded AQI ratings
- Detailed pollutant levels (CO, NO₂, O₃, PM2.5)
- Health impact indicators

### 🎨 **Modern UI/UX**
- Glassmorphism design with gradient backgrounds
- Responsive grid layout
- Unit toggle (Metric/Imperial)
- Loading states and error handling
- Real-time data timestamps

## 🏗️ Architecture

The application follows a modular component architecture for better code organization:

```
src/
├── components/
│   ├── Weather.jsx          # Main container component
│   ├── WeatherSearch.jsx    # Search and unit toggle
│   ├── WeatherHeader.jsx    # Location and time display
│   ├── CurrentWeather.jsx   # Current temperature and conditions
│   ├── WeatherDetails.jsx   # Detailed weather metrics
│   ├── SunMoonData.jsx      # Astronomical information
│   ├── WeatherForecast.jsx  # 3-day forecast
│   ├── AirQuality.jsx       # Air quality information
│   ├── WeatherFooter.jsx    # Data source and timestamps
│   ├── Loading.jsx          # Loading state component
│   └── ErrorDisplay.jsx     # Error handling component
├── App.jsx                  # Root application component
└── main.jsx                 # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 🔧 Configuration

### API Configuration
The app uses WeatherAPI.com for weather data. The API key is currently embedded in the code for demo purposes:

```javascript
const API_KEY = 'cb6c9f72500b444c893183431252107'
```

**For production use:**
1. Sign up at [WeatherAPI.com](https://www.weatherapi.com/)
2. Get your free API key
3. Replace the API key in `Weather.jsx`
4. Consider using environment variables for security

### Environment Variables (Recommended)
Create a `.env` file in the root directory:
```env
VITE_WEATHER_API_KEY=your_api_key_here
```

Then update the API key usage in `Weather.jsx`:
```javascript
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile devices

## 🌐 API Integration

### WeatherAPI.com Endpoints Used:
- **Current Weather**: `/v1/current.json`
- **Forecast**: `/v1/forecast.json`

### Data Features:
- Real-time weather conditions
- 3-day weather forecasts
- Air quality index
- Astronomical data (sun/moon times)
- Location-based weather search

## 🎯 Component Details

### Core Components

- **Weather.jsx**: Main container managing state and API calls
- **WeatherSearch.jsx**: Search functionality and unit conversion
- **CurrentWeather.jsx**: Primary weather display with large temperature
- **WeatherDetails.jsx**: Grid of detailed weather metrics
- **WeatherForecast.jsx**: Multi-day forecast cards
- **AirQuality.jsx**: Air quality index and pollutant information
- **SunMoonData.jsx**: Astronomical data display

### Utility Components

- **Loading.jsx**: Animated loading spinner
- **ErrorDisplay.jsx**: Error handling with retry functionality
- **WeatherHeader.jsx**: Location and time information
- **WeatherFooter.jsx**: Data attribution and timestamps

## 🔄 State Management

The app uses React hooks for state management:
- `useState` for component state
- `useEffect` for API calls and lifecycle management
- Props for data flow between components

## 🎨 Styling

- **CSS-in-JS**: Inline styles for component-specific styling
- **Responsive Design**: CSS Grid and Flexbox for layouts
- **Modern UI**: Glassmorphism effects and gradient backgrounds
- **Color Coding**: Dynamic colors for UV index and air quality

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The `dist` folder will contain the production-ready files.

### Deployment Options
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **WeatherAPI.com** for providing comprehensive weather data
- **React** for the component framework
- **Vite** for the fast build tool and development server

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs

---

**Built with ❤️ using React + Vite**.
