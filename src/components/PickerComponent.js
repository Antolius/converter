'use strict';

import React from 'react';
import config from 'config';

class PickerComponent extends React.Component {

  renderOptions = () => {
    return config.currencies.map((currency, index) => {
      return (
        <option key={index}>{currency}</option>
      );
    });
  }

  render() {
    return (
      <select className='form-control  ml-2'>
        {this.renderOptions()}
      </select>
    );
  }
}

PickerComponent.displayName = 'PickerComponent';

// Uncomment properties you need
// PickerComponent.propTypes = {};
// PickerComponent.defaultProps = {};

export default PickerComponent;
