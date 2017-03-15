/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import PickerComponent from 'components//PickerComponent.js';

describe('PickerComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(PickerComponent, {id: 'myId'});
  });

  it('should use id from props', () => {
    expect(component.props.id).to.equal('myId');
  });
  
  it('should have 32 options to pick from', () => {
    const options = component.props.children;
    expect(options).to.have.lengthOf(32);
  });

});
