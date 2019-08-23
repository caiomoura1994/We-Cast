import React from 'react';
import TitleAndSubtitle from '../TitleAndSubtitle';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <TitleAndSubtitle
      title={'music.title'}
      subtitle={'subtitle'}
      size="small"
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});