import React, { Component } from 'react';

class TestRender extends Component {
  constructor(props) {
    // console.log('a=', props);
    super();
    this.state = {
      name: props.name,
      characterClicked: "",
    }
    console.log(this.state.characterClicked);
  }

  handleClick = (event) => {
    console.log('z=', event);
    const { value } = event.target;
    this.setState({
        characterClicked: value,
    })

    console.log(this.state.characterClicked);
}

  render(props) {
    return (
      <>
        <label>
            <input 
              loading='lazy' 
              type='checkbox' 
              id='checkBox' 
              value={this.state.name}
              onClick={this.handleClick}
             />
            {this.state.name}
          </label>
          <br></br>
        {/* <button onClick={(event) => props.testChange(event)}>🗑</button> */}
      </>
    )
  }
}

export default TestRender;