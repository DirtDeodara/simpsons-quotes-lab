import React from 'react';
import { shallow } from 'enzyme';
import Load from './Load';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Load handleOnClick={() => { }}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
