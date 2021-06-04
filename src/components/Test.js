import React, { Component } from 'react';
// import TestRender from './TestRender.js';
import TestMap from './TestMap.js';
import TestMap2 from './TestMap2.js';

import characters from '../data.js';

class Test extends Component {
  constructor() {
    super();
    this.state = {
      // test: characters,
      test: characters,
    }
  }

  testChange2 = (event) => {
    event.preventDefault();
    this.setState({ test: [3,4,5] });
  }

  testChange = (event) => {
    event.preventDefault();
    this.setState({ test: [
      {id: 1, name: '1'}, 
      {id: 2, name: '2'}, 
      {id: 3, name: '3'}, 
      {id: 4, name: '4'},
    ] });
  }

  render() {
    return (
      // console.log('yes'),
      // console.log(this.state.test),
      // <TestRender test2={this.state.test} testChange={this.testChange} /> 
      <TestMap test2={this.state.test} testChange={this.testChange} />
    )
  }
}

export default Test;