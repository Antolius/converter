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
      <select className='form-control  ml-2'
        id={this.props.id}
        value={this.props.value}
        onChange={this.props.onChange}
      >
        {this.renderOptions()}
      </select>
    );
  }
}

PickerComponent.displayName = 'PickerComponent';

// Uncomment properties you need
PickerComponent.propTypes = {
  id: React.PropTypes.string,
  value: React.PropTypes.oneOf(config.currencies),
  onChange: React.PropTypes.func
};
// PickerComponent.defaultProps = {};

export default PickerComponent;
