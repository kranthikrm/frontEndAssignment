import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders the `Information Store` title', () => {
    expect(app.find('h2').text()).toEqual('Information Store')
  });

  it('renders the StackList', () => {
    expect(app.find('Connect(StackList)').exists()).toBe(true);
  });

  it('renders a link to create new information', () => {
    expect(app.find('Link h4').text()).toEqual('Create A New Information');
  });
});