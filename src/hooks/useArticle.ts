import {useQuery} from 'react-query';
import axios from 'axios';
import {ParseResult} from '../types/news';

const getParsedArticle = async (url: string) => {
  const {data} = await axios.get(
    `http://192.168.0.69:3000/parse?url=${encodeURI(url)}`,
  );
  return data;
};

export default function useArticle(url: string) {
  return useQuery<ParseResult, Error>(['article', url], () =>
    getParsedArticle(url),
  );
}
