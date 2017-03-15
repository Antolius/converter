'use strict';

import React from 'react';
import InputFormComponent from './InputFormComponent';

class ConverterComponent extends React.Component {
  render() {
    const result = 47;

    return (
      <div className='converter-component'>
         <h5>Conversion details</h5>
         <InputFormComponent />
         <h5>Conversion result</h5>
         <p>{result}</p>
      </div>
    );
  }
}

ConverterComponent.displayName = 'ConverterComponent';

// Uncomment properties you need
// ConverterComponent.propTypes = {};
// ConverterComponent.defaultProps = {};

export default ConverterComponent;
