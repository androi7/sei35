import React from 'react';
import logo from './logo.svg';
import './App.css';

import Calculator from './Calculator';

class App extends React.Component {
  render() {
    console.log('rendering APp!')
    return (
      <div className="calculatorApp">
        <Calculator />
        {
          /*
          This is a multi-line comment you can use
          inside JSX code
          */
        }
      </div>
    );
  }
}

export default App;
