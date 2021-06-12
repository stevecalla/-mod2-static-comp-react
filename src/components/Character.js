import React, { Component, Suspense } from 'react';

import CharacterSelection from './CharacterSelection';
import CheckboxRender from "./CheckboxRender";

import characters from '../data.js';
import characterList from '../dataCharacters.js';

import './Character.css';

// import CharacterRender from './CharacterRender.js';
// const CharacterRender = React.lazy(() => import('./CharacterRender.js'));

const CharacterRender = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, .25 * 1000)).then(
    () => import("./CharacterRender")
  );
});


// const Character = () => {
class Character extends Component {
  constructor() {
    super();
    this.state = {
      selectedCharacters: [],
      checkboxes: characters.reduce(
        (options, option) => ({
          ...options,
          [option.name]: false,
        }),
        {}
        ),
    }
    // console.log(characters);
    this.characters = [];
    }

  createCheckboxes = () => characterList.slice(0, 10).map(option => this.createCheckbox(option));

  createCheckbox = option => {
    // console.log('t=', option);
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
    // const filteredCharacters = characters.filter(character => character.name === event.target.name); //todo comment out to use api
    const { name } = event.target; //todo need if using data.js

    // console.log('u=', event.target.name)
    // console.log('t=', filteredCharacters);

    // const filteredCharacters = this.getCharacterDataFromMarvelAPI(event.target.name, name); //todo un-comment to use api

    this.setState(prevState => ({
      // selectedCharacters: filteredCharacters, //todo comment out to use api
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
    
    console.log('v=', this.state.checkboxes);
  }
  
  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    console.log('abcv1=', this.state.selectedCharacters);
    // console.log('keys=', Object.keys(this.state.checkboxes))
    this.characters = [];
    const selectedCheckboxes = [];
    
    Object.keys(this.state.checkboxes)
    .filter(checkbox => this.state.checkboxes[checkbox] === true)
    .map(checkbox => {
      selectedCheckboxes.push(checkbox);
      console.log('selectedCheckboxes=', selectedCheckboxes);
      return selectedCheckboxes;
    });
    console.log(selectedCheckboxes);
    
    //use API
    selectedCheckboxes.map(character => this.getCharacterDataFromMarvelAPI(character))
    
    //use data.js
    // const filteredCharacters = characters.filter(character => character.name === 'Aaron Stack');
    // const filteredCharacters = characters.filter(character => character.name.includes('Aaron Stack'));

    // const filteredCharacters = characters.filter(character => selectedCheckboxes.includes(character.name));
    // console.log(filteredCharacters)

    this.setState(prevState => ({
      // selectedCharacters: filteredCharacters,
    }))
  };

  componentDidMount() {
    const randomCount = 10;
    const randomNumbers = [];
    const randomCharacters = [];

    //generate array of random numbers from index
    for (let i = 0; i < randomCount; i++) {
      // randomNumbers.push(Math.floor(Math.floor(Math.random()*characters.length))); //todo use static data
      randomNumbers.push(Math.floor(Math.floor(Math.random()*characterList.length))); //todo use api
    };
    console.log(randomNumbers);

    //use random numbers to create array of character names
    // randomNumbers.forEach((number) => randomCharacters.push(characters[number])); //todo use static data
    randomNumbers.forEach((number) => randomCharacters.push(characterList[number])); //todo use api
    console.log(randomCharacters);

    //submit character names to the api to get data and render
    randomCharacters.map(character => this.getCharacterDataFromMarvelAPI(character)) //todo use api

    this.setState(prevState => ({
        selectedCharacters: randomCharacters,
      }))
    // this.apiFetch(4);
    // <ApiFetch />
  }

  // apiFetch = (personId) => {
  //   fetch(`https://swapi.dev/api/people/${personId}/`)
  //   // .then(response => console.log(response))
  //   .then(response => response.json())
  //   .then(data => console.log(data, data.name, data.birth_year, data.films[0]))
  //   // console.log(response)
  //   // .then(data => this.setState({
  //   //   character: data,
  //   // }))
  // }
  
  fetchData = () => {
    console.log('fetch');
    // this.apiFetch(1);
    this.getCharacterDataFromMarvelAPI('A-Bomb (HAS)');
    this.getCharacterDataFromMarvelAPI('3-D Man');
    this.getCharacterDataFromMarvelAPI('3-D Man');
  }

  getCharacterDataFromMarvelAPI = (characterName, name) => {
    // fetching the data for each character from the marvel api
    fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&limit=1&ts=1&apikey=e2deecaf6c770a3c085bbc7ed4b93986&hash=5f76c2f28fdd90fe55091d98e6de3f43`)
        .then((response) => response.json())
        .then((character) => this.createCharacter(character, name));
  }

  createCharacter = (cards1) => {
    // console.log('cards1=', cards1)

    // cards1.forEach((character) => renderCharacterList.push(character));

    const cards = {
      name: cards1.data.results[0].name,
      description: cards1.data.results[0].description,
      key: cards1.data.results[0].id,
      imageURL: cards1.data.results[0].thumbnail.path,
      imageExtension: cards1.data.results[0].thumbnail.extension,
      profileURL: cards1.data.results[0].urls[0].url,
      comicsURL: cards1.data.results[0].urls[1].url,
      comicsCount: cards1.data.results[0].comics.available,
      storiesCount: cards1.data.results[0].stories.available,
    };

    // console.log(this.character.includes(cards));

    const abc = this.characters.map(characters => characters.name);  //todo this should be in the handle function to avoid prevent another call on the api
    console.log(abc);
    abc.includes(cards.name) ? console.log('a') : this.characters.push(cards)

    // console.log('cards=', cards);
    // console.log('this.characters=', this.characters);
    
    // const cards2 = cards1.data.results.map(character => ({
    //   name: character.name,
    //   description: character.description,
    //   key: character.id,
    //   imageURL: character.thumbnail.path,
    //   imageExtension: character.thumbnail.extension,
    //   profileURL: character.urls[0].url,
    //   comicsURL: character.urls[1].url,
    //   comicsCount: character.comics.available,
    //   storiesCount: character.stories.available,
    // }));
    // console.log('a=', cards2);

    // let card = [];
    // card = card.push(cards2);

    this.setState(prevState => ({
    //   // selectedCharacters: cards2,
      selectedCharacters: this.characters,
    }))
    
    // this.setState(prevState => ({
    //   // selectedCharacters: filteredCharacters,
    //   selectedCharacters: this.characters,
    //   checkboxes: {
    //     ...prevState.checkboxes,
    //     [name]: !prevState.checkboxes[name]
    //   }
    // }));

    console.log('this.state.selectedCharacters=', this.state.selectedCharacters);

  }

  render() {
    return (
      <div>
        <div className='character-nav'>
          <h1 className='detail-text'>Character Details</h1>
          <CharacterSelection handleSubmit={this.handleFormSubmit} createCheckboxes={this.createCheckboxes()} />
        </div>
          {/* <button onClick={this.fetchData}>FETCH</button> //test fetch button */}
          <Suspense minDuration={1000} fallback={<div>Loading...</div>}>
            <CharacterRender card={this.state.selectedCharacters} />
          </Suspense>
      </div>
    )}
}

export default Character;