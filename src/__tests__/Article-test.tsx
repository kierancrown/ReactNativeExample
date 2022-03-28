import * as React from 'react';
import Article from '../components/Article';
import renderer from 'react-test-renderer';
import {News} from '../types/news';

const mockProps: News.Article = {
  urlToImage: 'https://www.example.com/image.jpg',
  source: {
    id: '1',
    name: 'Example',
  },
  title: 'Example title',
  author: 'Example author',
  description: 'Example description',
  url: 'https://www.example.com',
  content: 'Example content',
  publishedAt: new Date(),
};

it('renders correctly', () => {
  const tree = renderer.create(<Article {...mockProps} />);
  expect(tree).toMatchSnapshot();
});
