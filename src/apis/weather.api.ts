import axios from 'axios';
import 'dotenv/config';

export const getWeatherData = async (lon: number,lat: number) => {
  const response = await axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${process.env.WEATHER_API_KEY}&units=I`);
  return response;
} 