import {DARKSKY_API_KEY} from '@env';
import axios from 'axios';

const getWeatherForecast = async (lat: number, long: number) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(
        `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${lat},${long}?units=uk2`,
      );
      const res = await axios.get(
        `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${lat},${long}?units=uk2`,
      );
      if (res.status === 200) {
        resolve(res.data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export {getWeatherForecast};
