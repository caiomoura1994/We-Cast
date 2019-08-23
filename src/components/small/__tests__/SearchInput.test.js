import React from 'react';
import renderer from 'react-test-renderer';
import SearchInput from '../SearchInput';
import { mount } from 'enzyme';
import MockProvider, { getMockStore } from 'redux-mock-provider';

const store = getMockStore({
  key: 'textTheHot',
  state: ''
});

describe('<Header /> component', () => {
  const component = mount(
    <MockProvider store={store}>
      <SearchInput />
    </MockProvider>
  );
});

