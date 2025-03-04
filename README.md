# Global Weather

This project provides a comprehensive weather forecasting application that allows users to get current weather information and forecasts for different locations around the globe.

## Setup and Run the Project Locally

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/itsleonbro/global-weather.git
   cd global-weather
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a .env file in the root directory and add your OpenWeatherMap API key:

   ```env
   VITE_OPENWEATHER_API_KEY=openweather_api_key
   ```

### Running the Project

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173` to view the application.

## Libraries and Tools Used

- **React**: A JavaScript library for building user interfaces
- **React Leaflet**: React components for Leaflet maps
- **Leaflet**: JavaScript library for interactive maps
- **Axios**: HTTP client for making API requests
- **OpenWeatherMap API**: Used to fetch weather data

## Assumptions

- Users have an internet connection to load map tiles and fetch weather data
