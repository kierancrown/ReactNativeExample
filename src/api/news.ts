import {NEWS_API_KEY} from '@env';
import axios from 'axios';
import {News} from '../types/news';

const getTopHeadlines = async (
  country: string,
): Promise<News.Article[] | undefined> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${NEWS_API_KEY}`,
      );
      if (res.status === 200) {
        resolve(
          Array.isArray(res.data.articles)
            ? (res.data.articles as News.Article[])
            : [],
        );
      }
    } catch (error) {
      reject(error);
    }
  });
};

export {getTopHeadlines};
