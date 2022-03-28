import * as React from 'react';
import Greeting from '../components/Greeting';
import renderer from 'react-test-renderer';

const mockProps = {
  datetime: new Date('2020-01-01T00:00:00.000Z'),
};

it('renders correctly', () => {
  const tree = renderer.create(<Greeting {...mockProps} />);
  expect(tree).toMatchSnapshot();
});
