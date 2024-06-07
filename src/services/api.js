// src/services/api.js
import axios from "axios";

export const fetchUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

export const fetchWeather = async (city) => {
  const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your OpenWeatherMap API key
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  return response.data;
};

export const fetchDogImages = async () => {
  const response = await axios.get(
    "https://api.thedogapi.com/v1/images/search?limit=10"
  );
  return response.data;
};
