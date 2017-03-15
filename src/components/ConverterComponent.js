'use strict';

import React from 'react';
import InputFormComponent from './InputFormComponent';
import 'whatwg-fetch';

class ConverterComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: 0
    };
  }

  handleConversion = ({ amount, from, to }) => {
    if (from === to) {
      this.setState({
        result: amount
      });
      return;
    }

    fetch(`http://api.fixer.io/latest?base=${from}&symbols=${to}`)
      .then((response) => response.json())
      .then((responseBody) => {
        const rate = responseBody.rates[to];
        const newResult = rate * amount;
        this.setState({
          result: newResult
        });
      }).catch((error) => {
        this.setState({
          result: 'Something went wrong, please try again.'
        });
      });
  }

  render() {
    return (
      <div className='converter-component'>
         <h5>Conversion details</h5>
         <InputFormComponent onSubmit={this.handleConversion}/>
         <h5>Conversion result</h5>
         <p>{this.state.result}</p>
      </div>
    );
  }
}

ConverterComponent.displayName = 'ConverterComponent';

// Uncomment properties you need
// ConverterComponent.propTypes = {};
// ConverterComponent.defaultProps = {};

export default ConverterComponent;
