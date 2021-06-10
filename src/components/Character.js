import React from 'react';
import SelectCharacters from './SelectCharacters';

import characters from '../data.js';
import characterList from '../dataCharacters.js';

import './Character.css';

import TestCheckbox from "./TestCheckbox";
import TestMap2 from './TestMap2.js';


// const Character = () => {
class Character extends React.Component {
  constructor(props) {
    super(props);
    this.a = props;
    this.state = {
      selectedCharacters: props ? characters : props,
      checkboxes: characters.reduce(
        (options, option) => ({
          ...options,
          [option.name]: false,
        }),
        {}
        ),
    }
    // console.log(characters);
    console.log(props);
    console.log(props === null);
    }

  // console.log(characters[0])
  createCheckboxes = () => characterList.slice(0, 6).map(option => this.createCheckbox(option));

  createCheckbox = option => {
    console.log('t=', option);
    return (
      <TestCheckbox
        label={option}
        isSelected={this.state.checkboxes[option]}
        onCheckboxChange={this.handleCheckboxChange}
        key={option}
        onChange={this.handleCheckboxChange}
      />
    );
  }

  handleCheckboxChange = (event) => {
    const filteredCharacters = characters.filter(character => character.name === event.target.name);
    // const prq = [this.state.selectedCharacters[0]];
    const { name } = event.target;

    this.setState(prevState => ({
      // selectedCharacters: prq,
      selectedCharacters: filteredCharacters,
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));

    console.log(this.state.checkboxes);
  }
  
  
  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    console.log('abcv1=', this.state.selectedCharacters);
    // console.log('keys=', Object.keys(this.state.checkboxes))
    const selectedCheckboxes = [];
    
    Object.keys(this.state.checkboxes)
    .filter(checkbox => this.state.checkboxes[checkbox] === true)
    .map(checkbox => {
      selectedCheckboxes.push(checkbox);
      console.log('selectedCheckboxes=', selectedCheckboxes);
    });
    
    // const filteredCharacters = characters.filter(character => character.name === 'Aaron Stack');
    // const filteredCharacters = characters.filter(character => character.name.includes('Aaron Stack'));
    const filteredCharacters = characters.filter(character => selectedCheckboxes.includes(character.name));
    console.log(filteredCharacters)
    
    this.setState(prevState => ({
      // selectedCharacters: characters,
      selectedCharacters: filteredCharacters,
    }))
  };
  
  render() {
    return (
      <div>
        <div className='character-nav'>
          <h1 className='detail-text'>Character Details</h1>
          <SelectCharacters handleSubmit={this.handleFormSubmit} createCheckboxes={this.createCheckboxes()} />
        </div>

        {/* <div>
          <div className={`arrow-up`} id='checkboxArrow'></div>
          <form onSubmit={this.handleFormSubmit} className={`checkbox-form`} id='checkboxMenu'>
            <fieldset className='character-checkbox'>
              <legend></legend>
              <div id='populateCheckbox'>{this.createCheckboxes()}</div>
            </fieldset>
            <div>
              <button type="submit" className='submit-button' id="submitButton">Submit Form</button>
            </div>
          </form>
        </div> */}

          <TestMap2 card={this.state.selectedCharacters} />

      </div>
    )}
}

export default Character;