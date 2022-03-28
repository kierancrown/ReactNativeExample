import {DARKSKY_API_KEY} from '@env';
import axios from 'axios';

const getWeatherForecast = async (lat: number, long: number) => {
  try {
    const res = await axios.get(
      `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${lat},${long}`,
    );
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.error('Error getting weather forecast', error);
  }
};

export {getWeatherForecast};
