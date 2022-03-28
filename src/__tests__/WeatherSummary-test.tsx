import * as React from 'react';
import WeatherSummary from '../components/WeatherSummary';
import renderer from 'react-test-renderer';
import {Weather} from '../types/weather';

const mockProps: Weather.Currently = {
  time: 1648494869,
  summary: 'Drizzle',
  icon: 'rain',
  nearestStormDistance: 0,
  precipIntensity: 0.1678,
  precipIntensityError: 0.0352,
  precipProbability: 0.99,
  precipType: 'rain',
  temperature: 12.2,
  apparentTemperature: 12.2,
  dewPoint: 7.82,
  humidity: 0.75,
  pressure: 1017.3,
  windSpeed: 5.37,
  windGust: 10.45,
  windBearing: 89,
  cloudCover: 0.91,
  uvIndex: 0,
  visibility: 10,
  ozone: 404.9,
  nearestStormBearing: 89,
};

it('renders correctly', () => {
  const tree = renderer.create(<WeatherSummary weather={mockProps} />);
  expect(tree).toMatchSnapshot();
});
