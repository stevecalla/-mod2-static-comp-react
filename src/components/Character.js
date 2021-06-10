import React from 'react';

import CharacterSelection from './CharacterSelection';
import CheckboxRender from "./CheckboxRender";
import CharacterRender from './CharacterRender.js';

import characters from '../data.js';
import characterList from '../dataCharacters.js';

import './Character.css';

// const Character = () => {
class Character extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCharacters: characters,
      checkboxes: characters.reduce(
        (options, option) => ({
          ...options,
          [option.name]: false,
        }),
        {}
        ),
    }
    // console.log(characters);
    }

  createCheckboxes = () => characterList.slice(0, 6).map(option => this.createCheckbox(option));

  createCheckbox = option => {
    console.log('t=', option);
    return (
      <CheckboxRender
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
      return selectedCheckboxes;
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
          <CharacterSelection handleSubmit={this.handleFormSubmit} createCheckboxes={this.createCheckboxes()} />
        </div>
          <CharacterRender card={this.state.selectedCharacters} />
      </div>
    )}
}

export default Character;