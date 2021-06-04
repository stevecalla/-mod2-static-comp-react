import React, { Component } from 'react';
import CharacterCards from './CharacterCards';
import TestRenderCards from './TestRenderCards';

class TestRenderBoxesCheck extends Component {
  constructor(props) {
    // console.log('a=', props);
    super();
    this.state = {
      name: props.name,
      characterClicked: "",
    }
    // console.log(this.state.characterClicked);
  }

  handleChange = (event) => {
    const { value, checked } = event.target;
    console.log('z=', value, checked)
    this.setState({
      name: event.target.value,
      characterClicked: event.target.checked,
    });
    return <TestRenderCards />;
    return (
      <CharacterCards a={this.state.name} /> 
    )
  }

  render() {
    return (
      <>
        <label>
            <input 
              loading='lazy' 
              type='checkbox' 
              id='checkBox' 
              value={this.state.name}
              onClick={this.handleChange}
             />
            {this.state.name}
          </label>
          <br></br>
        {/* <button onClick={(event) => props.testChange(event)}>🗑</button> */}
        {/* <CharacterCards a={this.state.name} /> */}
        {/* <TestRenderCards /> */}
      </>
    )
  }
}

export default TestRenderBoxesCheck;