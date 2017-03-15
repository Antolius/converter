import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ConverterComponent from './ConverterComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className='container index'>
        <h1>Currency converter</h1>
        <ConverterComponent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
