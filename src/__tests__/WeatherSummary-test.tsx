import * as React from 'react';
import WeatherSummary from '../components/WeatherSummary';
import renderer from 'react-test-renderer';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

it('renders correctly', () => {
  const tree = renderer.create(
    <QueryClientProvider client={queryClient}>
      <WeatherSummary />
    </QueryClientProvider>,
  );
  expect(tree).toMatchSnapshot();
});
