import {DARKSKY_API_KEY} from '@env';
import {useQuery} from 'react-query';
import axios from 'axios';
import {Weather} from '../types/weather';

const getForecastForLocation = async (lat: number, long: number) => {
  const {data} = await axios.get(
    `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${lat},${long}?units=uk2`,
  );
  return data;
};

export default function useWeather(lat: number, long: number) {
  return useQuery<Weather.RootObject, Error>(['forecast', lat, long], () =>
    getForecastForLocation(lat, long),
  );
}
