'use strict';

import React from 'react';
import PickerComponent from './PickerComponent';

class InputFormComponent extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form className='form-inline inputform-component' onSubmit={this.handleSubmit}>
        <div className='form-group mr-4'>
          <label htmlFor='amount'>Amount</label>
          <input id='amount' type='number' className='form-control ml-2'/>
        </div>
        <div className='form-group mr-4'>
          <label htmlFor='from'>From</label>
          <PickerComponent />
        </div>
        <div className='form-group mr-4'>
          <label htmlFor='to'>To</label>
          <PickerComponent />
        </div>
        <button type='submit' className='btn btn-primary'>CONVERT!</button>
      </form>
    );
  }
}

InputFormComponent.displayName = 'InputFormComponent';

// Uncomment properties you need
// InputFormComponent.propTypes = {};
// InputFormComponent.defaultProps = {};

export default InputFormComponent;
