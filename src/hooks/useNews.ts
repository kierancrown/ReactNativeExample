import {NEWS_API_KEY} from '@env';
import {useQuery} from 'react-query';
import axios from 'axios';
import {News} from '../types/news';

const getHeadlinesForCountry = async (country: string) => {
  const {data} = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${NEWS_API_KEY}`,
  );
  return data;
};

export default function useNews(country: string) {
  return useQuery<News.HeadlinesResponse, Error>(['headlines', country], () =>
    getHeadlinesForCountry(country),
  );
}
