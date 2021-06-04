import React, { Component } from 'react';

class TestRenderCards extends Component {
  constructor(props) {
    console.log('cards=', props);
    super();
    this.state = {
      a: 'whatever',
    }
  }


  render(props) {
    return (
      <>
        z
      </>
    )
  }
}

export default TestRenderCards;