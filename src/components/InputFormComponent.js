'use strict';

import React from 'react';
import PickerComponent from './PickerComponent';
import config from 'config';

class InputFormComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: 1,
      from: config.currencies[0],
      to: config.currencies[1]
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleInput = (event) => {
    const key = event.target.id;
    const newValue = event.target.value;
    this.setState({
      [key]: newValue
    });
  }

  render() {
    return (
      <form className='form-inline inputform-component' onSubmit={this.handleSubmit}>
        <div className='form-group mr-4'>
          <label htmlFor='amount'>Amount</label>
          <input id='amount' type='number' className='form-control ml-2'
            value={this.state.amount}
            onChange={this.handleInput}
          />
        </div>
        <div className='form-group mr-4'>
          <label htmlFor='from'>From</label>
          <PickerComponent
            id='from'
            value={this.state.from}
            onChange={this.handleInput}
          />
        </div>
        <div className='form-group mr-4'>
          <label htmlFor='to'>To</label>
          <PickerComponent
            id='to'
            value={this.state.to}
            onChange={this.handleInput}
          />
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
