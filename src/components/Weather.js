// src/components/Weather.js
import React, { useState } from 'react';
import { fetchWeather } from '../services/api';
import { Typography, TextField, Button, Container, Box, Paper } from '@mui/material';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const weatherData = await fetchWeather(city);
    setWeather(weatherData);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <TextField
            label="City"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            sx={{ mr: 2 }}
          />
          <Button variant="contained" color="primary" onClick={getWeather}>
            Get Weather
          </Button>
        </Box>
        {weather && (
          <Typography variant="body1">
            {weather.name}: {Math.round(weather.main.temp - 273.15)}°C, {weather.weather[0].description}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default Weather;
