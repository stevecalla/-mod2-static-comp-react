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

  // componentDidMount() {
  //   this.apiFetch(4);
  //   // <ApiFetch />
  // }

  apiFetch = (personId) => {
    fetch(`https://swapi.dev/api/people/${personId}/`)
    // .then(response => console.log(response))
    .then(response => response.json())
    .then(data => console.log(data, data.name, data.birth_year, data.films[0]))
    // console.log(response)
    // .then(data => this.setState({
    //   character: data,
    // }))
  }

  getCharacterDataFromMarvelAPI = (characterName) => {
    // fetching the data for each character from the marvel api
    fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&limit=1&ts=1&apikey=e2deecaf6c770a3c085bbc7ed4b93986&hash=5f76c2f28fdd90fe55091d98e6de3f43`)
        .then((response) => response.json())
        .then((response) => console.log(response))
        // .then((response) => createCharacterListDetails(response))
        .then((character) => character);
  }

  fetchData = () => {
    console.log('fetch');
    this.apiFetch(1);
    this.getCharacterDataFromMarvelAPI('A-Bomb (HAS)')
  }

  render() {
    return (
      <div>
        <div className='character-nav'>
          <h1 className='detail-text'>Character Details</h1>
          <CharacterSelection handleSubmit={this.handleFormSubmit} createCheckboxes={this.createCheckboxes()} />
        </div>
          {/* <button onClick={this.fetchData(2)}>FETCH</button> */}
          <button onClick={this.fetchData}>FETCH</button>
          <CharacterRender card={this.state.selectedCharacters} />
      </div>
    )}
}

export default Character;