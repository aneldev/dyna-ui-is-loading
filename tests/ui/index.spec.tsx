import "jest";

import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import * as React from 'react';
import * as enzyme from 'enzyme';

import {DynaIsLoading} from '../../src';

describe('Home', () => {
  let wrapper;

  it('has expected content with deep render', () => {
    wrapper = enzyme.shallow(
      (
        <DynaIsLoading onClick={() => console.log('I am clicked')}>My button</DynaIsLoading>
      ),
      {}
    );

    expect(wrapper).toMatchSnapshot();
  });
});
